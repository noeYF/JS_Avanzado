import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUsuarios } from "../../hook/DatosUsuarios";

function LoginPage() {
  const navigate = useNavigate();
  const { usuarios } = useUsuarios();

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const usuarioEncontrado = usuarios.find(
      (u) => u.user === user && u.pass === pass
    );

    if (usuarioEncontrado) {
      localStorage.setItem("usuario", JSON.stringify(usuarioEncontrado));
      navigate("/dashboard"); // redirige al dashboard
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Iniciar Sesión</h2>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Usuario"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
          />

          <button type="submit" className="btn-login">
            Ingresar
          </button>

          {error && <p className="error">{error}</p>}

          <p className="crear-cuenta">
            ¿No tienes cuenta? <Link to="/CrearCuenta">Crear Cuenta</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
