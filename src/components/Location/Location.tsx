import { motion } from "framer-motion";
import { MapPin, Navigation, Phone } from "lucide-react";
import {
  PHONE_PRIMARY,
  PHONE_SECONDARY,
  RESTAURANT_ADDRESS,
  buildMapsUrl,
  telHref,
} from "../../lib/whatsapp";

export default function Location() {
  return (
    <section id="location" className="py-24 md:py-32">
      <div className="container-max section-x grid gap-12 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-display text-sm tracking-[0.4em] text-gold-light">
            VISIT US
          </p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-ink text-balance">
            Find The Pizza Crown
          </h2>

          <div className="mt-8 flex items-start gap-3">
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/25 bg-surface text-gold-light">
              <MapPin size={18} />
            </span>
            <address className="not-italic text-ink-muted leading-relaxed">
              Shop No. 7, Gali No. 2, Sharmik Kunj, Sector 66,
              <br />
              Opp. Apna Chauhan Dhaba, Near Evergreen Sweets,
              <br />
              Mamura, Noida
            </address>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={buildMapsUrl(RESTAURANT_ADDRESS)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-charcoal transition-all hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-gold"
            >
              <Navigation size={16} />
              Get Directions
            </a>
            <a
              href={telHref(PHONE_PRIMARY)}
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold text-ink transition-all hover:border-gold/50 hover:-translate-y-0.5"
            >
              <Phone size={16} />
              {PHONE_PRIMARY}
            </a>
            <a
              href={telHref(PHONE_SECONDARY)}
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold text-ink transition-all hover:border-gold/50 hover:-translate-y-0.5"
            >
              <Phone size={16} />
              {PHONE_SECONDARY}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl border border-gold/15 bg-surface/60 shadow-card"
        >
          <div className="aspect-[4/3] relative flex flex-col items-center justify-center gap-3 p-8 text-center">
            <div className="absolute inset-0 bg-radial-fade" />
            <MapPin size={40} className="relative text-gold-light" strokeWidth={1.5} />
            <p className="relative font-display text-lg text-ink">
              Mamura, Sector 66, Noida
            </p>
            <p className="relative text-sm text-ink-muted max-w-xs">
              Tap "Get Directions" to open this address in Google Maps.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
