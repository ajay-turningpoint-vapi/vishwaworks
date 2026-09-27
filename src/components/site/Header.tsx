import { business, whatsappLink } from "@/config/business";
import { track } from "@/lib/analytics";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "./icons";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/95 backdrop-blur shadow-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4">
        <a href="/" className="flex flex-col leading-none">
          <span className="font-display text-lg sm:text-xl font-extrabold text-primary tracking-tight">
            {business.name}
          </span>
          <span className="text-[11px] font-semibold text-emerald-600">
            ⚡ Same-Day Mumbai Service
          </span>
        </a>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={business.phoneHref}
            onClick={() => track("call_click", { location: "header" })}
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-primary hover:bg-secondary/20 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-primary" />
            <span>{business.phone}</span>
          </a>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("whatsapp_click", { location: "header" })}
            className="inline-flex h-10 sm:h-11 items-center gap-1.5 sm:gap-2 rounded-xl bg-whatsapp px-3 sm:px-5 text-xs sm:text-sm font-black text-white shadow-[var(--shadow-cta)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105 shrink-0"
          >
            <WhatsAppIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white fill-current shrink-0" />
            <span className="font-display uppercase tracking-wide">
              <span className="sm:hidden">FREE DIAGNOSIS ➔</span>
              <span className="hidden sm:inline">FREE 15-MIN DIAGNOSIS ➔</span>
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}

