import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { Cliente } from "../../models/types";

function ClientesEditar() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [cliente, setCliente] = useState<Cliente>({
    id: "",
    nombre: "",
    dni: ""
  });

  useEffect(() => {
    fetch(`http://localhost:3001/clientes/${String(id)}`)
      .then(res => res.json())
      .then((data: Cliente) => setCliente(data));
  }, [id]);

  const actualizar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch(`http://localhost:3001/clientes/${String(id)}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cliente)
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
          value={cliente.nombre}
          onChange={(e) =>
            setCliente({ ...cliente, nombre: e.target.value })
          }
        />

        <input
          type="text"
          value={cliente.dni}
          onChange={(e) =>
            setCliente({ ...cliente, dni: e.target.value })
          }
        />

        <button type="submit">Actualizar</button>
      </form>
    </div>
  );
}

export default ClientesEditar;
