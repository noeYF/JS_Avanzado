import { useState } from "react";
import type { Cliente } from "../../models/types";
import { useClientes } from "../../hook/DatosClientes";

function ClienteNuevo() {
  const { crearCliente, Clientes } = useClientes();
  const [cliente, setCliente] = useState<Cliente>({
    id: "",
    nombre: "",
    dni: "",
  });

  const generarID = (): string => {
    if (Clientes.length === 0) return "c1"; // caso cuando no hay Clientes
    const ultimoCliente = Clientes.map((p) => Number(p.id!.slice(1)));
    const max = Math.max(...ultimoCliente);
    return `c${(max + 1).toString().padStart(4, "0")}`;
  };

  const guardar = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nuevoCliente = { ...cliente, id: generarID() };
    await crearCliente(nuevoCliente);
    alert("Cliente guardado");

    setCliente({ id: "", nombre: "", dni: "" });
  };

  return (
    <div className="form-box">
      <h2>Nuevo Cliente</h2>

      <form onSubmit={guardar}>
        <input
          type="text"
          placeholder="Nombre del cliente"
          value={cliente.nombre}
          onChange={(e) => setCliente({ ...cliente, nombre: e.target.value })}
          required
        />

        <input
          type="text"
          placeholder="DNI"
          value={cliente.dni}
          onChange={(e) => setCliente({ ...cliente, dni: e.target.value })}
          required
        />

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default ClienteNuevo;
