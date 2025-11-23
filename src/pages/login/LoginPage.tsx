import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function LoginPage() {
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");
  const navigate = useNavigate();


 const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();

  const res = await fetch(
    `http://localhost:3001/usuarios?user=${usuario}&pass=${clave}`
  );

  const data = await res.json();

  if (data.length > 0) {
    localStorage.setItem("usuario", JSON.stringify(data[0]));
    navigate("/dashboard");
  } else {
    alert("Datos incorrectos");
  }
}; 

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Botica Estrella</h2>

        <input
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={clave}
          onChange={(e) => setClave(e.target.value)}
        />

        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default LoginPage;
