//Definimos todos los metodos que pueden interactuar con los datos
import { API_BASE_URL } from "./api/config";
import { ApiDatos } from "./api/apiDatos";
import type { Usuario } from "../models/types";

export const URL = `${API_BASE_URL}/usuarios`;

export const usuariosService = {
  getAll: () => ApiDatos.get<Usuario[]>(URL),
  getOne: (id: string) => ApiDatos.get<Usuario>(`${URL}/${id}`),
  create: (usuario: Usuario) => ApiDatos.post<Usuario, Usuario>(URL, usuario),
  delete: (id: string) => ApiDatos.delete(`${URL}/${id}`),
  patch: (id: string, data: Partial<Usuario>) =>
    ApiDatos.patch<Usuario, Partial<Usuario>>(`${URL}/${id}`, data),
};
