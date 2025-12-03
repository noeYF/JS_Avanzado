import { Link, Outlet } from "react-router-dom";
import "../../styles/layoutStyle/LayouVentas.scss";

function VentasIndex() {
  return (
    <div className="layout-venta">
      <aside className="sidebar">
        <h2>Módulo Ventas</h2>
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

export default VentasIndex;
