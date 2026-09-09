import type { ReactNode } from "react";
import { Camera, Phone } from "lucide-react";
import { business, whatsappLink, whatsappMessages } from "@/config/business";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "./icons";

const base =
  "inline-flex min-h-[54px] items-center justify-center gap-2 rounded-xl px-6 text-base font-bold tracking-tight transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring";

export function WhatsAppButton({
  location,
  children = "SEND PHOTO → GET HELP",
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
      <span className="flex items-center gap-1.5" aria-hidden="true">
        <Camera className="h-5 w-5 shrink-0" strokeWidth={2.25} />
        <WhatsAppIcon className="h-5 w-5 shrink-0" />
      </span>
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
      <Phone aria-hidden="true" className="h-5 w-5 shrink-0" strokeWidth={2.25} />
      {children}
    </a>
  );
}
