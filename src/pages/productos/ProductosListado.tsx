import { useNavigate } from "react-router-dom";
import { useProductos } from "../../hook/DatosProductos";
import "../../styles/tablasGeneral/tablas.scss";

function ProductosListado() {
  const { eliminarProducto, productos } = useProductos();
  const navigate = useNavigate();

  const editar = (id: string) => {
    navigate(`/productos/editar/${id}`);
  };

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
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((p) => (
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
}

export default ProductosListado;
