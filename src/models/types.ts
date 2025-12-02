// src/models/types.ts
//defini de una ves los cuatro tipos de personas que abra para que no aya confuciones
export interface Usuario {
  id: string;
  user: string;
  pass: string;
  rol: "ADMIN" | "ALMACENERO" | "VENDEDOR" | "SUPERVISOR";
}

export interface Producto {
  id: string;
  nombre: string;
  precio: number;
}
export type ProductoCreate = Omit<Producto, "id">;

export interface Cliente {
  id: string;
  nombre: string;
  dni: string;
}
export type ClienteCreate = Omit<Cliente, "id">;

export interface Venta {
  id: string;
  cliente: string;
  producto: string;
  cantidad: number;
  fecha: string;
}
export type VentaCreate = Omit<Venta, "id">;
