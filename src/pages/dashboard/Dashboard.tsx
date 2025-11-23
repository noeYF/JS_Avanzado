import { useEffect, useState } from "react";
import type  { Producto, Cliente, Usuario, Venta } from "../../models/types";

function Dashboard() {
  const [totalProductos, setTotalProductos] = useState<number>(0);
  const [totalClientes, setTotalClientes] = useState<number>(0);
  const [totalUsuarios, setTotalUsuarios] = useState<number>(0);
  const [totalVentas, setTotalVentas] = useState<number>(0);

  useEffect(() => {
    fetch("http://localhost:3001/productos")
      .then(res => res.json())
      .then((data: Producto[]) => setTotalProductos(data.length));

    fetch("http://localhost:3001/clientes")
      .then(res => res.json())
      .then((data: Cliente[]) => setTotalClientes(data.length));

    fetch("http://localhost:3001/usuarios")
      .then(res => res.json())
      .then((data: Usuario[]) => setTotalUsuarios(data.length));

    fetch("http://localhost:3001/ventas")
      .then(res => res.json())
      .then((data: Venta[]) => setTotalVentas(data.length));
  }, []);

  return (
    <div className="dashboard">
      <h2>Panel Principal</h2>

      <div className="cards">
        <div className="card">Productos: {totalProductos}</div>
        <div className="card">Clientes: {totalClientes}</div>
        <div className="card">Usuarios: {totalUsuarios}</div>
        <div className="card">Ventas: {totalVentas}</div>
      </div>
    </div>
  );
}

export default Dashboard;
