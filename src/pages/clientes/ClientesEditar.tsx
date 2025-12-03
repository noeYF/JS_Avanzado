import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { Cliente } from "../../models/types";
import { useClientes } from "../../hook/DatosClientes";

function ClientesEditar() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { traerCliente, modificarCliente } = useClientes();

  const [cliente, setCliente] = useState<Cliente>({
    id: "",
    nombre: "",
    dni: "",
  });

  useEffect(() => {
    const cargarCliente = async () => {
      if (!id) return;

      const data = await traerCliente(id);
      if (data) setCliente(data);
    };

    cargarCliente();
  }, [id, traerCliente]);

  const actualizar = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!id) return;

    try {
      await modificarCliente(id, cliente);
      alert("Cliente actualizado");
      navigate("/clientes/lista");
    } catch (err) {
      console.log("Error al actualizar el cliente:", err);
    }
  };

  return (
    <div className="form-box">
      <h2>Editar Cliente</h2>

      <form onSubmit={actualizar}>
        <input
          type="text"
          value={cliente.nombre}
          onChange={(e) => setCliente({ ...cliente, nombre: e.target.value })}
          required
        />

        <input
          type="text"
          value={cliente.dni}
          onChange={(e) => setCliente({ ...cliente, dni: e.target.value })}
          required
        />

        <button type="submit">Actualizar</button>
      </form>
    </div>
  );
}

export default ClientesEditar;
