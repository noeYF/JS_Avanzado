import { useState } from "react";

function ProductosBuscar() {
  const [nombre, setNombre] = useState("");
  const [resultado, setResultado] = useState<any[]>([]);

  const buscar = () => {
    fetch(`http://localhost:3001/productos?nombre_like=${nombre}`)
      .then(res => res.json())
      .then(data => setResultado(data));
  };

  return (
    <div className="form-box">
      <h2>Buscar Producto</h2>

      <input
        type="text"
        placeholder="Nombre a buscar"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <button onClick={buscar}>Buscar</button>

      {resultado.length > 0 && (
        <div className="table-box">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              {resultado.map((p) => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.nombre}</td>
                  <td>S/ {p.precio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ProductosBuscar;
