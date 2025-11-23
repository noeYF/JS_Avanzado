import { useState } from "react";
import type { ProductoCreate } from "../../models/types";

function ProductosNuevo() {
  const [producto, setProducto] = useState<ProductoCreate>({
    nombre: "",
    precio: 0
  });

  const guardar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch("http://localhost:3001/productos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(producto)
    });

    setProducto({
      nombre: "",
      precio: 0
    });

    alert("Producto guardado");
  };

  return (
    <div className="form-box">
      <h2>Nuevo Producto</h2>

      <form onSubmit={guardar}>
        <input
          type="text"
          placeholder="Nombre del producto"
          value={producto.nombre}
          onChange={(e) =>
            setProducto({ ...producto, nombre: e.target.value })
          }
        />

        <input
          type="number"
          placeholder="Precio"
          value={producto.precio}
          onChange={(e) =>
            setProducto({ ...producto, precio: Number(e.target.value) })
          }
        />

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default ProductosNuevo;
