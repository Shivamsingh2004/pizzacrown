import { motion } from "framer-motion";
import { Leaf } from "lucide-react";
import PizzaIllustration from "../shared/PizzaIllustration";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 md:py-32 bg-surface/30 border-y border-white/5">
      <div className="container-max section-x grid gap-12 lg:grid-cols-[0.9fr,1.1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto w-full max-w-sm order-2 lg:order-1"
        >
          <div className="absolute inset-0 rounded-full bg-crimson/10 blur-3xl" />
          <div className="relative rounded-full border border-gold/20 p-4 bg-charcoal/60">
            <PizzaIllustration tone="tomato" className="w-full aspect-square" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="order-1 lg:order-2 max-w-xl"
        >
          <p className="font-display text-sm tracking-[0.4em] text-gold-light">
            OUR STORY
          </p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-ink text-balance">
            Made With Love, Served With Pride
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-muted">
            At The Pizza Crown, every pizza is prepared with a simple idea —
            great food should feel fresh, generous and satisfying. From
            classic favourites to loaded vegetarian combinations, we bring
            together fresh ingredients, comforting flavours and freshly baked
            goodness.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm font-medium text-ink">
            <Leaf size={16} className="text-green-500" />
            100% Pure Vegetarian Kitchen
          </div>
        </motion.div>
      </div>
    </section>
  );
}
