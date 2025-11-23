import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Cliente } from "../../models/types";

function ClientesListado() {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const navigate = useNavigate();

  const cargar = async () => {
    const res = await fetch("http://localhost:3001/clientes");
    const data: Cliente[] = await res.json();
    setClientes(data);
  };

  useEffect(() => {
    cargar();
  }, []);

  const eliminar = async (id: number | string) => {
    try {
      const res = await fetch(
        `http://localhost:3001/clientes/${String(id)}`,
        { method: "DELETE" }
      );

      if (!res.ok) {
        throw new Error(`Status: ${res.status}`);
      }

      alert("Cliente eliminado correctamente");
      cargar();
    } catch (error) {
      alert("Error al eliminar");
      console.error(error);
    }
  };

  const editar = (id: number | string) => {
    navigate(`/clientes/editar/${id}`);
  };

  return (
    <div className="table-box">
      <h2>Lista de Clientes</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>DNI</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.nombre}</td>
              <td>{c.dni}</td>
              <td>
                <button onClick={() => editar(c.id)}>Editar</button>
                <button onClick={() => eliminar(c.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClientesListado;
