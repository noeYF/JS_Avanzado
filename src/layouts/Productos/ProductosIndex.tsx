import { NavLink, Outlet } from "react-router-dom";
import "../../styles/layoutStyle/LayouProducto.scss";

function ProductosIndex() {
  return (
    <div className="layout-producto">
      <aside className="sidebar">
        <h2>Módulo Productos</h2>
        <nav className="menu">
          <NavLink
            to="lista"
            className={({ isActive }) => (isActive ? "activo" : "")}
          >
            Listar
          </NavLink>

          <NavLink
            to="nuevo"
            className={({ isActive }) => (isActive ? "activo" : "")}
          >
            Nuevo
          </NavLink>

          <NavLink
            to="buscar"
            className={({ isActive }) => (isActive ? "activo" : "")}
          >
            Buscar
          </NavLink>
        </nav>
      </aside>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default ProductosIndex;
