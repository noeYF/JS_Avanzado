import { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  type ItemVenta,
  type Cliente,
  type Producto,
} from "../../../models/types";
import { useProductos } from "../../../hook/DatosProductos";
import { useVentas } from "../../../hook/DatosVentas";

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
  const { crearVenta } = useVentas();

  const [productoId, setProductoId] = useState("");
  const [productosVenta, setProductosVenta] = useState<ProductoConCantidad[]>(
    []
  );
  const [DatosMandar, setDatosMandar] = useState<ItemVenta[]>([]);
  const [cantidadProductos, setCantidadProductos] = useState(0);
  const { ventas } = useVentas();

  const generarIdVenta = (): string => {
    const numeros = ventas.map((v) => Number(v.id.slice(1))); // quita la "v"
    const max = Math.max(...numeros);
    return `v${String(max + 1).padStart(3, "0")}`;
  };

  const agregarProducto = () => {
    const prod = productos.find((p) => p.id === productoId.trim());
    if (!prod || productoId.trim() === "" || cantidadProductos <= 0) return;

    setProductosVenta((prev) => {
      const existe = prev.find((p) => p.id === prod.id);
      if (existe) {
        return prev.map((p) =>
          p.id === prod.id
            ? { ...p, cantidad: (p.cantidad || 1) + cantidadProductos }
            : p
        );
      }
      return [...prev, { ...prod, cantidad: cantidadProductos }];
    });

    setDatosMandar((prev) => {
      const existe = prev.find((i) => i.productoId === prod.id);

      if (existe) {
        return prev.map((i) =>
          i.productoId === prod.id
            ? { ...i, cantidad: i.cantidad + cantidadProductos }
            : i
        );
      }

      return [...prev, { productoId: prod.id, cantidad: cantidadProductos }];
    });
  };

  const generarVenta = () => {
    const nuevaVenta = {
      id: generarIdVenta(),
      cliente: cliente.id,
      fecha: new Date().toISOString(),
      productos: DatosMandar,
    };
    setProductoId("");
    setCantidadProductos(0);
    crearVenta(nuevaVenta); // ENVÍA AL BACKEND
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "450px",
        margin: "40px auto",
        background: "black",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        borderRadius: "10px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Cliente Seleccionado
      </h2>

      <p>
        <strong>Nombre:</strong> {cliente.nombre}
      </p>
      <p>
        <strong>DNI:</strong> {cliente.dni}
      </p>

      <hr style={{ margin: "20px 0", opacity: 0.3 }} />

      <h3 style={{ marginBottom: "10px" }}>Agregar Producto</h3>

      <input
        type="text"
        placeholder="ID del producto"
        value={productoId}
        onChange={(e) => setProductoId(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "12px",
          borderRadius: "6px",
          border: "1px solid #bbb",
          fontSize: "15px",
        }}
      />

      <input
        type="number"
        placeholder="Cantidad Producto"
        value={cantidadProductos}
        onChange={(e) => setCantidadProductos(Number(e.target.value))}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "12px",
          borderRadius: "6px",
          border: "1px solid #bbb",
          fontSize: "15px",
        }}
      />

      <button
        onClick={agregarProducto}
        style={{
          width: "100%",
          padding: "10px",
          background: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "6px",
          fontSize: "16px",
          cursor: "pointer",
          marginBottom: "10px",
        }}
      >
        Agregar Producto
      </button>

      <button
        onClick={generarVenta}
        style={{
          width: "100%",
          padding: "10px",
          background: "#28a745",
          color: "white",
          border: "none",
          borderRadius: "6px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Generar Venta
      </button>

      <h3 style={{ marginTop: "30px" }}>Productos agregados:</h3>

      <ul style={{ paddingLeft: "20px", lineHeight: "1.6" }}>
        {productosVenta.map((p) => (
          <li key={p.id}>
            <strong>{p.nombre}</strong> — ID: {p.id} — Precio: S/{p.precio} —
            Cantidad: {p.cantidad}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenerarVenta;
