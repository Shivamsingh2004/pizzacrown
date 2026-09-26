const WHATSAPP_NUMBER = "917217843839";

export function buildOrderMessage(
  itemName: string,
  sizeLabel: string,
  price: number
): string {
  return `Hello The Pizza Crown, I would like to order:\n${itemName} - ${sizeLabel} - ₹${price}`;
}

export function buildWhatsAppOrderUrl(
  itemName: string,
  sizeLabel: string,
  price: number
): string {
  const message = buildOrderMessage(itemName, sizeLabel, price);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildWhatsAppGeneralUrl(): string {
  const message = "Hello The Pizza Crown, I would like to place an order.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const PHONE_PRIMARY = "7217843839";
export const PHONE_SECONDARY = "9953623166";

export function telHref(number: string): string {
  return `tel:${number}`;
}

export function buildMapsUrl(address: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;
}

export const RESTAURANT_ADDRESS =
  "Shop No. 7, Gali No. 2, Sharmik Kunj, Sector 66, Opp. Apna Chauhan Dhaba, Near Evergreen Sweets, Mamura, Noida";
