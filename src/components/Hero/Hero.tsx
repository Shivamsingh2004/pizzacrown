import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import PizzaIllustration from "../shared/PizzaIllustration";
import { PHONE_PRIMARY, telHref } from "../../lib/whatsapp";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32 bg-radial-fade"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-crimson/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      </div>

      <div className="container-max section-x relative grid gap-16 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-xl"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-crimson/40 bg-crimson/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-ink"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-crimson" />
            Pizza Starting @ ₹69
          </motion.div>

          <motion.p
            variants={item}
            className="mt-6 font-display text-sm tracking-[0.4em] text-gold-light"
          >
            100% PURE VEG PIZZERIA · MAMURA, NOIDA
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-3 font-display text-5xl sm:text-6xl md:text-7xl font-semibold leading-[0.98] text-ink text-balance"
          >
            The Pizza Crown
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 font-display italic text-2xl md:text-3xl text-gold-light"
          >
            Taste Above All
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 text-base md:text-lg leading-relaxed text-ink-muted max-w-md"
          >
            Freshly baked, 100% pure vegetarian pizzas crafted with delicious
            toppings, generous cheese and a whole lot of love.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#menu"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-charcoal transition-all hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-gold"
            >
              Explore Menu
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href={telHref(PHONE_PRIMARY)}
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-7 py-3.5 text-sm font-semibold text-ink transition-all hover:border-gold/50 hover:-translate-y-0.5"
            >
              <Phone size={16} />
              Call to Order
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute inset-0 rounded-full bg-gold/10 blur-3xl" />
          <motion.div
            animate={{ rotate: [0, 2, 0, -2, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="relative rounded-full border border-gold/20 p-3 shadow-card bg-surface/60"
          >
            <PizzaIllustration tone="classic" className="w-full aspect-square" />
          </motion.div>

          <motion.div
            className="absolute -top-4 -left-6 h-12 w-12 rounded-full bg-crimson/90 shadow-card flex items-center justify-center text-[0.6rem] font-bold text-ink text-center leading-tight animate-float"
            aria-hidden="true"
          >
            HOT
          </motion.div>
          <motion.div
            className="absolute top-8 -right-6 h-14 w-14 rounded-full bg-gold shadow-gold flex items-center justify-center text-[0.6rem] font-bold text-charcoal text-center leading-tight animate-floatSlow"
            aria-hidden="true"
          >
            FRESH
          </motion.div>
          <motion.div
            className="absolute -bottom-3 left-8 rounded-full bg-charcoal-light border border-gold/30 px-3 py-1.5 text-[0.62rem] font-semibold tracking-wide text-gold-light animate-float"
            aria-hidden="true"
          >
            MADE WITH LOVE
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
