import { useState } from "react";

function VentasBuscar() {
  const [cliente, setCliente] = useState("");
  const [resultado, setResultado] = useState<any[]>([]);

  const buscar = () => {
    fetch(`http://localhost:3001/ventas?cliente_like=${cliente}`)
      .then(res => res.json())
      .then(data => setResultado(data));
  };

  return (
    <div className="form-box">
      <h2>Buscar Ventas</h2>

      <input
        type="text"
        placeholder="Nombre del cliente"
        value={cliente}
        onChange={(e) => setCliente(e.target.value)}
      />

      <button onClick={buscar}>Buscar</button>

      {resultado.length > 0 && (
        <div className="table-box">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Cliente</th>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Fecha</th>
              </tr>
            </thead>
            <tbody>
              {resultado.map((v) => (
                <tr key={v.id}>
                  <td>{v.id}</td>
                  <td>{v.cliente}</td>
                  <td>{v.producto}</td>
                  <td>{v.cantidad}</td>
                  <td>{new Date(v.fecha).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default VentasBuscar;
