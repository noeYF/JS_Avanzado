
export interface Proveedor {
  id: string;
  nombre: string;
  telefono: string;
  direccion: string;
}
export interface Cantidades {
  id: string;
  catidad: number;
  cantidadMinima: number;
}

export interface datosProducto {
  id: string;
  fechaCreacion: string;
  fechaVencimiento: string;
  descripcion?: string;
}

export interface Producto {
  id: string;
  nombre: string;
  precio: number;
  proveedor: Proveedor; // RELACIÓN: un producto tiene un proveedor
  catidades: Cantidades;
  datosProductos: datosProducto;
}

//types creates


export type ProveedorCreate = Omit<Proveedor, "id">;
export type CantidadesCreate = Omit<Cantidades, "id">;
export type DatosProductoCreate = Omit<datosProducto, "id">;


export interface ProductoCreate {
  nombre: string;
  precio: number;

  proveedor: ProveedorCreate;
  catidades: CantidadesCreate;
  datosProductos: DatosProductoCreate;
}
