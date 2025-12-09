import { useState } from "react";
import { useClientes } from "../../../hook/DatosClientes";
import { useNavigate } from "react-router-dom";

const BuscarClientes = () => {
  const [busqueda, setBusqueda] = useState("");
  const { Clientes, eliminarCliente } = useClientes();
  const navigate = useNavigate();

  const editar = (id: string) => {
    navigate(`/clientes/editar/${id}`);
  };

  // Filtrar clientes según lo escrito en nombre, apellido o DNI
  const clientesFiltrados = Clientes.filter((c) => {
    const nombre = c.datosClientes.nombre.toLowerCase();
    const apellido = c.datosClientes.apellido.toLowerCase();
    const dni = c.datosClientes.DNI.toString();
    const term = busqueda.toLowerCase();

    return (
      nombre.includes(term) || apellido.includes(term) || dni.includes(term)
    );
  });

  return (
    <div className="table-box ">
      <h2>Buscar Cliente</h2>

      <input
        type="text"
        placeholder="Buscar por nombre, apellido o DNI..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={{ marginBottom: "15px", padding: "5px", width: "250px" }}
      />
 <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre Completo</th>
            <th>DNI</th>
            <th>Dirección</th>
            <th>Referencia</th>
            <th>Teléfono</th>
            <th>Correo</th>

            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {clientesFiltrados.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>
                {c.datosClientes.nombre} {c.datosClientes.apellido}
              </td>
              <td>{c.datosClientes.DNI}</td>
              <td>{c.direccion.direccion}</td>
              <td>{c.direccion.referencia || "—"}</td>
              <td>{c.telefono.numero}</td>
              <td>{c.telefono.correo}</td>

              <td>
                <button onClick={() => editar(c.id)}>Editar</button>

                <button
                  onClick={() => {
                    if (
                      window.confirm(
                        `¿Seguro que deseas eliminar al cliente ${c.datosClientes.nombre}?`
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
        <p>No se encontró ningún cliente con ese nombre, apellido o DNI.</p>
      )}
    </div>
  );
};

export default BuscarClientes;
