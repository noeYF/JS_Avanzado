import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { Producto } from "../../models/typeProducto";
import { useProductos } from "../../hook/DatosProductos";

function ProductosEditar() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { traerProducto, modificarProducto } = useProductos();

  const [producto, setProducto] = useState<Producto>({
    id: "",
    nombre: "",
    precio: 0,
    proveedor: {
      id: "",
      nombre: "",
      telefono: "",
      direccion: "",
    },
    catidades: {
      id: "",
      catidad: 0,
      cantidadMinima: 0,
    },
    datosProductos: {
      id: "",
      fechaCreacion: new Date().toISOString(),
      fechaVencimiento: new Date().toISOString(),
      descripcion: "",
    },
    estado: {
      id: "",
      estado: "aire libre", // valor por defecto
    },
    categoria: {
      id: "",
      categoria: "Venta Libre", // valor por defecto
      descripcion: "",
    },
    marca: {
      id: "",
      nombre: "",
      paisOrigen: "",
      descripcion: "",
    },
  }); 

  useEffect(() => {
    const cargarProducto = async () => {
      if (!id) return;

      const data = await traerProducto(id);
      if (data) {
        setProducto(data);
      }
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
  useEffect(() => {
    console.log("Renderizado del select, categoria:", producto);
  }, [producto]);
  return (
    <div className="formulario">
      <h2>Editar Producto</h2>
      <form onSubmit={actualizar}>
        {/* Nombre */}
        <label htmlFor="input1">Nombre:</label>
        <input
          id="input1"
          type="text"
          value={producto.nombre}
          onChange={(e) => setProducto({ ...producto, nombre: e.target.value })}
        />

        {/* Precio */}
        <label htmlFor="input2">Precio:</label>
        <input
          id="input2"
          type="number"
          value={producto.precio}
          onChange={(e) =>
            setProducto({ ...producto, precio: Number(e.target.value) })
          }
        />

        {/* Proveedor */}
        <label htmlFor="input4">Nombre proveedor:</label>
        <input
          id="input4"
          type="text"
          value={producto.proveedor.nombre}
          onChange={(e) =>
            setProducto({
              ...producto,
              proveedor: { ...producto.proveedor, nombre: e.target.value },
            })
          }
        />

        <label htmlFor="input5">Teléfono proveedor:</label>
        <input
          id="input5"
          type="text"
          value={producto.proveedor.telefono}
          onChange={(e) =>
            setProducto({
              ...producto,
              proveedor: { ...producto.proveedor, telefono: e.target.value },
            })
          }
        />

        <label htmlFor="input6">Dirección proveedor:</label>
        <input
          id="input6"
          type="text"
          value={producto.proveedor.direccion}
          onChange={(e) =>
            setProducto({
              ...producto,
              proveedor: { ...producto.proveedor, direccion: e.target.value },
            })
          }
        />

        {/* Cantidades */}
        <label htmlFor="input7">Cantidad:</label>
        <input
          id="input7"
          type="number"
          value={producto.catidades.catidad}
          onChange={(e) =>
            setProducto({
              ...producto,
              catidades: {
                ...producto.catidades,
                catidad: Number(e.target.value),
              },
            })
          }
        />

        <label htmlFor="input8">Cantidad mínima:</label>
        <input
          id="input8"
          type="number"
          value={producto.catidades.cantidadMinima}
          onChange={(e) =>
            setProducto({
              ...producto,
              catidades: {
                ...producto.catidades,
                cantidadMinima: Number(e.target.value),
              },
            })
          }
        />

        {/* Fechas y descripción */}
        <label htmlFor="input9">Fecha creación:</label>
        <input
          id="input9"
          type="date"
          value={producto.datosProductos.fechaCreacion.split("T")[0]}
          onChange={(e) =>
            setProducto({
              ...producto,
              datosProductos: {
                ...producto.datosProductos,
                fechaCreacion: e.target.value,
              },
            })
          }
        />

        <label htmlFor="input10">Fecha vencimiento:</label>
        <input
          id="input10"
          type="date"
          value={producto.datosProductos.fechaVencimiento.split("T")[0]}
          onChange={(e) =>
            setProducto({
              ...producto,
              datosProductos: {
                ...producto.datosProductos,
                fechaVencimiento: e.target.value,
              },
            })
          }
        />

        <label htmlFor="input11">Descripción:</label>
        <textarea
          id="input11"
          value={producto.datosProductos.descripcion || ""}
          onChange={(e) =>
            setProducto({
              ...producto,
              datosProductos: {
                ...producto.datosProductos,
                descripcion: e.target.value,
              },
            })
          }
        />

        {/* Estado */}
        <label htmlFor="input12">Estado:</label>
        <select
          id="input12"
          style={{ display: "block" }}
          value={producto.estado?.estado || "aire libre"}
          onChange={(e) =>
            setProducto({
              ...producto,
              estado: {
                ...producto.estado,
                estado: e.target.value as "refrigerado" | "aire libre",
              },
            })
          }
        >
          <option value="refrigerado">Refrigerado</option>
          <option value="aire libre">Aire libre</option>
        </select>

        {/* Categoría */}
        <label htmlFor="input13">Categoría:</label>
        <select
          id="input13"
          style={{ display: "block" }}
          value={producto.categoria?.categoria || "Venta Libre"}
          onChange={(e) =>
            setProducto({
              ...producto,
              categoria: {
                ...producto.categoria,
                categoria: e.target.value as
                  | "Venta Libre"
                  | "Prescripción"
                  | "Especialisado",
              },
            })
          }
        >
          <option value="Venta Libre">Venta Libre</option>
          <option value="Prescripción">Prescripción</option>
          <option value="Especialisado">Especialisado</option>
        </select>

        {/* Marca */}
        <label htmlFor="input14">Marca:</label>
        <input
          id="input14"
          type="text"
          value={producto.marca?.nombre || ""}
          onChange={(e) =>
            setProducto({
              ...producto,
              marca: { ...producto.marca, nombre: e.target.value },
            })
          }
        />

        <button type="submit">Actualizar</button>
      </form>
    </div>
  );
}

export default ProductosEditar;
