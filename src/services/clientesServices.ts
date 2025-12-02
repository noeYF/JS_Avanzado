// Definimos todos los métodos que pueden interactuar con los datos de clientes
import { API_BASE_URL } from "./api/config";
import { ApiDatos } from "./api/apiDatos";
import type { Cliente } from "../models/types";

export const URL = `${API_BASE_URL}/clientes`;

export const clientesServices = {
  getAll: () => ApiDatos.get<Cliente[]>(URL),
  getOne: (id: string) => ApiDatos.get<Cliente>(`${URL}/${id}`),
  create: (cliente: Cliente) => ApiDatos.post<Cliente, Cliente>(URL, cliente),
  delete: (id: string) => ApiDatos.delete(`${URL}/${id}`),
  patch: (id: string, data: Partial<Cliente>) =>
    ApiDatos.patch<Cliente, Partial<Cliente>>(`${URL}/${id}`, data),
};
