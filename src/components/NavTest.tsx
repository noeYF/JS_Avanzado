import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        {/* Logo */}
        <Link to="" className="brand-logo center">
          Logo
        </Link>

        {/* Links */}
        <ul className="left hide-on-med-and-down">
          <li>
            <Link to="/productos">Productos</Link>
          </li>
          <li>
            <Link to="/clientes">Clientes</Link>
          </li>
          <li>
            <Link to="/ventas">Ventas</Link>
          </li>
        </ul>

        {/* Botón */}
        <div>
          <Link to="/login">
            {" "}
            <button className="btn waves-effect right" type="button">
              Iniciar sesión
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
