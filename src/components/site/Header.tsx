import { business, whatsappLink } from "@/config/business";
import { track } from "@/lib/analytics";
import { WhatsAppIcon } from "./icons";

const links = [
  { label: "Services", href: "/#services" },
  { label: "Our Work", href: "/#our-work" },
  { label: "Areas", href: "/#areas" },
  { label: "FAQ", href: "/#faq" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <a href="/" className="flex flex-col leading-none">
          <span className="font-display text-lg font-extrabold text-primary">
            {business.name}
          </span>
          <span className="text-[11px] font-medium text-muted-foreground">
            {business.tagline}
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("whatsapp_click", { location: "header" })}
          className="inline-flex h-11 items-center gap-2 rounded-xl bg-whatsapp px-4 text-sm font-bold text-whatsapp-foreground shadow-cta transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105"
        >
          <WhatsAppIcon className="h-5 w-5 text-white" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </div>
    </header>
  );
}
