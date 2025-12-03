import React, { useState } from "react";
import { useClientes } from "../../hook/DatosClientes";
import { useVentas } from "../../hook/DatosVentas";
import { useProductos } from "../../hook/DatosProductos";

const VentasBuscar = () => {
  const { Clientes } = useClientes();
  const { ventas } = useVentas();
  const { productos } = useProductos();

  const [DNI, setDNI] = useState("");

  // Buscar cliente por DNI
  const clienteEncontrado = Clientes.find((c) => c.dni === DNI);

  // Filtrar ventas del cliente encontrado
  const ventasEncontradas = clienteEncontrado
    ? ventas.filter((v) => v.cliente === clienteEncontrado.id)
    : [];

  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
      <h1>Buscar Ventas por DNI</h1>

      <input
        type="text"
        placeholder="Ingrese DNI del cliente"
        value={DNI}
        onChange={(e) => setDNI(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          margin: "10px 0 20px 0",
          fontSize: "16px",
        }}
      />

      {!clienteEncontrado && DNI && (
        <p style={{ color: "red" }}>
          No se encontró ningún cliente con este DNI
        </p>
      )}

      {ventasEncontradas.map((venta) => {
        const totalVenta = venta.productos.reduce((acc, item) => {
          const prod = productos.find((p) => p.id === item.productoId);
          return acc + (prod ? prod.precio * item.cantidad : 0);
        }, 0);

        return (
          <div
            key={venta.id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              marginBottom: "20px",
              borderRadius: "8px",
              backgroundColor: "red",
            }}
          >
            <h2 style={{ margin: "0 0 10px 0" }}>Venta ID: {venta.id}</h2>
            <p style={{ margin: "0 0 5px 0" }}>
              Cliente: {clienteEncontrado?.nombre}
              <br />
              DNI: {clienteEncontrado?.dni}
            </p>
            <p style={{ margin: "0 0 10px 0" }}>
              Fecha: {new Date(venta.fecha).toLocaleString()}
            </p>

            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  {[
                    "ID Producto",
                    "Nombre",
                    "Cantidad",
                    "Precio Unitario",
                    "Subtotal",
                  ].map((header) => (
                    <th
                      key={header}
                      style={{
                        border: "1px solid #ccc",
                        padding: "8px",
                        backgroundColor: "#362abbff",
                      }}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {venta.productos.map((item) => {
                  const prod = productos.find((p) => p.id === item.productoId);
                  const subtotal = prod ? prod.precio * item.cantidad : 0;

                  return (
                    <tr key={item.productoId}>
                      <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                        {item.productoId}
                      </td>
                      <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                        {prod ? prod.nombre : "Producto no encontrado"}
                      </td>
                      <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                        {item.cantidad}
                      </td>
                      <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                        {prod ? `S/ ${prod.precio.toFixed(2)}` : "-"}
                      </td>
                      <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                        {`S/ ${subtotal.toFixed(2)}`}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr>
                  <td
                    colSpan={4}
                    style={{
                      border: "1px solid #ccc",
                      padding: "8px",
                      textAlign: "right",
                      fontWeight: "bold",
                      backgroundColor: "#b59898ff",
                    }}
                  >
                    Total Venta:
                  </td>
                  <td
                    style={{
                      border: "1px solid #ffffffff",
                      padding: "8px",
                      fontWeight: "bold",
                      
                    }}
                  >
                    S/ {totalVenta.toFixed(2)}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        );
      })}

      {clienteEncontrado && ventasEncontradas.length === 0 && (
        <p>No se encontraron ventas para este cliente.</p>
      )}
    </div>
  );
};

export default VentasBuscar;
