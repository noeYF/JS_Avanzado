import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Producto {
  id: number;
  nombre: string;
  precio: string;
}

function ProductosListado() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const navigate = useNavigate();

  const cargar = () => {
    fetch("http://localhost:3001/productos")
      .then(res => res.json())
      .then(data => setProductos(data));
  };

  useEffect(() => {
    cargar();
  }, []);

  const eliminar = (id: number) => {
    fetch(`http://localhost:3001/productos/${id}`, {
      method: "DELETE"
    }).then(() => cargar());
  };

  const editar = (id: number) => {
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
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.nombre}</td>
              <td>S/ {p.precio}</td>
              <td>
                <button onClick={() => editar(p.id)}>Editar</button>{" "}
                <button onClick={() => eliminar(p.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductosListado;
