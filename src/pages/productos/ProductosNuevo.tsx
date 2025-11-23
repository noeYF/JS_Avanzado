import { useState } from "react";

function ProductosNuevo() {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");

  const guardar = (e: React.FormEvent) => {
    e.preventDefault();

    const producto = { nombre, precio };

    fetch("http://localhost:3001/productos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(producto)
    });

    setNombre("");
    setPrecio("");
    alert("Producto guardado");
  };

  return (
    <div className="form-box">
      <h2>Nuevo Producto</h2>

      <form onSubmit={guardar}>
        <input
          type="text"
          placeholder="Nombre del producto"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <input
          type="number"
          placeholder="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default ProductosNuevo;
