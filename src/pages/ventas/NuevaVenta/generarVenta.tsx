import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useProductos } from "../../../hook/DatosProductos";
import { useVentas } from "../../../hook/DatosVentas";
import type { Cliente } from "../../../models/typeClientes";
import type { Producto } from "../../../models/typeProducto";
import type { ItemVenta, Venta } from "../../../models/typeVentas";
import { generarID } from "../../../util/generarID";
import "../../../styles/generarNuevos/nuevoVenta.scss";

interface LocationState {
  cliente: Cliente;
}

interface ProductoConCantidad extends Producto {
  cantidad: number;
}

const GenerarVenta = () => {
  const location = useLocation();
  const { cliente } = location.state as LocationState;
  const { productos } = useProductos();
  const { crearVenta, ventas } = useVentas();

  const [productoId, setProductoId] = useState("");
  const [cantidadProductos, setCantidadProductos] = useState(0);
  const [productosVenta, setProductosVenta] = useState<ProductoConCantidad[]>(
    []
  );
  const [mensaje, setMensaje] = useState("");

  const [datosMandar, setDatosMandar] = useState<ItemVenta[]>([]);

  const agregarProducto = () => {
    const prod = productos.find((p) => p.id === productoId.trim());
    if (!prod || cantidadProductos <= 0) {
      setMensaje("❌ No se encontró el producto ");
      return;
    }

    // si todo está bien
    setMensaje("✔ Producto agregado correctamente");
    // Actualiza productosVenta
    setProductosVenta((prev) => {
      const existe = prev.find((p) => p.id === prod.id);
      if (existe) {
        return prev.map((p) =>
          p.id === prod.id
            ? { ...p, cantidad: p.cantidad + cantidadProductos }
            : p
        );
      }
      return [...prev, { ...prod, cantidad: cantidadProductos }];
    });

    // Actualiza datosMandar para enviar
    setDatosMandar((prev) => {
      const existe = prev.find((i) => i.productoId === prod.id);
      if (existe) {
        return prev.map((i) =>
          i.productoId === prod.id
            ? { ...i, cantidad: i.cantidad + cantidadProductos }
            : i
        );
      }
      const nuevoItem: ItemVenta = {
        id: prod.id, // usamos id del producto
        productoId: prod.id,
        cantidad: cantidadProductos,
      };
      return [...prev, nuevoItem];
    });

    setProductoId("");
    setCantidadProductos(0);
  };

  const generarVenta = () => {
    if (datosMandar.length === 0) return;

    const nuevaVenta: Venta = {
      id: generarID("V", ventas),
      cliente: cliente.id,
      fecha: new Date().toISOString(),
      productos: datosMandar,
      comentario: {
        id: generarID(
          "VC",
          ventas.map((v) => v.comentario)
        ),
        fecha: new Date().toISOString(),
        nota: "Venta generada",
      },
      cantidadPago: {
        id: generarID(
          "VP",
          ventas.map((v) => v.cantidadPago)
        ),
        costogeneral: productosVenta.reduce(
          (acc, p) => acc + p.precio * p.cantidad,
          0
        ),
        costorIGV: productosVenta.reduce(
          (acc, p) => acc + p.precio * p.cantidad * 0.18,
          0
        ),
        costoTotal: productosVenta.reduce(
          (acc, p) => acc + p.precio * p.cantidad * 1.18,
          0
        ),
      },
    };

    crearVenta(nuevaVenta);
    setProductosVenta([]);
    setDatosMandar([]);
  };

  return (
    <div className="generar-venta-container">
      <h2>Cliente Seleccionado</h2>
      <p>
        <strong>Nombre:</strong> {cliente.datosClientes.nombre}{" "}
        {cliente.datosClientes.apellido}
      </p>
      <p>
        <strong>DNI:</strong> {cliente.datosClientes.DNI}
      </p>

      <h3>Agregar Producto</h3>
      <div className="input-group">
        <label htmlFor="productoId">ID del Producto</label>
        <input
          id="productoId"
          type="text"
          value={productoId}
          onChange={(e) => setProductoId(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="cantidadProductos">Cantidad</label>
        <input
          id="cantidadProductos"
          type="number"
          value={cantidadProductos}
          onChange={(e) => setCantidadProductos(Number(e.target.value))}
        />
      </div>
      <button onClick={agregarProducto}>Agregar Producto</button>
      {mensaje && <p>{mensaje}</p>}
      <button onClick={generarVenta}>Generar Venta</button>

      <h3>Productos agregados:</h3>
      <table className="tabla-productos">
        <thead>
          <tr>
            <th>Producto</th>
            <th>ID</th>
            <th>Precio (S/)</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
            <th>IGV (18%)</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          {productosVenta.map((p) => {
            const subtotal = p.precio * p.cantidad;
            const igv = subtotal * 0.18;
            const total = subtotal + igv;

            return (
              <tr key={p.id}>
                <td>{p.nombre}</td>
                <td>{p.id}</td>
                <td>{p.precio}</td>
                <td>{p.cantidad}</td>
                <td>{subtotal.toFixed(2)}</td>
                <td>{igv.toFixed(2)}</td>
                <td>{total.toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>

        <tfoot>
          <tr>
            <td colSpan={4}></td>
            <td>
              <strong>
                S/
                {productosVenta
                  .reduce((a, p) => a + p.precio * p.cantidad, 0)
                  .toFixed(2)}
              </strong>
            </td>
            <td>
              <strong>
                S/
                {productosVenta
                  .reduce((a, p) => a + p.precio * p.cantidad * 0.18, 0)
                  .toFixed(2)}
              </strong>
            </td>
            <td>
              <strong>
                S/
                {productosVenta
                  .reduce((a, p) => a + p.precio * p.cantidad * 1.18, 0)
                  .toFixed(2)}
              </strong>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default GenerarVenta;
