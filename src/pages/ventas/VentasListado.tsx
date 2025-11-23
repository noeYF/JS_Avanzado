import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Venta } from "../../models/types";

function VentasListado() {
  const [ventas, setVentas] = useState<Venta[]>([]);
  const navigate = useNavigate();

  const cargar = async () => {
    const res = await fetch("http://localhost:3001/ventas");
    const data: Venta[] = await res.json();
    setVentas(data);
  };

  useEffect(() => {
    cargar();
  }, []);

  const eliminar = async (id: string | number) => {
    try {
      const res = await fetch(
        `http://localhost:3001/ventas/${id}`,
        { method: "DELETE" }
      );

      if (!res.ok) {
        throw new Error(`Status: ${res.status}`);
      }

      alert("Venta eliminada correctamente");
      cargar();
    } catch (error) {
      alert("Error al eliminar");
      console.error(error);
    }
  };

  const editar = (id: string | number) => {
    navigate(`/ventas/editar/${id}`);
  };

  return (
    <div className="table-box">
      <h2>Lista de Ventas</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Cliente</th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Fecha</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {ventas.map((v) => (
            <tr key={v.id}>
              <td>{v.id}</td>
              <td>{v.cliente}</td>
              <td>{v.producto}</td>
              <td>{v.cantidad}</td>
              <td>{v.fecha}</td>
              <td>
                <button onClick={() => editar(v.id)}>Editar</button>
                <button onClick={() => eliminar(v.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VentasListado;
