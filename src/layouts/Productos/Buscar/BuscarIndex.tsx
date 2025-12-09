import { NavLink, Outlet } from "react-router-dom";
import "../../../styles/tablasGeneral/buscadorProductos.scss";

function ProductosIndex() {
  return (
    <div className="contener">
      <div className="menub-productos">
        <h1>Módulo Productos</h1>

        <div className="menu-tabs">
          <div className="link-1">
            <NavLink
              to="buscarEspecificamente"
              className={({ isActive }) => (isActive ? "activo" : "")}
            >
              Buscar Específico
            </NavLink>
          </div>

          <div className="link-2">
            <NavLink
              to="buscarAlfaveticamente"
              className={({ isActive }) => (isActive ? "activo" : "")}
            >
              Orden Alfabético
            </NavLink>
          </div>

          <div className="link-3">
            <NavLink
              to="buscarPrecio"
              className={({ isActive }) => (isActive ? "activo" : "")}
            >
              Orden por Precio
            </NavLink>
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
}

export default ProductosIndex;
