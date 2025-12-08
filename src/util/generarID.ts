export const generarID = <T extends { id?: string }>(
  prefix: string,
  items: T[]
): string => {
  if (!items || items.length === 0) return `${prefix}-0000`;

  const numeros = items
    .map((item) => {
      if (!item?.id) return -1; // ignorar undefined o id faltante
      const parts = item.id.split("-");
      if (parts[0] === prefix && !isNaN(Number(parts[1]))) {
        return Number(parts[1]);
      }
      return -1;
    })
    .filter((n) => n >= 0);

  const max = numeros.length ? Math.max(...numeros) : -1;
  const nuevoNumero = (max + 1).toString().padStart(4, "0");

  return `${prefix}-${nuevoNumero}`;
};
