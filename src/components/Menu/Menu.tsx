import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { menuCategories, menuItems } from "../../data/menu";
import MenuCard from "../MenuCard/MenuCard";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);

  const filteredItems = useMemo(
    () => menuItems.filter((item) => item.category === activeCategory),
    [activeCategory]
  );

  return (
    <section id="menu" className="py-24 md:py-32">
      <div className="container-max section-x">
        <div className="max-w-2xl">
          <p className="font-display text-sm tracking-[0.4em] text-gold-light">
            OUR MENU
          </p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-ink text-balance">
            Crafted Pizzas, Priced Right
          </h2>
          <p className="mt-4 text-ink-muted leading-relaxed">
            Every pizza is 100% pure vegetarian, made fresh to order with
            generous toppings. Pick a category, choose your size, and order
            straight to WhatsApp.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Menu categories"
          className="mt-10 -mx-5 px-5 sm:mx-0 sm:px-0 flex gap-2.5 overflow-x-auto pb-3 sm:flex-wrap sm:overflow-visible [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {menuCategories.map((category) => {
            const active = category.id === activeCategory;
            return (
              <button
                key={category.id}
                role="tab"
                aria-selected={active}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all whitespace-nowrap ${
                  active
                    ? "border-gold bg-gold text-charcoal shadow-gold"
                    : "border-white/15 text-ink-muted hover:border-gold/40 hover:text-ink"
                }`}
              >
                {category.shortLabel}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
