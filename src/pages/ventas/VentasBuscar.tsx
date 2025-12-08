import React, { useState } from "react";
import { useClientes } from "../../hook/DatosClientes";
import { useVentas } from "../../hook/DatosVentas";
import { useProductos } from "../../hook/DatosProductos";
import type { Cliente } from "../../models/typeClientes";
import type { Producto } from "../../models/typeProducto";
import type { ItemVenta, Venta } from "../../models/typeVentas";
import "../../styles/tablasGeneral/tablasVentasBuscar.scss"

const VentasBuscar = () => {
  const { Clientes } = useClientes();
  const { ventas } = useVentas();
  const { productos } = useProductos();

  const [dni, setDni] = useState("");

  // Buscar cliente por DNI
  const clienteEncontrado: Cliente | undefined = Clientes.find(
    (c) => c.datosClientes.DNI === Number(dni)
  );

  // Filtrar ventas del cliente encontrado
  const ventasEncontradas: Venta[] = clienteEncontrado
    ? ventas.filter((v) => v.cliente === clienteEncontrado.id)
    : [];

  return (
    <div className="ventas-buscar-container">
      <h1>Buscar Ventas por DNI</h1>

      <input
        type="text"
        placeholder="Ingrese DNI del cliente"
        value={dni}
        onChange={(e) => setDni(e.target.value)}
        className="input-dni"
      />

      {!clienteEncontrado && dni && (
        <p className="error-text">No se encontró ningún cliente con este DNI</p>
      )}

      {ventasEncontradas.map((venta) => {
        return (
          <div key={venta.id} className="venta-card">
            <h2>Venta ID: {venta.id}</h2>
            <p>
              <strong>Cliente:</strong>{" "}
              {clienteEncontrado?.datosClientes.nombre}{" "}
              {clienteEncontrado?.datosClientes.apellido} <br />
              <strong>DNI:</strong> {clienteEncontrado?.datosClientes.DNI}
            </p>
            <p>
              <strong>Fecha:</strong> {new Date(venta.fecha).toLocaleString()}
            </p>

            <table className="ventas-table">
              <thead>
                <tr>
                  <th>ID Producto</th>
                  <th>Nombre</th>
                  <th>Cantidad</th>
                  <th>Precio Unitario</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {venta.productos.map((item: ItemVenta) => {
                  const prod: Producto | undefined = productos.find(
                    (p) => p.id === item.productoId
                  );
                  const subtotal = prod ? prod.precio * item.cantidad : 0;

                  return (
                    <tr key={item.productoId}>
                      <td>{item.productoId}</td>
                      <td>{prod?.nombre || "Producto no encontrado"}</td>
                      <td>{item.cantidad}</td>
                      <td>{prod ? `S/ ${prod.precio.toFixed(2)}` : "-"}</td>
                      <td>{`S/ ${subtotal.toFixed(2)}`}</td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={4} className="text-right bold">
                    Costo General:
                  </td>
                  <td className="bold">
                    S/ {venta.cantidadPago.costogeneral.toFixed(2)}
                  </td>
                </tr>
                <tr>
                  <td colSpan={4} className="text-right bold">
                    IGV (18%):
                  </td>
                  <td className="bold">
                    S/ {venta.cantidadPago.costorIGV.toFixed(2)}
                  </td>
                </tr>
                <tr>
                  <td colSpan={4} className="text-right bold">
                    Total:
                  </td>
                  <td className="bold">
                    S/ {venta.cantidadPago.costoTotal.toFixed(2)}
                  </td>
                </tr>
              </tfoot>
            </table>

            <p>
              <strong>Nota:</strong> {venta.comentario.nota}
            </p>
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
