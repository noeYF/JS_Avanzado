import { useState } from "react";
import type { VentaCreate } from "../../models/types";

function VentasNuevo() {
  const [venta, setVenta] = useState<VentaCreate>({
    cliente: "",
    producto: "",
    cantidad: 0,
    fecha: ""
  });

  const guardar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nuevaVenta: VentaCreate = {
      ...venta,
      fecha: new Date().toISOString()
    };

    fetch("http://localhost:3001/ventas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevaVenta)
    });

    setVenta({
      cliente: "",
      producto: "",
      cantidad: 0,
      fecha: ""
    });

    alert("Venta registrada");
  };

  return (
    <div className="form-box">
      <h2>Nueva Venta</h2>

      <form onSubmit={guardar}>
        <input
          type="text"
          placeholder="Cliente"
          value={venta.cliente}
          onChange={(e) =>
            setVenta({ ...venta, cliente: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Producto"
          value={venta.producto}
          onChange={(e) =>
            setVenta({ ...venta, producto: e.target.value })
          }
        />

        <input
          type="number"
          placeholder="Cantidad"
          value={venta.cantidad}
          onChange={(e) =>
            setVenta({ ...venta, cantidad: Number(e.target.value) })
          }
        />

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default VentasNuevo;
