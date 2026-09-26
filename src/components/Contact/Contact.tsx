import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import {
  PHONE_PRIMARY,
  PHONE_SECONDARY,
  buildWhatsAppGeneralUrl,
  telHref,
} from "../../lib/whatsapp";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-24 md:py-32 bg-surface/40 border-y border-white/5">
      <div className="container-max section-x">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink text-balance">
            Craving Pizza?
          </h2>
          <p className="mt-4 text-ink-muted text-lg">
            Call us and place your order.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={telHref(PHONE_PRIMARY)}
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-charcoal transition-all hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-gold"
            >
              <Phone size={16} />
              Call Now
            </a>
            <a
              href={buildWhatsAppGeneralUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-crimson px-7 py-3.5 text-sm font-semibold text-ink transition-all hover:bg-crimson-deep hover:-translate-y-0.5"
            >
              <MessageCircle size={16} />
              Order on WhatsApp
            </a>
          </div>

          <p className="mt-6 text-sm text-ink-muted">
            {PHONE_PRIMARY} &nbsp;·&nbsp; {PHONE_SECONDARY}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
