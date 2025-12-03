import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useClientes } from "../../../hook/DatosClientes";

const LoginDNI = () => {
  const { Clientes, loading } = useClientes();
  const [dni, setDni] = useState("");
  const [mostrarModal, setMostrarModal] = useState(false); // para el modal
  const navigate = useNavigate();

  const handleLogin = () => {
    const cliente = Clientes.find((c) => c.dni.trim() === dni.trim());

    if (cliente) {
      navigate("/ventas/generarVenta", { state: { cliente } });
    } else {
      setMostrarModal(true);
    }
  };

  if (loading) return <p>Cargando clientes...</p>;

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h2>Ingreso por DNI</h2>
      <input
        type="text"
        placeholder="Ingrese DNI"
        value={dni}
        onChange={(e) => setDni(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />
      <button onClick={handleLogin} style={{ width: "100%", padding: "8px" }}>
        Ingresar
      </button>

      {mostrarModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "black",
              padding: "20px",
              borderRadius: "5px",
              textAlign: "center",
              width: "300px",
            }}
          >
            <p>No hay un cliente con ese DNI.</p>
            <button
              onClick={() => setMostrarModal(false)}
              style={{ marginRight: "10px" }}
            >
              Mantener en la página
            </button>
            <button onClick={() => navigate("/clientes/nuevo")}>
              Crear cliente
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginDNI;
