import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Cliente {
  id: number;
  nombre: string;
  dni: string;
}

function ClientesListado() {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const navigate = useNavigate();

  const cargar = () => {
    fetch("http://localhost:3001/clientes")
      .then(res => res.json())
      .then(data => setClientes(data));
  };

  useEffect(() => {
    cargar();
  }, []);

  const eliminar = (id: number) => {
    fetch(`http://localhost:3001/clientes/${id}`, {
      method: "DELETE"
    }).then(() => cargar());
  };

  const editar = (id: number) => {
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
                <button onClick={() => editar(c.id)}>Editar</button>{" "}
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
