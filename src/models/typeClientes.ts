export interface Direccion {
  id: string;
  direccion: string;
  referencia?: string;
}

export interface canalesComunicacion {
  id: string;
  numero: string;
  correo: string;
}
export interface datosClientes {
  id: string;
  nombre: string;
  apellido: string;
  DNI: number;
}

export interface Cliente {
  id: string;
  datosClientes: datosClientes;
  direccion: Direccion;
  telefono: canalesComunicacion;
}

//typos creates
export type DireccionCreate = Omit<Direccion, "id">;
export type canalesComunicacionCreate = Omit<canalesComunicacion, "id">;
export type datosClientesCreate = Omit<datosClientes, "id">;

export interface ClienteCreate {
  datosClientes: datosClientesCreate;
  direccion: DireccionCreate;
  telefono: canalesComunicacionCreate;
}
