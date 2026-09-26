import { Phone, MessageCircle, UtensilsCrossed } from "lucide-react";
import { PHONE_PRIMARY, buildWhatsAppGeneralUrl, telHref } from "../../lib/whatsapp";

export default function MobileActionBar() {
  return (
    <nav
      aria-label="Quick actions"
      className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-gold/15 bg-charcoal/95 backdrop-blur-md pb-[env(safe-area-inset-bottom)]"
    >
      <div className="grid grid-cols-3">
        <a
          href={telHref(PHONE_PRIMARY)}
          className="flex flex-col items-center justify-center gap-1 py-3 text-ink active:bg-white/5"
        >
          <Phone size={20} />
          <span className="text-[0.65rem] font-semibold tracking-wide">CALL</span>
        </a>
        <a
          href={buildWhatsAppGeneralUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-3 text-ink border-x border-gold/10 bg-crimson/90 active:bg-crimson"
        >
          <MessageCircle size={20} />
          <span className="text-[0.65rem] font-semibold tracking-wide">
            WHATSAPP
          </span>
        </a>
        <a
          href="#menu"
          className="flex flex-col items-center justify-center gap-1 py-3 text-ink active:bg-white/5"
        >
          <UtensilsCrossed size={20} />
          <span className="text-[0.65rem] font-semibold tracking-wide">MENU</span>
        </a>
      </div>
    </nav>
  );
}
