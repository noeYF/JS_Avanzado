import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Usuario } from "../../models/types";

function LoginPage() {
  const navigate = useNavigate();

  const [user, setUser] = useState<string>("");
  const [pass, setPass] = useState<string>("");

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch(
      `http://localhost:3001/usuarios?user=${user}&pass=${pass}`
    );

    const data: Usuario[] = await response.json();

    if (data.length > 0) {
      localStorage.setItem("usuario", JSON.stringify(data[0]));
      navigate("/dashboard");
    } else {
      alert("Datos incorrectos");
    }
  };

  return (
    <div className="login-box">
      <h2>Iniciar Sesión</h2>

      <form onSubmit={login}>
        <input
          type="text"
          placeholder="Usuario"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default LoginPage;
