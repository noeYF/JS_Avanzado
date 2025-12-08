import React from "react";
import { useClientes } from "../../../hook/DatosClientes";
import { useNavigate } from "react-router-dom";

const BuscarClientesAlfabetico = () => {
  const { eliminarCliente, Clientes } = useClientes();
  const navigate = useNavigate();

  const editar = (id: string) => {
    navigate(`/clientes/editar/${id}`);
  };

  // Orden alfabético A → Z por nombre
  const clientesOrdenados = [...Clientes].sort((a, b) =>
    a.datosClientes.nombre.localeCompare(b.datosClientes.nombre)
  );

  return (
    <div className="table-box ">
      <h2>Clientes Ordenados Alfabéticamente</h2>
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
          {clientesOrdenados.map((c) => (
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
};

export default BuscarClientesAlfabetico;
