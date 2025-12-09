export interface ItemVenta {
  id: string;
  productoId: string; // RELACIÓN: referencia a Producto
  cantidad: number;
}

export interface cantidadPago {
  id: string;
  costogeneral: number;
  costorIGV: number;
  costoTotal: number;
}
export interface ComentarioVenta {
  id: string;
  fecha: string;
  nota: string;
}

export interface Venta {
  id: string;
  cliente: string;
  fecha: string;
  productos: ItemVenta[];
  comentario: ComentarioVenta;
  cantidadPago: cantidadPago;
}
//types amit
export type ItemVentaCreate = Omit<ItemVenta, "id">;
export type CantidadPagoCreate = Omit<cantidadPago, "id">;
export type ComentarioVentaCreate = Omit<ComentarioVenta, "id">;

export interface CreateVenta {
  cliente: string;
  fecha: string;
  itemsVentaCreate: ItemVentaCreate[];
  cantidadPagoCreate: CantidadPagoCreate;
  comentarioVentaCreate: ComentarioVentaCreate;
}
