import { motion } from "framer-motion";
import { Leaf, Sparkles, Flame, HeartHandshake } from "lucide-react";

const BADGES = [
  { icon: Leaf, label: "100% Pure Veg" },
  { icon: Sparkles, label: "Freshly Prepared" },
  { icon: Flame, label: "Hot & Fresh" },
  { icon: HeartHandshake, label: "Made With Love" },
];

export default function TrustBadges() {
  return (
    <section className="border-y border-white/5 bg-surface/40">
      <div className="container-max section-x py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {BADGES.map(({ icon: Icon, label }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex items-center gap-3"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/25 bg-charcoal text-gold-light">
              <Icon size={19} strokeWidth={1.8} />
            </span>
            <span className="text-sm font-medium text-ink-muted">{label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
