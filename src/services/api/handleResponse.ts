//hacemos esto para siempre tener lo que son datos json sino nos da el codigo de error

export const handleResponse = async <T>(response: Response): Promise<T> => {
  const json = await response.json().catch(() => {
    throw new Error("No se pudo parsear la respuesta como JSON");
  });

  if (!response.ok) {
    const msg =
      json?.message ||
      json?.error ||
      `HTTP error! status: ${response.status}`;
    throw new Error(msg);
  }

  return json as T;
};