import { useState, useEffect } from "react";
import { usuariosService } from "../services/usuariosServices";
import type { Usuario } from "../models/types";

export const useUsuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const data = await usuariosService.getAll();
        setUsuarios(data);
      } catch (err) {
        setError(`Error al cargar usuarios: ${err}`);
        console.log(`Error Carga de Usuarios ${err}`);
      } finally {
        setLoading(false);
      }
    };

    fetchUsuarios();
  }, []);

  return { usuarios, loading, error };
};
