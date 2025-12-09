export interface Rol {
  id: string;
  rol: "ADMIN" | "ALMACENERO" | "VENDEDOR" | "SUPERVISOR";
}

export interface DatosPersonales {
  id: string;
  nombre: string;
  apellido: string;
  edad: number;
  DNI: string;
}
export interface CanalesContacto {
  id: string;
  telefono: string;
  direccion: "lima" | "san Mateo" | "San juan";
  referencias?: string;
}
export interface DatosCuenta {
  id: string;
  user: string;
  pass: string;
}
export interface Usuario {
  id: string;
  datosCuenta: DatosCuenta;
  rol: Rol;
  datosPersonales: DatosPersonales;
  canalesContactos: CanalesContacto;
}
//types creates
export type RolCreate = Omit<Rol, "id">;
export type DatosPersonalesCreate = Omit<DatosPersonales, "id">;
export type CanalesContactoCreate = Omit<CanalesContacto, "id">;
export type DatosCuentaCreate = Omit<DatosCuenta, "id">;

export interface UsuarioCreate {
  datosCuenta: DatosCuentaCreate;
  rol: RolCreate;
  datosPersonales: DatosPersonalesCreate;
  canalesContactos: CanalesContactoCreate;
}
