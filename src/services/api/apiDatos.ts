import { handleResponse } from "./handleResponse";

/*
 *definimos todos estas clases para poder centralisar todas las peticiones que vamos hacer
 *asi no repetimos codigo
 */
export class ApiDatos {
  static async get<T>(url: string): Promise<T> {
    const response = await fetch(url);
    return handleResponse<T>(response);
  }

  static async post<T, B>(url: string, body: B): Promise<T> {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    return handleResponse<T>(response);
  }

  static async delete(url: string): Promise<void> {
    const response = await fetch(url, {
      method: "DELETE",
    });
    await handleResponse(response);
  }
  static async patch<T, B>(url: string, body: B): Promise<T> {
    const response = await fetch(url, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    return handleResponse<T>(response);
  }
}
