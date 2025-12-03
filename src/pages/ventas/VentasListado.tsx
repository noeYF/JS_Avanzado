import { useVentas } from "../../hook/DatosVentas";
import { useProductos } from "../../hook/DatosProductos";
import { useClientes } from "../../hook/DatosClientes";

const TestVentasTabla = () => {
  const { ventas } = useVentas();
  const { productos } = useProductos();
  const { Clientes } = useClientes();


  
  return (
    <div style={{ padding: "20px" }}>
      <h1>Ventas Registradas</h1>

      {ventas.map((venta) => {
        const cliente = Clientes.find((c) => c.id === venta.cliente);

{/*ENTENDER MEJOR ESTO */}
        const totalVenta = venta.productos.reduce((acc, item) => {
          const prod = productos.find((p) => p.id === item.productoId);
          return acc + (prod ? prod.precio * item.cantidad : 0);
        }, 0);

        return (
          <div
            key={venta.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "20px",
              borderRadius: "5px",
            }}
          >
            <h2>Venta ID: {venta.id}</h2>
            <br />
            <p>
              Cliente: {cliente?.nombre}
              <br />
              DNI: {cliente?.dni}
            </p>

            <p>Fecha: {venta.fecha}</p>

            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                marginTop: "10px",
              }}
            >
              <thead>
                <tr>
                  <th style={{ border: "1px solid #ccc", padding: "5px" }}>
                    ID Producto
                  </th>
                  <th style={{ border: "1px solid #ccc", padding: "5px" }}>
                    Nombre
                  </th>
                  <th style={{ border: "1px solid #ccc", padding: "5px" }}>
                    Cantidad
                  </th>
                  <th style={{ border: "1px solid #ccc", padding: "5px" }}>
                    Precio Unitario
                  </th>
                  <th style={{ border: "1px solid #ccc", padding: "5px" }}>
                    Subtotal
                  </th>
                </tr>
              </thead>
              <tbody>
                {venta.productos.map((item) => {
                  const prod = productos.find((p) => p.id === item.productoId);
                  const subtotal = prod ? prod.precio * item.cantidad : 0;
                  return (
                    <tr key={item.productoId}>
                      <td style={{ border: "1px solid #ccc", padding: "5px" }}>
                        {item.productoId}
                      </td>
                      <td style={{ border: "1px solid #ccc", padding: "5px" }}>
                        {prod ? prod.nombre : "Producto no encontrado"}
                      </td>
                      <td style={{ border: "1px solid #ccc", padding: "5px" }}>
                        {item.cantidad}
                      </td>
                      <td style={{ border: "1px solid #ccc", padding: "5px" }}>
                        {prod ? `S/ ${prod.precio.toFixed(2)}` : "-"}
                      </td>
                      <td style={{ border: "1px solid #ccc", padding: "5px" }}>
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
                      padding: "5px",
                      textAlign: "right",
                      fontWeight: "bold",
                    }}
                  >
                    Total Venta:
                  </td>
                  <td style={{ border: "1px solid #ccc", padding: "5px" }}>
                    S/ {totalVenta.toFixed(2)}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default TestVentasTabla;
