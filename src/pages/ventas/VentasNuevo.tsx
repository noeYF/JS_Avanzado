import { useState } from "react";

function VentasNuevo() {
  const [cliente, setCliente] = useState("");
  const [producto, setProducto] = useState("");
  const [cantidad, setCantidad] = useState("");

  const guardar = (e: React.FormEvent) => {
    e.preventDefault();

    const venta = { cliente, producto, cantidad, fecha: new Date().toISOString() };

    fetch("http://localhost:3001/ventas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(venta)
    });

    setCliente("");
    setProducto("");
    setCantidad("");
    alert("Venta registrada");
  };

  return (
    <div className="form-box">
      <h2>Nueva Venta</h2>

      <form onSubmit={guardar}>
        <input
          type="text"
          placeholder="Nombre del cliente"
          value={cliente}
          onChange={(e) => setCliente(e.target.value)}
        />

        <input
          type="text"
          placeholder="Producto"
          value={producto}
          onChange={(e) => setProducto(e.target.value)}
        />

        <input
          type="number"
          placeholder="Cantidad"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
        />

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default VentasNuevo;
