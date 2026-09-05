import type { ReactNode } from "react";
import { business, whatsappLink, whatsappMessages } from "@/config/business";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const base =
  "inline-flex min-h-[54px] items-center justify-center gap-2 rounded-xl px-6 text-base font-bold tracking-tight transition-transform active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring";

export function WhatsAppButton({
  location,
  children = "📸 SEND PHOTO → GET HELP",
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
          ? "bg-whatsapp text-whatsapp-foreground shadow-cta hover:brightness-105"
          : "border-2 border-whatsapp text-whatsapp hover:bg-whatsapp/10",
        className,
      )}
    >
      {children}
    </a>
  );
}

export function CallButton({
  location,
  children = "CALL NOW",
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
      ☎ {children}
    </a>
  );
}
