import { useState, useEffect, useCallback } from "react";
import { clientesServices } from "../services/clientesServices";
import type { Cliente } from "../models/typeClientes";

export const useClientes = () => {
  const [Clientes, setClientes] = useState<Cliente[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const data = await clientesServices.getAll();
        setClientes(data);
      } catch (err) {
        setError(`Error al cargar Clientes: ${err}`);
        console.log(`Error carga de Clientes: ${err}`);
      } finally {
        setLoading(false);
      }
    };
    fetchClientes();
  }, []);

  const eliminarCliente = async (id: string) => {
    try {
      await clientesServices.delete(id);
      setClientes((prev) => prev.filter((Cliente) => Cliente.id !== id));
      console.log(`Cliente con id ${id} eliminado correctamente`);
    } catch (err) {
      console.log(`No se pudo eliminar el Cliente: ${err}`);
    }
  };

  const modificarCliente = async (id: string, cambios: Partial<Cliente>) => {
    try {
      const data = await clientesServices.patch(id, cambios);
      setClientes((prev) =>
        prev.map((Cliente) => (Cliente.id === id ? data : Cliente))
      );
      console.log("Cliente actualizado:", data);
    } catch (error) {
      console.log(`No se pudo actualizar el Cliente: ${error}`);
    }
  };

  const crearCliente = async (Cliente: Cliente) => {
    try {
      const data = await clientesServices.create(Cliente);
      setClientes((prev) => [...prev, data]);
      console.log("Cliente creado exitosamente:", data);
    } catch (error) {
      console.log(`No se pudo crear el Cliente: ${error}`);
    }
  };
  const traerCliente = useCallback(async (id: string) => {
    try {
      const data = await clientesServices.getOne(id);
      return data;
    } catch (err) {
      console.log(`No se pudo traer el Cliente: ${err}`);
      return null;
    }
  }, []);
  return {
    Clientes,
    loading,
    error,
    eliminarCliente,
    modificarCliente,
    crearCliente,
    traerCliente,
  };
};
