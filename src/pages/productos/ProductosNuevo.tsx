import { useState } from "react";
import type { Producto } from "../../models/types";
import { useProductos } from "../../hook/DatosProductos";

function ProductosNuevo() {
  const { crearProducto, productos } = useProductos();
  const [producto, setProducto] = useState<Producto>({
    id: "",
    nombre: "",
    precio: 0,
  });

  const generarID = (): string => {
    const ultimoProducto = productos.map((p) => Number(p.id!.slice(1)));
    const max = Math.max(...ultimoProducto);
    return `p${max + 1}`;
  };

  const guardar = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nuevoProducto = { ...producto, id: generarID() };
    await crearProducto(nuevoProducto);
    alert("Producto guardado");
    setProducto({ id: "", nombre: "", precio: 0 });
  };

  return (
    <div className="form-box">
      <h2>Nuevo Producto</h2>

      <form onSubmit={guardar}>
        <input
          type="text"
          placeholder="Nombre del producto"
          value={producto.nombre}
          onChange={(e) => setProducto({ ...producto, nombre: e.target.value })}
        />

        <input
          type="number"
          placeholder="Precio"
          value={producto.precio}
          onChange={(e) =>
            setProducto({ ...producto, precio: Number(e.target.value) })
          }
        />

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default ProductosNuevo;
