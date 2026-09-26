import { motion } from "framer-motion";
import { Leaf, Salad, Flame, ChefHat } from "lucide-react";

const REASONS = [
  {
    icon: Leaf,
    title: "100% Pure Veg",
    copy: "Every single pizza on our menu is entirely vegetarian, with no exceptions.",
  },
  {
    icon: Salad,
    title: "Fresh Ingredients",
    copy: "Onions, capsicum, corn and paneer prepped fresh for every order.",
  },
  {
    icon: Flame,
    title: "Loaded With Flavour",
    copy: "Generous toppings and melted cheese on every base, every time.",
  },
  {
    icon: ChefHat,
    title: "Made Fresh To Order",
    copy: "Your pizza goes into the oven only after you order — never sitting around.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about-highlights" className="py-24 md:py-32">
      <div className="container-max section-x">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="font-display text-sm tracking-[0.4em] text-gold-light">
            WHY CHOOSE US
          </p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-ink text-balance">
            Why Pizza Lovers Choose The Crown
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REASONS.map(({ icon: Icon, title, copy }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-white/10 bg-surface/50 p-6 transition-colors hover:border-gold/30"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-charcoal border border-gold/25 text-gold-light">
                <Icon size={20} strokeWidth={1.8} />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {copy}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
