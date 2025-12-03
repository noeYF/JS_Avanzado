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
    a.nombre.localeCompare(b.nombre)
  );

  return (
    <div>
      <h2>Clientes Ordenados Alfabéticamente</h2>
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
          {clientesOrdenados.map((c) => (
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
    </div>
  );
};

export default BuscarClientesAlfabetico;
