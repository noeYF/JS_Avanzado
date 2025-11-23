import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function VentasEditar() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [cliente, setCliente] = useState("");
  const [producto, setProducto] = useState("");
  const [cantidad, setCantidad] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3001/ventas/${id}`)
      .then(res => res.json())
      .then(data => {
        setCliente(data.cliente);
        setProducto(data.producto);
        setCantidad(data.cantidad);
      });
  }, [id]);

  const actualizar = (e: React.FormEvent) => {
    e.preventDefault();

    fetch(`http://localhost:3001/ventas/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        cliente,
        producto,
        cantidad,
        fecha: new Date().toISOString()
      })
    }).then(() => {
      alert("Venta actualizada");
      navigate("/ventas/lista");
    });
  };

  return (
    <div className="form-box">
      <h2>Editar Venta</h2>

      <form onSubmit={actualizar}>
        <input
          type="text"
          value={cliente}
          onChange={(e) => setCliente(e.target.value)}
        />

        <input
          type="text"
          value={producto}
          onChange={(e) => setProducto(e.target.value)}
        />

        <input
          type="number"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
        />

        <button type="submit">Actualizar</button>
      </form>
    </div>
  );
}

export default VentasEditar;
