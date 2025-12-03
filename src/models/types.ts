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


export interface Cliente {
  id: string;
  nombre: string;
  dni: string;
}


export interface ItemVenta {
  productoId: string;
  cantidad: number;
}

export interface Venta {
  id: string;
  cliente: string;
  fecha: string;
  productos: ItemVenta[];
}