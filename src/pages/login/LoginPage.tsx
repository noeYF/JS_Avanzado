import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUsuarios } from "../../hook/DatosUsuarios";
import "../../styles/login/loginStyle.scss";

function LoginPage() {
  const navigate = useNavigate();
  const { usuarios } = useUsuarios();

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const usuarioEncontrado = usuarios.find(
      (u) => u.datosCuenta.user === user && u.datosCuenta.pass === pass
    );

    if (usuarioEncontrado) {
      localStorage.setItem("usuario", JSON.stringify(usuarioEncontrado));
      window.dispatchEvent(new Event("login"));
      navigate("/");
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="login-container">
      <div className="fondo">
        <div className="login-box">
          <h2>Iniciar Sesión</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Usuario</label>
              <input
                type="text"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Contraseña</label>
              <input
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                required
              />
            </div>
            <button type="submit">Ingresar</button>

            {error && <p style={{ color: "red" }}>{error}</p>}
            <p>
              ¿No tienes cuenta? <Link to="/CrearCuenta">Crear Cuenta</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
