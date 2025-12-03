import { Link, Outlet } from "react-router-dom";
import "../../styles/layoutStyle/LayouProducto.scss";

function ProductosIndex() {
  return (
    <div className="layout-producto">
      <aside className="sidebar">
        <h2>Módulo Clientes</h2>
        <nav className="menu">
          <Link to="lista">Listar</Link>
          <Link to="nuevo">Nuevo</Link>
          <Link to="buscar">Buscar</Link>
        </nav>
      </aside>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default ProductosIndex;
