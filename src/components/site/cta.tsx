import type { ReactNode } from "react";
import { Phone } from "lucide-react";
import { business, whatsappLink, whatsappMessages } from "@/config/business";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "./icons";

const base =
  "flex w-full min-h-[50px] sm:min-h-[56px] items-center justify-center gap-2 sm:gap-2.5 rounded-2xl px-3.5 py-2.5 sm:px-6 sm:py-3.5 text-center transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring select-none";

export function WhatsAppButton({
  location,
  children = (
    <span className="flex flex-col items-center leading-tight">
      <span className="text-sm sm:text-[16px] md:text-[17px] font-black tracking-tight uppercase text-white font-display">
        GET MY FREE 15-MIN DIAGNOSIS ➔
      </span>
      <span className="text-[11px] sm:text-xs font-semibold text-white/90 mt-0.5">
        Send Photo/Video • 100% Free • No Fix, No Fee
      </span>
    </span>
  ),
  message = whatsappMessages.default,
  className,
  variant = "solid",
}: {
  location: string;
  children?: ReactNode;
  message?: string;
  className?: string;
  variant?: "solid" | "outline";
}) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("whatsapp_click", { location })}
      className={cn(
        base,
        variant === "solid"
          ? "bg-whatsapp text-white shadow-[var(--shadow-cta)] hover:brightness-105"
          : "border-2 border-whatsapp text-whatsapp hover:bg-whatsapp/10",
        className,
      )}
    >
      <span className="flex items-center shrink-0" aria-hidden="true">
        <WhatsAppIcon className="h-5 w-5 sm:h-6 sm:w-6 text-white shrink-0 fill-current" />
      </span>
      {children}
    </a>
  );
}

export function CallButton({
  location,
  children = (
    <span className="text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-wide">
      📞 CALL: {business.phone}
    </span>
  ),
  className,
  variant = "outline",
}: {
  location: string;
  children?: ReactNode;
  className?: string;
  variant?: "outline" | "solid";
}) {
  return (
    <a
      href={business.phoneHref}
      onClick={() => track("call_click", { location })}
      className={cn(
        base,
        variant === "solid"
          ? "bg-accent text-accent-foreground shadow-cta"
          : "border-2 border-foreground/20 bg-card text-foreground hover:border-foreground/40",
        className,
      )}
    >
      <Phone aria-hidden="true" className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" strokeWidth={2.25} />
      {children}
    </a>
  );
}


