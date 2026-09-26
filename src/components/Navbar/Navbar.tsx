import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu as MenuIcon, X, Phone } from "lucide-react";
import CrownMark from "../shared/CrownMark";
import { PHONE_PRIMARY, telHref } from "../../lib/whatsapp";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-charcoal/85 backdrop-blur-md border-b border-gold/15 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.8)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className={`container-max section-x flex items-center justify-between transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <a href="#home" className="flex items-center gap-2.5 group">
          <CrownMark className="h-7 w-7 text-gold-light transition-transform group-hover:-translate-y-0.5" />
          <span className="font-display leading-none">
            <span className="block text-[0.65rem] tracking-[0.35em] text-ink-muted">
              THE
            </span>
            <span className="block text-xl font-semibold text-ink -mt-0.5">
              Pizza Crown
            </span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-9 font-medium text-sm text-ink-muted">
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="relative">
              <a
                href={link.href}
                className="relative py-1 transition-colors hover:text-ink after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-gold-light after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={telHref(PHONE_PRIMARY)}
            className="flex items-center gap-1.5 text-sm text-ink-muted hover:text-ink transition-colors"
          >
            <Phone size={15} strokeWidth={2} />
            {PHONE_PRIMARY}
          </a>
          <a
            href="#menu"
            className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-charcoal transition-all hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-gold"
          >
            Order Now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/25 text-ink"
        >
          {open ? <X size={20} /> : <MenuIcon size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-charcoal/97 backdrop-blur-md border-b border-gold/15"
          >
            <ul className="section-x py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-base font-medium text-ink border-b border-white/5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <a
                  href="#menu"
                  onClick={() => setOpen(false)}
                  className="block text-center rounded-full bg-gold px-5 py-3 text-sm font-semibold text-charcoal"
                >
                  Order Now
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
