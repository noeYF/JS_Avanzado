import { useState } from "react";

function ClientesBuscar() {
  const [dni, setDni] = useState("");
  const [resultado, setResultado] = useState<any[]>([]);

  const buscar = () => {
    fetch(`http://localhost:3001/clientes?dni_like=${dni}`)
      .then(res => res.json())
      .then(data => setResultado(data));
  };

  return (
    <div className="form-box">
      <h2>Buscar Cliente</h2>

      <input
        type="text"
        placeholder="DNI"
        value={dni}
        onChange={(e) => setDni(e.target.value)}
      />

      <button onClick={buscar}>Buscar</button>

      {resultado.length > 0 && (
        <div className="table-box">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>DNI</th>
              </tr>
            </thead>
            <tbody>
              {resultado.map((c) => (
                <tr key={c.id}>
                  <td>{c.id}</td>
                  <td>{c.nombre}</td>
                  <td>{c.dni}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ClientesBuscar;
