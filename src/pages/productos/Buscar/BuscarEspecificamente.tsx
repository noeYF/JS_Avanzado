import React, { useState } from "react";
import { useProductos } from "../../../hook/DatosProductos";
import { useNavigate } from "react-router-dom";

const BuscarEspecificamente = () => {
  const [busqueda, setBusqueda] = useState("");
  const { productos, eliminarProducto } = useProductos();
  const navigate = useNavigate();

  const editar = (id: string) => {
    navigate(`/productos/editar/${id}`);
  };

  // Filtrar productos según lo escrito
  const productosFiltrados = productos.filter((p) =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <h2>Buscar Producto</h2>

      <input
        type="text"
        placeholder="Buscar por nombre..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={{ marginBottom: "15px", padding: "5px", width: "250px" }}
      />

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
          {productosFiltrados.map((p) => (
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

      {productosFiltrados.length === 0 && (
        <p>No se encontró ningún producto con ese nombre.</p>
      )}
    </div>
  );
};

export default BuscarEspecificamente;
