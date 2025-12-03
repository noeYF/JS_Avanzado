import { Link } from "react-router-dom";
import "../styles/Nav.scss";

//img logo
import logoIMG from "../assets/Nav/logo-removebg-preview.png";

export const NavBar = () => {
  return (
    <nav className="Nav">
      <div className="Contenedor">
        <ul className="Rutas">
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
      </div>

      <div className="logo">
        {/* Logo */}
        <Link to="">
          <img src={logoIMG} alt="" className="imgLogo" />
        </Link>
      </div>
      <div>
        <div className="inicioSecion">
          <Link to="/login">
            <button className="boton" type="button">
              Iniciar sesión
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
