import  { useState } from "react";
import { useClientes } from "../../../hook/DatosClientes";
import { useNavigate } from "react-router-dom";

const BuscarClientes = () => {
  const [busqueda, setBusqueda] = useState("");
  const { Clientes, eliminarCliente } = useClientes();
  const navigate = useNavigate();

  const editar = (id: string) => {
    navigate(`/clientes/editar/${id}`);
  };

  // Filtrar clientes según lo escrito en nombre o dni
  const clientesFiltrados = Clientes.filter(
    (c) =>
      c.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      c.dni.includes(busqueda)
  );

  return (
    <div>
      <h2>Buscar Cliente</h2>

      <input
        type="text"
        placeholder="Buscar por nombre o DNI..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={{ marginBottom: "15px", padding: "5px", width: "250px" }}
      />

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
          {clientesFiltrados.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.nombre}</td>
              <td>{c.dni}</td>
              <td>
                <button onClick={() => editar(c.id)}>Editar</button>
                <button
                  onClick={() => {
                    if (
                      window.confirm(
                        `¿Estás seguro de eliminar al cliente ${c.nombre}?`
                      )
                    ) {
                      eliminarCliente(c.id);
                    }
                  }}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {clientesFiltrados.length === 0 && (
        <p>No se encontró ningún cliente con ese nombre o DNI.</p>
      )}
    </div>
  );
};

export default BuscarClientes;
