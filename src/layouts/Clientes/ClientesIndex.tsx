import { NavLink, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import "../../styles/layoutStyle/LayouCliente.scss";

function ClientesIndex() {
  const [usuario, setUsuario] = useState(() => {
    const data = localStorage.getItem("usuario");
    return data ? JSON.parse(data) : null;
  });

  // Escuchar cambios en localStorage
  useEffect(() => {
    const actualizarUsuario = () => {
      const data = localStorage.getItem("usuario");
      setUsuario(data ? JSON.parse(data) : null);
    };

    window.addEventListener("storage", actualizarUsuario);
    return () => window.removeEventListener("storage", actualizarUsuario);
  }, []);

  // Función para verificar rol
  const esRol = (...rolesPermitidos: string[]) => {
    if (!usuario) return false;
    return rolesPermitidos.includes(usuario.rol.rol);
  };

  return (
    <div className="layout-cliente">
      {/* Barra lateral */}
      <aside className="sidebar">
        <h2>Módulo Clientes</h2>
        <nav className="menu">
          {/* Listar → ADMIN o SUPERVISOR */}
          {esRol("ADMIN", "SUPERVISOR") && (
            <NavLink
              to="lista"
              className={({ isActive }) => (isActive ? "activo" : "")}
            >
              Listar
            </NavLink>
          )}

          {/* Nuevo → solo VENDEDOR */}
          {esRol("VENDEDOR", "ADMIN", "SUPERVISOR") && (
            <NavLink
              to="nuevo"
              className={({ isActive }) => (isActive ? "activo" : "")}
            >
              Nuevo
            </NavLink>
          )}

          {/* Buscar → ADMIN o SUPERVISOR */}
          {esRol("ADMIN", "SUPERVISOR") && (
            <NavLink
              to="buscar"
              className={({ isActive }) => (isActive ? "activo" : "")}
            >
              Buscar
            </NavLink>
          )}
        </nav>
      </aside>

      {/* Contenido principal */}
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default ClientesIndex;
