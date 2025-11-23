import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Producto } from "../../models/types";

function ProductosListado() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const navigate = useNavigate();

  const cargar = async () => {
    const res = await fetch("http://localhost:3001/productos");
    const data: Producto[] = await res.json();
    setProductos(data);
  };

  useEffect(() => {
    cargar();
  }, []);

  const eliminar = async (id: number | string) => {
    try {
      const res = await fetch(
        `http://localhost:3001/productos/${String(id)}`,
        { method: "DELETE" }
      );

      if (!res.ok) {
        throw new Error(`Status: ${res.status}`);
      }

      alert("Producto eliminado correctamente");
      cargar();
    } catch (error) {
      alert("Error al eliminar");
      console.error(error);
    }
  };

  const editar = (id: number | string) => {
    navigate(`/productos/editar/${id}`);
  };

  return (
    <div className="table-box">
      <h2>Lista de Productos</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.nombre}</td>
              <td>{p.precio}</td>
              <td>
                <button onClick={() => editar(p.id)}>Editar</button>
                <button onClick={() => eliminar(p.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductosListado;
