import { useState } from "react";
import type { ClienteCreate } from "../../models/typeClientes";
import { useClientes } from "../../hook/DatosClientes";
import { generarID } from "../../util/generarID";
import "../../styles/generarNuevos/nuevoCliente.scss";

function ClienteNuevo() {
  const { crearCliente, Clientes } = useClientes();

  const [cliente, setCliente] = useState<ClienteCreate>({
    datosClientes: {
      nombre: "", // nombre del cliente vacío
      apellido: "", // apellido vacío
      DNI: 0, // DNI inicial como 0
    },
    direccion: {
      direccion: "", // dirección vacía
      referencia: "", // referencia opcional
    },
    telefono: {
      numero: "", // número vacío
      correo: "", // correo vacío
    },
  });
  const guardar = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nuevoCliente = {
      id: generarID("C", Clientes),
      datosClientes: {
        ...cliente.datosClientes,
        id: generarID(
          "CD",
          Clientes.map((p) => p.datosClientes)
        ),
      },
      direccion: {
        ...cliente.direccion,
        id: generarID(
          "DI",
          Clientes.map((p) => p.direccion)
        ),
      },
      telefono: {
        ...cliente.telefono,
        id: generarID(
          "CA",
          Clientes.map((p) => p.telefono)
        ),
      },
    };

    await crearCliente(nuevoCliente);

    alert("Clientes guardado");

    // reset
    setCliente({
      datosClientes: {
        nombre: "", // nombre del cliente vacío
        apellido: "", // apellido vacío
        DNI: 0, // DNI inicial como 0
      },
      direccion: {
        direccion: "", // dirección vacía
        referencia: "", // referencia opcional
      },
      telefono: {
        numero: "", // número vacío
        correo: "", // correo vacío
      },
    });
  };

  return (
    <div className="nuevo-cliente">
      <div className="form-nuevo-cliente">
        <h2>Nuevo Cliente</h2>
        <form onSubmit={guardar} className="contenido-cliente">
          {/* DATOS DEL CLIENTE */}

          <div className="nombre">
            <label>
              <h6>Nombre</h6>
              <input
                type="text"
                value={cliente.datosClientes.nombre}
                onChange={(e) =>
                  setCliente({
                    ...cliente,
                    datosClientes: {
                      ...cliente.datosClientes,
                      nombre: e.target.value,
                    },
                  })
                }
                required
              />
            </label>
          </div>
          <div className="apellido">
            <label>
              <h6>Apellido</h6>
              <input
                type="text"
                value={cliente.datosClientes.apellido}
                onChange={(e) =>
                  setCliente({
                    ...cliente,
                    datosClientes: {
                      ...cliente.datosClientes,
                      apellido: e.target.value,
                    },
                  })
                }
                required
              />
            </label>
          </div>

          <div className="DNI">
            <label>
              <h6>DNI</h6>
              <input
                type="number"
                value={cliente.datosClientes.DNI}
                onChange={(e) =>
                  setCliente({
                    ...cliente,
                    datosClientes: {
                      ...cliente.datosClientes,
                      DNI: Number(e.target.value),
                    },
                  })
                }
                required
              />
            </label>
          </div>
          {/* DIRECCIÓN */}
          <div className="direccion">
            <label>
              <h6>Dirección</h6>
              <input
                type="text"
                value={cliente.direccion.direccion}
                onChange={(e) =>
                  setCliente({
                    ...cliente,
                    direccion: {
                      ...cliente.direccion,
                      direccion: e.target.value,
                    },
                  })
                }
                required
              />
            </label>
          </div>
          <div className="referencia">
            <label>
              <h6>Referencia</h6>
              <input
                type="text"
                value={cliente.direccion.referencia}
                onChange={(e) =>
                  setCliente({
                    ...cliente,
                    direccion: {
                      ...cliente.direccion,
                      referencia: e.target.value,
                    },
                  })
                }
              />
            </label>
          </div>
          {/* CANALES DE COMUNICACIÓN */}
          <div className="num-tele">
            <label>
              <h6>Número de teléfono</h6>
              <input
                type="text"
                value={cliente.telefono.numero}
                onChange={(e) =>
                  setCliente({
                    ...cliente,
                    telefono: {
                      ...cliente.telefono,
                      numero: e.target.value,
                    },
                  })
                }
                required
              />
            </label>
          </div>
          <div className="corre">
            <label>
              <h6>Correo electrónico</h6>
              <input
                type="email"
                value={cliente.telefono.correo}
                onChange={(e) =>
                  setCliente({
                    ...cliente,
                    telefono: {
                      ...cliente.telefono,
                      correo: e.target.value,
                    },
                  })
                }
                required
              />
            </label>
          </div>
          {/* BOTÓN PARA GUARDAR */}
          <div className="boton">
            <button type="submit">Guardar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ClienteNuevo;
