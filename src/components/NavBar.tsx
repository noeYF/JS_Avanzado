import { Link, useNavigate } from "react-router-dom";
import type { Usuario } from "../models/types";

function NavBar() {
  const navigate = useNavigate();

  const user: Usuario = JSON.parse(
    localStorage.getItem("usuario") || "{}"
  );

  const cerrarSesion = (): void => {
    localStorage.removeItem("usuario");
    navigate("/");
  };

  return (
    <nav className="navbar">
      <Link to="/dashboard">Dashboard</Link>

      {(user.rol === "ADMIN" || user.rol === "ALMACENERO") && (
        <Link to="/productos">Productos</Link>
      )}

      {(user.rol === "ADMIN" || user.rol === "VENDEDOR") && (
        <Link to="/ventas">Ventas</Link>
      )}

      {(user.rol === "ADMIN" || user.rol === "SUPERVISOR") && (
        <Link to="/clientes">Clientes</Link>
      )}

      <button onClick={cerrarSesion}>Salir</button>
    </nav>
  );
}

export default NavBar;
