import React from "react";
import { useProductos } from "../../../hook/DatosProductos";
import { useNavigate } from "react-router-dom";

const BuscarAlfabetico = () => {
  const { eliminarProducto, productos } = useProductos();
  const navigate = useNavigate();

  const editar = (id: string) => {
    navigate(`/productos/editar/${id}`);
  };

  // Orden alfabético A → Z
  const productosOrdenados = [...productos].sort((a, b) =>
    a.nombre.localeCompare(b.nombre)
  );

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productosOrdenados.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.nombre}</td>
              <td>{p.precio}</td>
              <td>
                <button onClick={() => editar(p.id)}>Editar</button>
                <button
                  onClick={() => {
                    if (
                      window.confirm(
                        `¿Estás seguro de eliminar el producto ${p.nombre}?`
                      )
                    ) {
                      eliminarProducto(p.id);
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

export default BuscarAlfabetico;
