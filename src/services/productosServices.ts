import { API_BASE_URL } from "./api/config";
import { ApiDatos } from "./api/apiDatos";
import type { Producto } from "../models/types";

export const URL = `${API_BASE_URL}/productos`;

export const productosServices = {
  getAll: () => ApiDatos.get<Producto[]>(URL),
  getOne: (id: string) => ApiDatos.get<Producto>(`${URL}/${id}`),
  create: (producto: Producto) =>
    ApiDatos.post<Producto, Producto>(URL, producto),
  delete: (id: string) => ApiDatos.delete(`${URL}/${id}`),
  patch: (id: string, data: Partial<Producto>) =>
    ApiDatos.patch<Producto, Partial<Producto>>(`${URL}/${id}`, data),
};
