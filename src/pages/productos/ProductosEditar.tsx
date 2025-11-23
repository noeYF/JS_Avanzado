import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ProductosEditar() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3001/productos/${id}`)
      .then(res => res.json())
      .then(data => {
        setNombre(data.nombre);
        setPrecio(data.precio);
      });
  }, [id]);

  const actualizar = (e: React.FormEvent) => {
    e.preventDefault();

    fetch(`http://localhost:3001/productos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, precio })
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
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <input
          type="number"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />

        <button type="submit">Actualizar</button>
      </form>
    </div>
  );
}

export default ProductosEditar;
