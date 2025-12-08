import { NavLink, Outlet } from "react-router-dom";
import "../../../styles/tablasGeneral/buscadorCliente.scss";

function buscadorIndex() {

  
  return (
    <div className="contener">
      <div className="menub-clientes">
        <h1>Módulo Clientes</h1>

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
        </div>
      </div>

      <Outlet />
    </div>
  );
}

export default buscadorIndex;
