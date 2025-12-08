import React from "react";
import { useProductos } from "../../../hook/DatosProductos";
import { useNavigate } from "react-router-dom";
import "../../../styles/tablasGeneral/tablas.scss";

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
    <div className="table-box">
      <h2>Lista de Productos</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Proveedor</th>
            <th>Teléfono</th>
            <th>Dirección</th>
            <th>Cantidad</th>
            <th>Cantidad mínima</th>
            <th>Fecha creación</th>
            <th>Fecha vencimiento</th>
            <th>Estado</th> {/* NUEVO */}
            <th>Categoría</th> {/* NUEVO */}
            <th>Marca</th> {/* NUEVO */}
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productosOrdenados.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.nombre}</td>
              <td>$/{p.precio.toFixed(2)}</td>
              <td>{p.proveedor.nombre}</td>
              <td>{p.proveedor.telefono}</td>
              <td>{p.proveedor.direccion}</td>
              <td>{p.catidades.catidad}</td>
              <td>{p.catidades.cantidadMinima}</td>
              <td>{p.datosProductos.fechaCreacion}</td>
              <td>{p.datosProductos.fechaVencimiento}</td>
              <td>{p.estado.estado}</td> {/* NUEVO */}
              <td>{p.categoria.categoria}</td> {/* NUEVO */}
              <td>{p.marca.nombre}</td> {/* NUEVO */}
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
