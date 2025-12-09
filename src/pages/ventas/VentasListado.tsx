import { useVentas } from "../../hook/DatosVentas";
import { useProductos } from "../../hook/DatosProductos";
import { useClientes } from "../../hook/DatosClientes";
import type { Venta, ItemVenta } from "../../models/typeVentas";
import type { Cliente } from "../../models/typeClientes";
import type { Producto } from "../../models/typeProducto";
import "../../styles/tablasGeneral/tablasVentas.scss"

const TestVentasTabla = () => {
  const { ventas } = useVentas();
  const { productos } = useProductos();
  const { Clientes } = useClientes();

  return (
    <div className="ventas-contenedor">
      <h1 className="ventas-titulo">Ventas Registradas</h1>

      {ventas.map((venta: Venta) => {
        const cliente: Cliente | undefined = Clientes.find(
          (c) => c.id === venta.cliente
        );

        return (
          <div key={venta.id} className="venta-card">
            <h2 className="venta-id">Venta ID: {venta.id}</h2>

            <div className="venta-cliente-info">
              <p>
                <strong>Cliente:</strong> {cliente?.datosClientes.nombre}{" "}
                {cliente?.datosClientes.apellido}
              </p>
              <p>
                <strong>DNI:</strong> {cliente?.datosClientes.DNI}
              </p>
            </div>

            <div className="venta-tabla-contenedor">
              <table className="venta-tabla">
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
                        <td>{prod ? prod.precio.toFixed(2) : "-"}</td>
                        <td>{subtotal.toFixed(2)}</td>
                      </tr>
                    );
                  })}
                </tbody>

                <tfoot>
                  <tr>
                    <td colSpan={4} className="td-right">
                      Costo General:
                    </td>
                    <td>{venta.cantidadPago.costogeneral.toFixed(2)}</td>
                  </tr>

                  <tr>
                    <td colSpan={4} className="td-right">
                      IGV (18%):
                    </td>
                    <td>{venta.cantidadPago.costorIGV.toFixed(2)}</td>
                  </tr>

                  <tr>
                    <td colSpan={4} className="td-right">
                      Total:
                    </td>
                    <td>{venta.cantidadPago.costoTotal.toFixed(2)}</td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div className="venta-nota">
              <p>
                <strong>Nota:</strong> {venta.comentario.nota}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TestVentasTabla;
