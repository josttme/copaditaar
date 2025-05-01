// src/utils/formatters.ts
/**
 * Formatea el precio en formato de moneda
 */
export function formatPrice(price: number): string {
  return price.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  });
}

/**
 * Formatea la fecha a un formato legible
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("es-AR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
