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
export interface EstadoMantener {
  id: string;
  estado: "refrigerado" | "aire libre";
}
export interface Categoria {
  id: string;
  categoria: "Venta Libre" | "Prescripción" | "Especialisado";
  descripcion?: string;
}
export interface Marca {
  id: string;
  nombre: string;
  paisOrigen?: string;
  descripcion?: string;
}

export interface Producto {
  id: string;
  nombre: string;
  precio: number;
  proveedor: Proveedor; // RELACIÓN: un producto tiene un proveedor
  catidades: Cantidades;
  datosProductos: datosProducto;
  estado: EstadoMantener;
  categoria: Categoria;
  marca: Marca;
}

//types creates

export type ProveedorCreate = Omit<Proveedor, "id">;
export type CantidadesCreate = Omit<Cantidades, "id">;
export type DatosProductoCreate = Omit<datosProducto, "id">;
export type EstadoMantenerCreate = Omit<EstadoMantener, "id">;
export type CategoriaCreate = Omit<Categoria, "id">;
export type MarcaCreate = Omit<Marca, "id">;

export interface ProductoCreate {
  nombre: string;
  precio: number;
  estado: EstadoMantenerCreate;
  proveedor: ProveedorCreate;
  catidades: CantidadesCreate;
  datosProductos: DatosProductoCreate;
  categoria: CategoriaCreate;
  marca: MarcaCreate;
}
