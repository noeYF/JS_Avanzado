import { useEffect, useState } from "react";

function Dashboard() {
  const [productos, setProductos] = useState(0);
  const [clientes, setClientes] = useState(0);
  const [usuarios, setUsuarios] = useState(0);
  const [ventas, setVentas] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3001/productos")
      .then(res => res.json())
      .then(data => setProductos(data.length));

    fetch("http://localhost:3001/clientes")
      .then(res => res.json())
      .then(data => setClientes(data.length));

    fetch("http://localhost:3001/usuarios")
      .then(res => res.json())
      .then(data => setUsuarios(data.length));

    fetch("http://localhost:3001/ventas")
      .then(res => res.json())
      .then(data => setVentas(data.length));
  }, []);

  return (
    <div className="container">
      <h1>Dashboard - Botica Estrella</h1>

      <div className="card-grid">
        <div className="card">
          <h3>Productos</h3>
          <p>{productos}</p>
        </div>

        <div className="card">
          <h3>Clientes</h3>
          <p>{clientes}</p>
        </div>

        <div className="card">
          <h3>Usuarios</h3>
          <p>{usuarios}</p>
        </div>

        <div className="card">
          <h3>Ventas</h3>
          <p>{ventas}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
