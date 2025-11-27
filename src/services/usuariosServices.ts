//Definimos todos los metodos que pueden interactuar con los datos 
import { API_BASE_URL } from "./api/config";
import { ApiDatos } from "./api/apiDatos";
import type { Usuario } from "../models/types";

export const URL_usuarioS = `${API_BASE_URL}/usuarios`;

export const usuariosService = {
  getAll: () => ApiDatos.get<Usuario[]>(URL_usuarioS),
  getOne: (id: string) => ApiDatos.get<Usuario>(`${URL_usuarioS}/${id}`),
  create: (usuario: Usuario) => ApiDatos.post<Usuario, Usuario>(URL_usuarioS, usuario),
  delete: (id: string) => ApiDatos.delete(`${URL_usuarioS}/${id}`),
};
