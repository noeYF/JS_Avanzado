import { useState } from "react";

export type Rol = "VENDEDOR" | "ALMACENERO" | "SUPERVISOR";

export interface Usuario {
  id: string;
  user: string;
  pass: string;
  rol: Rol;
}

export const CrearUsuario = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [rol, setRol] = useState<Rol>("VENDEDOR");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nuevoUsuario: Usuario = {
      id: Date.now().toString(), // genera un id simple
      user,
      pass,
      rol,
    };
    console.log("Usuario creado:", nuevoUsuario);
    alert(`Usuario ${user} con rol ${rol} creado`);
    // Aquí podrías enviar a un backend o guardar en localStorage
    setUser("");
    setPass("");
    setRol("VENDEDOR");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>Crear Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            placeholder="Nombre de usuario"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <input
            type="password"
            placeholder="Contraseña"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <select
            value={rol}
            onChange={(e) => setRol(e.target.value as Rol)}
            style={{ width: "100%", padding: "8px" }}
          >
            <option value="VENDEDOR">Vendedor</option>
            <option value="ALMACENERO">Almacenero</option>
            <option value="SUPERVISOR">Supervisor</option>
          </select>
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#1976d2",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Crear Usuario
        </button>
      </form>
    </div>
  );
};

export default CrearUsuario;
