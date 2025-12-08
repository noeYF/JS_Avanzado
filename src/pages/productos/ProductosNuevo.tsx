import { useState } from "react";
import type { ProductoCreate } from "../../models/typeProducto";
import { useProductos } from "../../hook/DatosProductos";
import { generarID } from "../../util/generarID";
import "../../styles/generarNuevos/nuevoProducto.scss";

function ProductosNuevo() {
  const { crearProducto, productos } = useProductos();
  const [producto, setProducto] = useState<ProductoCreate>({
    nombre: "",
    precio: 0,
    proveedor: {
      nombre: "",
      telefono: "",
      direccion: "",
    },
    catidades: {
      catidad: 0,
      cantidadMinima: 0,
    },
    datosProductos: {
      fechaCreacion: new Date().toISOString(),
      fechaVencimiento: new Date().toISOString(),
      descripcion: "",
    },
    estado: {
      estado: "aire libre", // valor por defecto
    },
    categoria: {
      categoria: "Venta Libre", // valor por defecto
      descripcion: "",
    },
    marca: {
      nombre: "",
      paisOrigen: "",
      descripcion: "",
    },
  });

  const guardar = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nuevoProducto = {
      ...producto,
      id: generarID("P", productos),

      proveedor: {
        ...producto.proveedor,
        id: generarID(
          "PROV",
          productos.map((p) => p.proveedor)
        ),
      },
      catidades: {
        ...producto.catidades,
        id: generarID(
          "CT",
          productos.map((p) => p.catidades)
        ),
      },
      datosProductos: {
        ...producto.datosProductos,
        id: generarID(
          "DP",
          productos.map((p) => p.datosProductos)
        ),
      },
      estado: {
        ...producto.estado,
        id: generarID(
          "EM",
          productos.map((p) => p.estado)
        ),
      },
      categoria: {
        ...producto.categoria,
        id: generarID(
          "CA",
          productos.map((p) => p.categoria)
        ),
      },
      marca: {
        ...producto.marca,
        id: generarID(
          "MA",
          productos.map((p) => p.marca)
        ),
      },
    };

    await crearProducto(nuevoProducto);

    alert("Producto guardado");

    // reset
    setProducto({
      nombre: "",
      precio: 0,
      proveedor: {
        nombre: "",
        telefono: "",
        direccion: "",
      },
      catidades: {
        catidad: 0,
        cantidadMinima: 0,
      },
      datosProductos: {
        fechaCreacion: new Date().toISOString(),
        fechaVencimiento: new Date().toISOString(),
        descripcion: "",
      },
      estado: {
        estado: "aire libre", // valor por defecto
      },
      categoria: {
        categoria: "Venta Libre", // valor por defecto
        descripcion: "",
      },
      marca: {
        nombre: "",
        paisOrigen: "",
        descripcion: "",
      },
    });
  };

  return (
    <div className="form-productos">
      <div className="contenedor-NP">
        <h2>Nuevo Producto</h2>
        <form onSubmit={guardar}>
          {/* NOMBRE */}
          <div className="nom-pre">
            <label>
              <h6>Nombre del producto</h6>
              <input
                type="text"
                value={producto.nombre}
                onChange={(e) =>
                  setProducto({ ...producto, nombre: e.target.value })
                }
              />
            </label>
            {/* PRECIO */}
            <label>
              <h6>Precio</h6>
              <input
                type="number"
                value={producto.precio}
                onChange={(e) =>
                  setProducto({ ...producto, precio: Number(e.target.value) })
                }
              />
            </label>
          </div>

          {/* PROVEEDOR */}
          <div className="provedor">
            <h4>Provedor</h4>
            <div className="dir-nom-tele">
              <label className="nombre">
                <h6>Nombre del proveedor</h6>
                <input
                  type="text"
                  value={producto.proveedor.nombre}
                  onChange={(e) =>
                    setProducto({
                      ...producto,
                      proveedor: {
                        ...producto.proveedor,
                        nombre: e.target.value,
                      },
                    })
                  }
                />
              </label>
              <label className="telefono">
                <h6>Teléfono</h6>
                <input
                  type="text"
                  value={producto.proveedor.telefono}
                  onChange={(e) =>
                    setProducto({
                      ...producto,
                      proveedor: {
                        ...producto.proveedor,
                        telefono: e.target.value,
                      },
                    })
                  }
                />
              </label>
              <label className="direccion">
                <h6>Dirección</h6>
                <input
                  type="text"
                  value={producto.proveedor.direccion}
                  onChange={(e) =>
                    setProducto({
                      ...producto,
                      proveedor: {
                        ...producto.proveedor,
                        direccion: e.target.value,
                      },
                    })
                  }
                />
              </label>
            </div>
          </div>

          {/* CANTIDADES */}
          <div className="inventario">
            <h4>Inventario</h4>
            <div className="can-canM">
              <label className="catidad">
                <h6>Cantidad</h6>
                <input
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
              </label>
              <label className="catidad-min">
                <h6>Cantidad mínima</h6>
                <input
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
              </label>
            </div>
          </div>

          {/* DATOS DEL PRODUCTO */}
          <div className="info-produc">
            <h4>Información del producto</h4>
            <div className="fc-fv-ds">
              <label className="fc-cr">
                <h6>Fecha de creación</h6>
                <input
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
              </label>
              <label className="fc-v">
                <h6>Fecha de vencimiento</h6>
                <input
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
              </label>
              <label className="des">
                <h6>Descripción</h6>
                <textarea
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
              </label>
            </div>
          </div>

          {/* ESTADO */}
          <div className="conteiner-nuevo">
            <div className="estado">
              <label>
                <h6>Estado</h6>
                <select
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
              </label>
            </div>
            {/* CATEGORÍA */}
            <div className="categoria">
              <label>
                <h6>Categoría</h6>
                <select
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
              </label>
            </div>
            {/* MARCA */}
            <div className="marca">
              <label>
                <h6>Marca</h6>
                <input
                  type="text"
                  value={producto.marca?.nombre || ""}
                  onChange={(e) =>
                    setProducto({
                      ...producto,
                      marca: { ...producto.marca, nombre: e.target.value },
                    })
                  }
                />
              </label>
              <label>
                <h6>País de origen</h6>
                <input
                  type="text"
                  value={producto.marca?.paisOrigen || ""}
                  onChange={(e) =>
                    setProducto({
                      ...producto,
                      marca: { ...producto.marca, paisOrigen: e.target.value },
                    })
                  }
                />
              </label>
              <div className="descripcion">
                <label>
                  <h6>Descripción de la marca</h6>
                  <textarea
                    value={producto.marca?.descripcion || ""}
                    onChange={(e) =>
                      setProducto({
                        ...producto,
                        marca: { ...producto.marca, descripcion: e.target.value },
                      })
                    }
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="boton">
            <button type="submit">Guardar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductosNuevo;
