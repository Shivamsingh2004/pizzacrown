import type { MenuItem } from "../../types/menu";
import { pizzaPhotos } from "../../data/images";

type Tone = MenuItem["tone"];

type PizzaIllustrationProps = {
  tone?: Tone;
  className?: string;
};

const toneAlt: Record<Tone, string> = {
  onion: "Freshly baked vegetarian pizza topped with onion and melted cheese",
  tomato: "Freshly baked vegetarian pizza topped with tomato, cheese and basil",
  corn: "Freshly baked vegetarian pizza topped with sweet corn and vegetables",
  paneer: "Freshly baked vegetarian pizza topped with paneer and melted cheese",
  olive: "Freshly baked vegetarian pizza topped with olives and herbs",
  classic: "Freshly baked classic vegetarian cheese pizza",
};

/**
 * Real, unbranded food photography of vegetarian pizzas (see src/data/images.ts
 * for sourcing/licensing notes), framed as a circular badge so it drops into
 * the same circular frames used across the hero, menu cards and about section.
 */
export default function PizzaIllustration({
  tone = "classic",
  className = "",
}: PizzaIllustrationProps) {
  return (
    <img
      src={pizzaPhotos[tone]}
      alt={toneAlt[tone]}
      loading="lazy"
      className={`${className} rounded-full object-cover`}
    />
  );
}
