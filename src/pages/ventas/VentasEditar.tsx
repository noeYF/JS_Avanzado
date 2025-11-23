import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { Venta } from "../../models/types";

function VentasEditar() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [venta, setVenta] = useState<Venta>({
    id: "",
    cliente: "",
    producto: "",
    cantidad: 0,
    fecha: ""
  });

  useEffect(() => {
    fetch(`http://localhost:3001/ventas/${id}`)
      .then(res => res.json())
      .then((data: Venta) => setVenta(data));
  }, [id]);

  const actualizar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch(`http://localhost:3001/ventas/${String(id)}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(venta)
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
          value={venta.cliente}
          onChange={(e) =>
            setVenta({ ...venta, cliente: e.target.value })
          }
        />

        <input
          type="text"
          value={venta.producto}
          onChange={(e) =>
            setVenta({ ...venta, producto: e.target.value })
          }
        />

        <input
          type="number"
          value={venta.cantidad}
          onChange={(e) =>
            setVenta({ ...venta, cantidad: Number(e.target.value) })
          }
        />

        <button type="submit">Actualizar</button>
      </form>
    </div>
  );
}

export default VentasEditar;
