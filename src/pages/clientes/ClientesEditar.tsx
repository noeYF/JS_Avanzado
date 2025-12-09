import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { Cliente } from "../../models/typeClientes";
import { useClientes } from "../../hook/DatosClientes";

function ClientesEditar() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { traerCliente, modificarCliente } = useClientes();

  const [cliente, setCliente] = useState<Cliente>({
    id: "",
    datosClientes: {
      id: "",
      nombre: "", // nombre del cliente vacío
      apellido: "", // apellido vacío
      DNI: 0, // DNI inicial como 0
    },
    direccion: {
      id: "",
      direccion: "", // dirección vacía
      referencia: "", // referencia opcional
    },
    telefono: {
      id: "",
      numero: "", // número vacío
      correo: "", // correo vacío
    },
  });

  useEffect(() => {
    const cargarCliente = async () => {
      if (!id) return;

      const data = await traerCliente(id);
      if (data) {
        // Transformar para que coincida con ClienteCreate

        setCliente(data);
      }
    };

    cargarCliente();
  }, [id, traerCliente]);

  const actualizar = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!id) return;

    try {
      await modificarCliente(id, cliente);
      alert("Cliente actualizado");
      navigate("/clientes/lista");
    } catch (err) {
      console.log("Error al actualizar el cliente:", err);
    }
  };

  return (
    <div className="form-box">
      <h2>Editar Cliente</h2>

      <form onSubmit={actualizar}>
        {/* DATOS DEL CLIENTE */}
        <fieldset>
          <legend>Datos del Cliente</legend>

          <label>
            Nombre
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

          <label>
            Apellido
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

          <label>
            DNI
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
        </fieldset>

        {/* DIRECCIÓN */}
        <fieldset>
          <legend>Dirección</legend>

          <label>
            Dirección
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

          <label>
            Referencia
            <input
              type="text"
              value={cliente.direccion.referencia || ""}
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
        </fieldset>

        {/* TELÉFONO Y CORREO */}
        <fieldset>
          <legend>Contacto</legend>

          <label>
            Teléfono
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

          <label>
            Correo
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
        </fieldset>

        <button type="submit">Actualizar Cliente</button>
      </form>
    </div>
  );
}

export default ClientesEditar;
