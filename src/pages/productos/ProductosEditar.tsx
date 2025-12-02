import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { ProductoCreate } from "../../models/types";
import { useProductos } from "../../hook/DatosProductos";

function ProductosEditar() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { traerProducto, modificarProducto } = useProductos();

  const [producto, setProducto] = useState<ProductoCreate>({
    nombre: "",
    precio: 0,
  });

  useEffect(() => {
    const cargarProducto = async () => {
      if (!id) return;

      const data = await traerProducto(id);
      if (data) setProducto(data);
    };

    cargarProducto();
  }, [id, traerProducto]);

  const actualizar = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!id) return;

    try {
      await modificarProducto(id, producto);
      alert("Producto actualizado");
      navigate("/productos/lista");
    } catch (err) {
      console.log("Error al actualizar el producto:", err);
    }
  };

  return (
    <div className="form-box">
      <h2>Editar Producto</h2>

      <form onSubmit={actualizar}>
        <input
          type="text"
          value={producto.nombre}
          onChange={(e) => setProducto({ ...producto, nombre: e.target.value })}
        />

        <input
          type="number"
          value={producto.precio}
          onChange={(e) =>
            setProducto({ ...producto, precio: Number(e.target.value) })
          }
        />

        <button type="submit">Actualizar</button>
      </form>
    </div>
  );
}

export default ProductosEditar;
