import heroImg from "@/assets/hero-window-repair.jpg";
import { business } from "@/config/business";
import { CallButton, WhatsAppButton } from "./cta";

export function Hero() {
  return (
    <section id="top" className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 md:grid-cols-2 md:gap-12 md:py-16">
        <div>
          <p className="mb-4 inline-block rounded-full bg-primary-foreground/10 px-3 py-1 text-xs font-semibold tracking-wide">
            {business.areaLine}
          </p>
          <h1 className="text-[2.1rem] font-extrabold leading-[1.05] sm:text-5xl">
            WINDOW STUCK?
            <br />
            <span className="text-accent">DON'T REPLACE IT YET.</span>
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
            Send us a photo of the problem on WhatsApp. You don't need to know
            what's broken. We'll help you understand the problem and the next
            step.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton location="hero" className="w-full sm:w-auto" />
            <CallButton
              location="hero"
              className="w-full border-primary-foreground/30 bg-transparent text-primary-foreground hover:border-primary-foreground/60 sm:w-auto"
            />
          </div>

          <p className="mt-4 text-sm text-primary-foreground/70">
            No technical knowledge needed. Just show us the problem.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-primary-foreground/10 shadow-2xl">
          <img
            src={heroImg}
            width={1280}
            height={1280}
            alt="Technician repairing a sliding aluminium window in a Mumbai apartment"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
