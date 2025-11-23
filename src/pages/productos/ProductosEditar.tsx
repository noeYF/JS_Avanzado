import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { Producto } from "../../models/types";

function ProductosEditar() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [producto, setProducto] = useState<Producto>({
    id: "",
    nombre: "",
    precio: 0
  });

  useEffect(() => {
    fetch(`http://localhost:3001/productos/${String(id)}`)
      .then(res => res.json())
      .then((data: Producto) => setProducto(data));
  }, [id]);

  const actualizar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch(`http://localhost:3001/productos/${String(id)}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(producto)
    }).then(() => {
      alert("Producto actualizado");
      navigate("/productos/lista");
    });
  };

  return (
    <div className="form-box">
      <h2>Editar Producto</h2>

      <form onSubmit={actualizar}>
        <input
          type="text"
          value={producto.nombre}
          onChange={(e) =>
            setProducto({ ...producto, nombre: e.target.value })
          }
        />

        <input
          type="number"
          value={producto.precio}
          onChange={(e) =>
            setProducto({ ...producto, precio: Number(e.target.value) })
          }
        />

        <button type="submit">Actualizar</button>
      </form>
    </div>
  );
}

export default ProductosEditar;
