import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ClientesEditar() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [dni, setDni] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3001/clientes/${id}`)
      .then(res => res.json())
      .then(data => {
        setNombre(data.nombre);
        setDni(data.dni);
      });
  }, [id]);

  const actualizar = (e: React.FormEvent) => {
    e.preventDefault();

    fetch(`http://localhost:3001/clientes/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, dni })
    }).then(() => {
      alert("Cliente actualizado");
      navigate("/clientes/lista");
    });
  };

  return (
    <div className="form-box">
      <h2>Editar Cliente</h2>

      <form onSubmit={actualizar}>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <input
          type="text"
          value={dni}
          onChange={(e) => setDni(e.target.value)}
        />

        <button type="submit">Actualizar</button>
      </form>
    </div>
  );
}

export default ClientesEditar;
