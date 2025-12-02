import { Link, Outlet } from "react-router-dom";

function ProductosIndex() {
  return (
    <div className="container">
      <h1>Módulo Productos</h1>

      <div className="menu-tabs">
        <Link to="buscarEspecificamente">Buscar Específico</Link>
        <Link to="buscarAlfaveticamente">Orden Alfabético</Link>
        <Link to="buscarPrecio">Orden por Precio</Link>
      </div>

      <Outlet />
    </div>
  );
}

export default ProductosIndex;
