import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Nav.scss";

//img logo
import logoIMG from "../assets/Nav/logo-removebg-preview.png";
import { useEffect, useState } from "react";

export const NavBar = () => {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState(() => {
    const data = localStorage.getItem("usuario");
    return data ? JSON.parse(data) : null;
  });

  // 🔥 Este efecto escucha cambios en localStorage
  useEffect(() => {
    const actualizarUsuario = () => {
      const data = localStorage.getItem("usuario");
      setUsuario(data ? JSON.parse(data) : null);
    };

    // Escuchar evento personalizado de login
    window.addEventListener("login", actualizarUsuario);

    // También mantener el listener para storage (otras pestañas)
    window.addEventListener("storage", actualizarUsuario);

    return () => {
      window.removeEventListener("login", actualizarUsuario);
      window.removeEventListener("storage", actualizarUsuario);
    };
  }, []);
  const cerrarSesion = () => {
    localStorage.removeItem("usuario");
    setUsuario(null);
    navigate("/login");
  };
  const esRol = (...rolesPermitidos: string[]) => {
    if (!usuario) {
      return false;
    } // 🚨 Si no hay usuario, no hace nada

    return usuario && rolesPermitidos.includes(usuario.rol.rol);
  };

  return (
    <nav className="Nav">
      <div className="Contenedor">
        <ul className="Rutas">
          {esRol("ADMIN", "ALMACENERO") && (
            <li>
              <NavLink
                to="/productos"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Productos
              </NavLink>
            </li>
          )}

          {esRol("ADMIN", "SUPERVISOR","VENDEDOR") && (
            <li>
              <NavLink
                to="/clientes"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Clientes
              </NavLink>
            </li>
          )}

          {esRol("ADMIN", "VENDEDOR") && (
            <li>
              <NavLink
                to="/ventas"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Ventas
              </NavLink>
            </li>
          )}
        </ul>
      </div>

      <div className="logo">
        <NavLink to="">
          <img src={logoIMG} alt="" className="imgLogo" />
        </NavLink>
      </div>

      <div>
        <div className="inicioSecion">
          {usuario ? (
            // Si está logueado → botón de cerrar sesión
            <button className="boton" type="button" onClick={cerrarSesion}>
              Cerrar sesión
            </button>
          ) : (
            // Si NO está logueado → botón de iniciar sesión
            <NavLink to="/login">
              <button className="boton" type="button">
                Iniciar sesión
              </button>
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
