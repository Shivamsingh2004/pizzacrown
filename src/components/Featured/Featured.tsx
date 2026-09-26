import { motion } from "framer-motion";
import { featuredItemIds, menuItems } from "../../data/menu";
import MenuCard from "../MenuCard/MenuCard";

export default function Featured() {
  const featured = featuredItemIds
    .map((id) => menuItems.find((item) => item.id === id))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <section className="py-24 md:py-32 bg-surface/30 border-y border-white/5">
      <div className="container-max section-x">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="font-display text-sm tracking-[0.4em] text-gold-light">
            CUSTOMER FAVOURITES
          </p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-ink text-balance">
            The Pizzas Everyone Orders Twice
          </h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((item) => (
            <MenuCard key={item.id} item={item} featured />
          ))}
        </div>
      </div>
    </section>
  );
}
