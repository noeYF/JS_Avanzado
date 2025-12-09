import { NavLink, Outlet } from "react-router-dom";
import "../../styles/layoutStyle/LayouVentas.scss";

function VentasIndex() {
  return (
    <div className="layout-venta">
      {/* Barra lateral */}
      <aside className="sidebar">
        <h2>Módulo Ventas</h2>
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

      {/* Contenido principal */}
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default VentasIndex;
