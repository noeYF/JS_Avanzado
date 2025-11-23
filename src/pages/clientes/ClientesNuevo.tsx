import { useState } from "react";

function ClientesNuevo() {
  const [nombre, setNombre] = useState("");
  const [dni, setDni] = useState("");

  const guardar = (e: React.FormEvent) => {
    e.preventDefault();

    const cliente = { nombre, dni };

    fetch("http://localhost:3001/clientes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cliente)
    });

    setNombre("");
    setDni("");
    alert("Cliente guardado");
  };

  return (
    <div className="form-box">
      <h2>Nuevo Cliente</h2>

      <form onSubmit={guardar}>
        <input
          type="text"
          placeholder="Nombre del cliente"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <input
          type="text"
          placeholder="DNI"
          value={dni}
          onChange={(e) => setDni(e.target.value)}
        />

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default ClientesNuevo;
