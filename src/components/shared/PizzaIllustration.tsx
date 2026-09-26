import type { MenuItem } from "../../types/menu";

type Tone = MenuItem["tone"];

type PizzaIllustrationProps = {
  tone?: Tone;
  className?: string;
};

const toneAccents: Record<Tone, { a: string; b: string; c: string }> = {
  onion: { a: "#EADDD1", b: "#C9A0DC", c: "#8E6BAF" },
  tomato: { a: "#E4574A", b: "#B83232", c: "#7E2020" },
  corn: { a: "#F4CE5E", b: "#E4A72E", c: "#B9832A" },
  paneer: { a: "#FFF3D6", b: "#F0C76A", c: "#D6A24A" },
  olive: { a: "#4C5B3A", b: "#6B7A4C", c: "#2E3620" },
  classic: { a: "#F0C76A", b: "#D6A24A", c: "#B98935" },
};

/**
 * A stylised top-down pizza rendered entirely in SVG, so it never depends on
 * external imagery. The tone prop tints the topping flecks to hint at the
 * dish's dominant ingredient without illustrating literal toppings.
 */
export default function PizzaIllustration({
  tone = "classic",
  className = "",
}: PizzaIllustrationProps) {
  const { a, b, c } = toneAccents[tone];
  const flecks = [
    [24, 34, 3.4],
    [70, 28, 2.6],
    [46, 62, 3],
    [88, 58, 2.4],
    [58, 40, 2.2],
    [34, 78, 2.6],
    [76, 84, 2.2],
    [104, 40, 2.6],
    [96, 90, 2],
    [16, 62, 2.2],
  ] as const;

  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      role="img"
      aria-label="Illustration of a freshly baked vegetarian pizza"
    >
      <circle cx="60" cy="60" r="58" fill="#2A1F1A" stroke="#3A2C24" strokeWidth="1" />
      <circle cx="60" cy="60" r="50" fill={c} opacity="0.18" />
      <circle cx="60" cy="60" r="44" fill="#E7B96A" />
      <circle cx="60" cy="60" r="38" fill="#F3D48B" />
      <circle cx="60" cy="60" r="34" fill="#F6E2A8" opacity="0.9" />
      {flecks.map(([cx, cy, r], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r={r}
          fill={i % 2 === 0 ? a : b}
          opacity={0.9}
        />
      ))}
      <circle cx="60" cy="60" r="44" fill="none" stroke="#D6A24A" strokeWidth="1.5" opacity="0.5" />
    </svg>
  );
}
