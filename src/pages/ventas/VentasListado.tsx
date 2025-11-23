import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Venta {
  id: number;
  cliente: string;
  producto: string;
  cantidad: string;
  fecha: string;
}

function VentasListado() {
  const [ventas, setVentas] = useState<Venta[]>([]);
  const navigate = useNavigate();

  const cargar = () => {
    fetch("http://localhost:3001/ventas")
      .then(res => res.json())
      .then(data => setVentas(data));
  };

  useEffect(() => {
    cargar();
  }, []);

  const eliminar = (id: number) => {
    fetch(`http://localhost:3001/ventas/${id}`, {
      method: "DELETE"
    }).then(() => cargar());
  };

  const editar = (id: number) => {
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
              <td>{new Date(v.fecha).toLocaleDateString()}</td>
              <td>
                <button onClick={() => editar(v.id)}>Editar</button>{" "}
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
