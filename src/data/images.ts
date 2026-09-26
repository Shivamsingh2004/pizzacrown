import type { MenuItem } from "../types/menu";

type Tone = MenuItem["tone"];

/**
 * Real, unbranded food photography — sourced under the Unsplash License
 * (free for commercial use, no attribution required). Every photo shows a
 * genuinely vegetarian pizza (cheese, basil, tomato, vegetables) to match
 * The Pizza Crown's 100% pure veg menu. No competitor branding of any kind
 * (e.g. Domino's, Pizza Hut) is used anywhere in this project — those are
 * another brand's copyrighted, trademarked photography and can't be placed
 * on this site.
 */
export const pizzaPhotos: Record<Tone, string> = {
  tomato:
    "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&w=800&q=80",
  onion:
    "https://images.unsplash.com/photo-1718801594023-cb79bdcf8824?auto=format&fit=crop&w=800&q=80",
  corn: "https://images.unsplash.com/photo-1718801594023-cb79bdcf8824?auto=format&fit=crop&w=800&q=80",
  paneer:
    "https://images.unsplash.com/photo-1762631176795-d500f0472051?auto=format&fit=crop&w=800&q=80",
  olive:
    "https://images.unsplash.com/photo-1762631176795-d500f0472051?auto=format&fit=crop&w=800&q=80",
  classic:
    "https://images.unsplash.com/photo-1595026506669-1e937fc6b9e6?auto=format&fit=crop&w=800&q=80",
};

export const heroPizzaPhoto =
  "https://images.unsplash.com/photo-1595026506669-1e937fc6b9e6?auto=format&fit=crop&w=1200&q=80";
