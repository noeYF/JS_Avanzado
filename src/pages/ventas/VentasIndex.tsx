import { Link, Outlet } from "react-router-dom";

function VentasIndex() {
  return (
    <div className="container">
      <h1>Módulo Ventas</h1>

      <div className="menu-tabs">
        <Link to="lista">Listar</Link>
        <Link to="nuevo">Nuevo</Link>
        <Link to="buscar">Buscar</Link>
      </div>

      <Outlet />
    </div>
  );
}

export default VentasIndex;
