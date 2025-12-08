// Definimos todos los métodos que pueden interactuar con los datos de ventas
import { API_BASE_URL } from "./api/config";
import { ApiDatos } from "./api/apiDatos";
import type { Venta } from "../models/typeVentas";

export const URL = `${API_BASE_URL}/ventas`;

export const ventasServices = {
  getAll: () => ApiDatos.get<Venta[]>(URL),
  getOne: (id: string) => ApiDatos.get<Venta>(`${URL}/${id}`),
  create: (venta: Venta) => ApiDatos.post<Venta, Venta>(URL, venta),
  delete: (id: string) => ApiDatos.delete(`${URL}/${id}`),
  patch: (id: string, data: Partial<Venta>) =>
    ApiDatos.patch<Venta, Partial<Venta>>(`${URL}/${id}`, data),
};
