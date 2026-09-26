import { useState } from "react";
import { motion } from "framer-motion";
import { Leaf, Flame, MessageCircle } from "lucide-react";
import type { MenuItem } from "../../types/menu";
import PizzaIllustration from "../shared/PizzaIllustration";
import { buildWhatsAppOrderUrl } from "../../lib/whatsapp";

type MenuCardProps = {
  item: MenuItem;
  featured?: boolean;
};

export default function MenuCard({ item, featured = false }: MenuCardProps) {
  const [sizeIndex, setSizeIndex] = useState(
    Math.min(1, item.sizes.length - 1)
  );
  const selected = item.sizes[sizeIndex];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-gold/15 bg-surface/60 shadow-card transition-all hover:border-gold/40 hover:-translate-y-1 ${
        featured ? "ring-1 ring-gold/20" : ""
      }`}
    >
      {item.popular && (
        <span className="absolute left-4 top-4 z-10 rounded-full bg-crimson px-3 py-1 text-[0.65rem] font-bold tracking-wide text-ink">
          Popular
        </span>
      )}

      <div className="relative aspect-[4/3] overflow-hidden bg-charcoal">
        <div className="absolute inset-0 flex items-center justify-center p-6 transition-transform duration-500 group-hover:scale-110">
          <PizzaIllustration tone={item.tone} className="h-full w-full" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-surface to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-semibold text-ink">
            {item.name}
          </h3>
          <div className="flex shrink-0 items-center gap-1.5 pt-1">
            {item.vegetarian && (
              <span
                title="Pure Vegetarian"
                className="flex h-5 w-5 items-center justify-center rounded-sm border border-green-500"
              >
                <Leaf size={11} className="text-green-500" />
              </span>
            )}
            {item.spicy && (
              <span title="Spicy">
                <Flame size={16} className="text-crimson" />
              </span>
            )}
          </div>
        </div>

        <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
          {item.description}
        </p>

        {item.ingredients.length > 0 && (
          <p className="mt-2 text-xs uppercase tracking-wide text-gold-light/80">
            {item.ingredients.join(" • ")}
          </p>
        )}

        <div className="mt-4 flex items-center gap-2" role="group" aria-label="Select size">
          {item.sizes.map((size, i) => (
            <button
              key={size.label}
              type="button"
              onClick={() => setSizeIndex(i)}
              aria-pressed={i === sizeIndex}
              className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all ${
                i === sizeIndex
                  ? "border-gold bg-gold text-charcoal"
                  : "border-white/15 text-ink-muted hover:border-gold/40 hover:text-ink"
              }`}
            >
              {size.label}
            </button>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between pt-4 border-t border-white/10">
          <motion.span
            key={selected.price}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-2xl font-semibold text-gold-light"
          >
            ₹{selected.price}
          </motion.span>
          <a
            href={buildWhatsAppOrderUrl(item.name, selected.label, selected.price)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-crimson px-4 py-2.5 text-xs font-semibold text-ink transition-all hover:bg-crimson-deep hover:-translate-y-0.5"
          >
            <MessageCircle size={14} />
            Order
          </a>
        </div>
      </div>
    </motion.article>
  );
}
