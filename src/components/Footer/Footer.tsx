import { MessageCircle, Phone } from "lucide-react";
import CrownMark from "../shared/CrownMark";
import {
  PHONE_PRIMARY,
  PHONE_SECONDARY,
  RESTAURANT_ADDRESS,
  buildWhatsAppGeneralUrl,
  telHref,
} from "../../lib/whatsapp";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-white/5 pb-28 md:pb-0">
      <div className="container-max section-x py-16 grid gap-10 md:grid-cols-[1.2fr,1fr,1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <CrownMark className="h-7 w-7 text-gold-light" />
            <span className="font-display leading-none">
              <span className="block text-[0.6rem] tracking-[0.35em] text-ink-muted">
                THE
              </span>
              <span className="block text-lg font-semibold text-ink -mt-0.5">
                Pizza Crown
              </span>
            </span>
          </div>
          <p className="mt-3 font-display italic text-gold-light">
            Taste Above All
          </p>
          <p className="mt-4 text-sm text-ink-muted leading-relaxed max-w-xs">
            100% Pure Vegetarian Pizza Restaurant.
          </p>
          <address className="mt-4 not-italic text-sm text-ink-muted leading-relaxed max-w-xs">
            {RESTAURANT_ADDRESS}
          </address>
        </div>

        <div>
          <h3 className="font-display text-lg text-ink">Quick Links</h3>
          <ul className="mt-4 space-y-2.5">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-ink-muted hover:text-gold-light transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-ink">Order</h3>
          <ul className="mt-4 space-y-2.5">
            <li>
              <a
                href={telHref(PHONE_PRIMARY)}
                className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-gold-light transition-colors"
              >
                <Phone size={14} />
                {PHONE_PRIMARY}
              </a>
            </li>
            <li>
              <a
                href={telHref(PHONE_SECONDARY)}
                className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-gold-light transition-colors"
              >
                <Phone size={14} />
                {PHONE_SECONDARY}
              </a>
            </li>
            <li>
              <a
                href={buildWhatsAppGeneralUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-gold-light transition-colors"
              >
                <MessageCircle size={14} />
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-max section-x py-6 text-center text-xs text-ink-muted">
          © 2026 The Pizza Crown. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
