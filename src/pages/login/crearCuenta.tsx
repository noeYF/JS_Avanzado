import { useState } from "react";
import "../../styles/login/loginCreateStyle.scss";
import type { UsuarioCreate, Usuario } from "../../models/typeUsuarios";
import { generarID } from "../../util/generarID";
import { useUsuarios } from "../../hook/DatosUsuarios";

export const CrearUsuario = () => {
  const { usuarios, crearUsuario } = useUsuarios();
  const [usuario, setUsuario] = useState<UsuarioCreate>({
    datosCuenta: {
      user: "",
      pass: "",
    },
    rol: {
      rol: "VENDEDOR", // puedes poner cualquier valor por defecto válido: "ADMIN" | "ALMACENERO" | "VENDEDOR" | "SUPERVISOR"
    },
    datosPersonales: {
      nombre: "",
      apellido: "",
      edad: 0,
      DNI: "",
    },
    canalesContactos: {
      telefono: "",
      direccion: "lima", // puedes poner otro valor por defecto válido
      referencias: "",
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const nuevoUsuario: Usuario = {
      ...usuario,
      id: generarID(
        "USR",
        usuarios.filter((u) => u !== undefined)
      ),
      datosCuenta: {
        ...usuario.datosCuenta,
        id: generarID(
          "ACC",
          usuarios.map((u) => u.datosCuenta).filter((dc) => dc !== undefined)
        ),
      },
      rol: {
        ...usuario.rol,
        id: generarID(
          "ROL",
          usuarios.map((u) => u.rol).filter((r) => r !== undefined)
        ),
      },
      datosPersonales: {
        ...usuario.datosPersonales,
        id: generarID(
          "DP",
          usuarios
            .map((u) => u.datosPersonales)
            .filter((dp) => dp !== undefined)
        ),
      },
      canalesContactos: {
        ...usuario.canalesContactos,
        id: generarID(
          "CC",
          usuarios
            .map((u) => u.canalesContactos)
            .filter((cc) => cc !== undefined)
        ),
      },
    };

    await crearUsuario(nuevoUsuario);
    console.log("Usuario creado:", nuevoUsuario);
    alert(
      `Usuario ${usuario.datosCuenta.user} con rol ${usuario.rol.rol} creado`
    );

    setUsuario({
      datosCuenta: {
        user: "",
        pass: "",
      },
      rol: {
        rol: "VENDEDOR", // puedes poner cualquier valor por defecto válido: "ADMIN" | "ALMACENERO" | "VENDEDOR" | "SUPERVISOR"
      },
      datosPersonales: {
        nombre: "",
        apellido: "",
        edad: 0,
        DNI: "",
      },
      canalesContactos: {
        telefono: "",
        direccion: "lima", // puedes poner otro valor por defecto válido
        referencias: "",
      },
    });
  };

  return (
    <div className="contenedor-crear">
      <div className="logincreate-container">
        <div className="fondo">
          <div className="login-box">
            <h2>Crear Usuario</h2>
            <form onSubmit={handleSubmit}>
              {/* usuraio  */}
              <div className="form-group use">
                <label>Usuario</label>
                <input
                  type="text"
                  value={usuario.datosCuenta.user}
                  onChange={(e) =>
                    setUsuario((prev) => ({
                      ...prev,
                      datosCuenta: {
                        ...prev.datosCuenta,
                        user: e.target.value,
                      },
                    }))
                  }
                  required
                />
              </div>
              {/* contraseña */}
              <div className="form-group con">
                <label>Contraseña</label>
                <input
                  type="password"
                  value={usuario.datosCuenta.pass}
                  onChange={(e) =>
                    setUsuario((prev) => ({
                      ...prev,
                      datosCuenta: {
                        ...prev.datosCuenta,
                        pass: e.target.value,
                      },
                    }))
                  }
                  required
                />
              </div>
              {/* Rol */}
              <div className="form-group rol">
                <label>Rol</label>
                <select
                  style={{ display: "block" }}
                  value={usuario.rol.rol}
                  onChange={(e) =>
                    setUsuario((prev) => ({
                      ...prev,
                      rol: {
                        ...prev.rol,
                        rol: e.target.value as
                          | "ALMACENERO"
                          | "VENDEDOR"
                          | "SUPERVISOR",
                      },
                    }))
                  }
                >
                  <option value="VENDEDOR">Vendedor</option>
                  <option value="ALMACENERO">Almacenero</option>
                  <option value="SUPERVISOR">Supervisor</option>
                </select>
              </div>
              {/* nombre */}
              <div className="form-group nom">
                <label>Nombre</label>
                <input
                  type="text"
                  value={usuario.datosPersonales.nombre}
                  onChange={(e) =>
                    setUsuario((prev) => ({
                      ...prev,
                      datosPersonales: {
                        ...prev.datosPersonales,
                        nombre: e.target.value,
                      },
                    }))
                  }
                  required
                />
              </div>
              {/* apellido */}
              <div className="form-group ape">
                <label>Apellido</label>
                <input
                  type="text"
                  value={usuario.datosPersonales.apellido}
                  onChange={(e) =>
                    setUsuario((prev) => ({
                      ...prev,
                      datosPersonales: {
                        ...prev.datosPersonales,
                        apellido: e.target.value,
                      },
                    }))
                  }
                  required
                />
              </div>
              {/* edad */}
              <div className="form-group edad">
                <label>Edad</label>
                <input
                  type="number"
                  value={usuario.datosPersonales.edad}
                  onChange={(e) =>
                    setUsuario((prev) => ({
                      ...prev,
                      datosPersonales: {
                        ...prev.datosPersonales,
                        edad: Number(e.target.value),
                      },
                    }))
                  }
                  required
                />
              </div>
              {/* DNI */}
              <div className="form-group dni">
                <label>DNI</label>
                <input
                  type="text"
                  value={usuario.datosPersonales.DNI}
                  onChange={(e) =>
                    setUsuario((prev) => ({
                      ...prev,
                      datosPersonales: {
                        ...prev.datosPersonales,
                        DNI: e.target.value,
                      },
                    }))
                  }
                  required
                />
              </div>
              {/* telefono */}
              <div className="form-group tele">
                <label>Teléfono</label>
                <input
                  type="text"
                  value={usuario.canalesContactos.telefono}
                  onChange={(e) =>
                    setUsuario((prev) => ({
                      ...prev,
                      canalesContactos: {
                        ...prev.canalesContactos,
                        telefono: e.target.value,
                      },
                    }))
                  }
                  required
                />
              </div>
              {/* direccion */}
              <div className="form-group direc">
                <label>Dirección</label>
                <select
                  style={{ display: "block" }}
                  value={usuario.canalesContactos.direccion}
                  onChange={(e) =>
                    setUsuario((prev) => ({
                      ...prev,
                      canalesContactos: {
                        ...prev.canalesContactos,
                        direccion: e.target.value as
                          | "lima"
                          | "san Mateo"
                          | "San juan",
                      },
                    }))
                  }
                >
                  <option value="lima">lima</option>
                  <option value="san Mateo">san Mateo</option>
                  <option value="San juan">San juan</option>
                </select>
              </div>
              {/* referencia */}
              <div className="form-group refe">
                <label>Referencias</label>
                <input
                  type="text"
                  value={usuario.canalesContactos.referencias}
                  onChange={(e) =>
                    setUsuario((prev) => ({
                      ...prev,
                      canalesContactos: {
                        ...prev.canalesContactos,
                        referencias: e.target.value,
                      },
                    }))
                  }
                />
              </div>
              <div className="buton">
                <button type="submit">Crear Usuario</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrearUsuario;
