import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useClientes } from "../../../hook/DatosClientes";
import "../../../styles/generarNuevos/DNI.scss"

const LoginDNI = () => {
  const { Clientes, loading } = useClientes();
  const [dni, setDni] = useState("");
  const [mostrarModal, setMostrarModal] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    const cliente = Clientes.find(
      (c) => c.datosClientes.DNI.toString().trim() === dni.trim()
    );

    if (cliente) {
      navigate("/ventas/generarVenta", { state: { cliente } });
    } else {
      setMostrarModal(true);
    }
  };

  if (loading) return <p>Cargando clientes...</p>;

  return (
    <div className="login-dni-container">
      <h2>Ingreso por DNI</h2>
      <div className="input-group">
        <label htmlFor="dni">Ingrese el DNI de la persona</label>
        <input
          id="dni"
          type="text"
          value={dni}
          onChange={(e) => setDni(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Ingresar</button>

      {mostrarModal && (
        <div className="modal-backdrop">
          <div className="modal-content">
            <p>No hay un cliente con ese DNI.</p>
            <button onClick={() => setMostrarModal(false)}>
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
