import { useState, useEffect, useCallback } from "react";
import { productosServices } from "../services/productosServices";
import type { Producto } from "../models/typeProducto";

export const useProductos = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const data = await productosServices.getAll();
        setProductos(data);
      } catch (err) {
        setError(`Error al cargar productos: ${err}`);
        console.log(`Error carga de productos: ${err}`);
      } finally {
        setLoading(false);
      }
    };
    fetchProductos();
  }, []);

  const eliminarProducto = async (id: string) => {
    try {
      await productosServices.delete(id);
      setProductos((prev) => prev.filter((producto) => producto.id !== id));
      console.log(`Producto con id ${id} eliminado correctamente`);
    } catch (err) {
      console.log(`No se pudo eliminar el producto: ${err}`);
    }
  };

  const modificarProducto = async (id: string, cambios: Partial<Producto>) => {
    try {
      const data = await productosServices.patch(id, cambios);
      setProductos((prev) =>
        prev.map((producto) => (producto.id === id ? data : producto))
      );
      console.log("Producto actualizado:", data);
    } catch (error) {
      console.log(`No se pudo actualizar el producto: ${error}`);
    }
  };

  const crearProducto = async (producto: Producto) => {
    try {
      const data = await productosServices.create(producto);
      setProductos((prev) => [...prev, data]);
      console.log("Producto creado exitosamente:", data);
    } catch (error) {
      console.log(`No se pudo crear el producto: ${error}`);
    }
  };
  const traerProducto = useCallback(async (id: string) => {
    try {
      const data = await productosServices.getOne(id);
      return data;
    } catch (err) {
      console.log(`No se pudo traer el producto: ${err}`);
      return null;
    }
  }, []);
  return {
    productos,
    loading,
    error,
    eliminarProducto,
    modificarProducto,
    crearProducto,
    traerProducto,
  };
};
