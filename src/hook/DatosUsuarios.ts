import { useState, useEffect } from "react";
import { usuariosService } from "../services/usuariosServices";
import type { Usuario } from "../models/typeUsuarios";

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
  const crearUsuario = async (user: Usuario) => {
      try {
        const data = await usuariosService.create(user);
        setUsuarios((prev) => [...prev, data]);
        console.log("usuario creada exitosamente:", data);
      } catch (error) {
        console.log(`No se pudo crear el usuario: ${error}`);
      }
    };

  return { usuarios,crearUsuario, loading, error };
};
