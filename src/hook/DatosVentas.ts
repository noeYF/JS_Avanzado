import { useState, useEffect, useCallback } from "react";
import { ventasServices } from "../services/ventasServices";
import type { Venta } from "../models/types";

export const useVentas = () => {
  const [ventas, setVentas] = useState<Venta[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  // Obtener todas las ventas
  useEffect(() => {
    const fetchVentas = async () => {
      try {
        const data = await ventasServices.getAll();
        setVentas(data);
      } catch (err) {
        setError(`Error al cargar ventas: ${err}`);
        console.log(`Error carga de ventas: ${err}`);
      } finally {
        setLoading(false);
      }
    };

    fetchVentas();
  }, []);

  // Crear una nueva venta
  const crearVenta = async (venta: Venta) => {
    try {
      const data = await ventasServices.create(venta);
      setVentas((prev) => [...prev, data]);
      console.log("Venta creada exitosamente:", data);
    } catch (error) {
      console.log(`No se pudo crear la venta: ${error}`);
    }
  };

  // Eliminar una venta
  const eliminarVenta = async (id: string) => {
    try {
      await ventasServices.delete(id);
      setVentas((prev) => prev.filter((venta) => venta.id !== id));
      console.log(`Venta con id ${id} eliminada correctamente`);
    } catch (err) {
      console.log(`No se pudo eliminar la venta: ${err}`);
    }
  };

  // Modificar una venta (parcial)
  const modificarVenta = async (id: string, cambios: Partial<Venta>) => {
    try {
      const data = await ventasServices.patch(id, cambios);
      setVentas((prev) =>
        prev.map((venta) => (venta.id === id ? data : venta))
      );
      console.log("Venta actualizada:", data);
    } catch (error) {
      console.log(`No se pudo actualizar la venta: ${error}`);
    }
  };

  // Traer una venta específica
  const traerVenta = useCallback(async (id: string) => {
    try {
      const data = await ventasServices.getOne(id);
      return data;
    } catch (err) {
      console.log(`No se pudo traer la venta: ${err}`);
      return null;
    }
  }, []);

  return {
    ventas,
    loading,
    error,
    crearVenta,
    eliminarVenta,
    modificarVenta,
    traerVenta,
  };
};
