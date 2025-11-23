import { useState } from "react";
import type { ClienteCreate } from "../../models/types";

function ClientesNuevo() {
  const [cliente, setCliente] = useState<ClienteCreate>({
    nombre: "",
    dni: ""
  });

  const guardar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch("http://localhost:3001/clientes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cliente)
    });

    setCliente({
      nombre: "",
      dni: ""
    });

    alert("Cliente guardado");
  };

  return (
    <div className="form-box">
      <h2>Nuevo Cliente</h2>

      <form onSubmit={guardar}>
        <input
          type="text"
          placeholder="Nombre del cliente"
          value={cliente.nombre}
          onChange={(e) =>
            setCliente({ ...cliente, nombre: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="DNI"
          value={cliente.dni}
          onChange={(e) =>
            setCliente({ ...cliente, dni: e.target.value })
          }
        />

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default ClientesNuevo;
