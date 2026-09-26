type CrownMarkProps = {
  className?: string;
};

/**
 * A restrained, geometric crown mark used across the navbar, hero and footer.
 * Built entirely in SVG so it scales cleanly and works as a favicon treatment.
 */
export default function CrownMark({ className = "" }: CrownMarkProps) {
  return (
    <svg
      viewBox="0 0 48 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 16L12 22L24 6L36 22L44 16L40 34H8L4 16Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="4" cy="13" r="2.6" fill="currentColor" />
      <circle cx="24" cy="4" r="2.6" fill="currentColor" />
      <circle cx="44" cy="13" r="2.6" fill="currentColor" />
      <line x1="10" y1="34" x2="38" y2="34" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
