import { useNavigate } from "react-router-dom";
import { useClientes } from "../../hook/DatosClientes";
import "../../styles/tablasGeneral/tablas.scss"

function ClientesListado() {
  const { eliminarCliente, Clientes } = useClientes();
  const navigate = useNavigate();

  const editar = (id: string) => {
    navigate(`/clientes/editar/${id}`);
  };

  return (
    <div className="table-box">
      <h2>Lista de Clientes</h2>

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
          {Clientes.map((c) => (
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
    </div>
  );
}

export default ClientesListado;
