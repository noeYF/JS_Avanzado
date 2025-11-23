// src/models/types.ts

export interface Usuario {
  id: number;
  user: string;
  pass: string;
  rol: string;
}

export interface Producto {
  id: number | string;
  nombre: string;
  precio: number;
}
export type ProductoCreate = Omit<Producto, "id">;


export interface Cliente {
  id: number | string;
  nombre: string;
  dni: string;
}
export type ClienteCreate = Omit<Cliente, "id">;


export interface Venta {
  id: number | string;
  cliente: string;
  producto: string;
  cantidad: number;
  fecha: string;
}
export type VentaCreate = Omit<Venta, "id">;

