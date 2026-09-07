import { useState } from "react";
import { ImageUp, Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  business,
  faqs,
  problems,
  services,
  whatsappMessages,
  whatsappLink,
  problemOptions,
} from "@/config/business";
import { track } from "@/lib/analytics";
import { Button } from "@/components/ui/button";
import { CallButton, WhatsAppButton } from "./cta";
import { WhatsAppIcon } from "./icons";

function Heading({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-2xl font-extrabold uppercase leading-tight text-primary sm:text-4xl">
        {children}
      </h2>
      {sub ? (
        <p className="mt-3 text-base text-muted-foreground sm:text-lg">{sub}</p>
      ) : null}
    </div>
  );
}

/* ---------------- 6. PROBLEM / AGITATION ---------------- */

export function ProblemSelector() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
      <Heading>Is your window doing this?</Heading>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {problems.map((p) => (
          <a
            key={p.title}
            href={whatsappLink(
              `Hi, I have a window problem in Powai. Problem: ${p.title}. I am sending a photo of the problem. Please help me understand what may be wrong.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              track("problem_selected", { problem: p.title });
              track("whatsapp_click", { location: "problem_section" });
            }}
            className="group rounded-2xl border border-border bg-card p-4 text-left transition-shadow hover:shadow-lg sm:p-5"
          >
            <span
              aria-hidden
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-lg"
            >
              🪟
            </span>
            <h3 className="mt-3 text-sm font-bold text-primary sm:text-base">
              {p.title}
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              {p.desc}
            </p>
          </a>
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="text-lg font-semibold text-primary">
          Not sure what's wrong? That's okay. Just send us a photo.
        </p>
        <WhatsAppButton location="problem_section" className="mt-5">
          SHOW US THE PROBLEM
        </WhatsAppButton>
      </div>
    </section>
  );
}

/* ---------------- 7. REMOVE UNCERTAINTY ---------------- */

export function NoNeedToKnow() {
  return (
    <section className="bg-primary py-16 text-primary-foreground sm:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-3xl font-extrabold uppercase leading-[1.05] sm:text-5xl">
          You don't need to know
          <br />
          <span className="text-accent">what's broken.</span>
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            "Take a photo.",
            "Send it to us.",
            "We'll help you understand what may be wrong.",
          ].map((t) => (
            <p
              key={t}
              className="rounded-2xl bg-primary-foreground/10 px-4 py-5 text-base font-semibold"
            >
              {t}
            </p>
          ))}
        </div>
        <WhatsAppButton location="uncertainty" className="mt-8" />
      </div>
    </section>
  );
}

/* ---------------- 8. HOW IT WORKS ---------------- */

const steps = [
  { t: "Take a photo", d: "Take a clear photo or short video of the problem." },
  { t: "Send it on WhatsApp", d: "Send the photo to our team." },
  {
    t: "Understand the next step",
    d: "We'll review the problem and guide you on what to do next.",
  },
  {
    t: "Arrange the service",
    d: "If a visit or repair is required, arrange the next step with us.",
  },
];

export function HowItWorks() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
      <Heading>Get help without explaining the technical details.</Heading>

      <ol className="mt-10 grid gap-4 md:grid-cols-4">
        {steps.map((s, i) => (
          <li
            key={s.t}
            className="relative rounded-2xl border border-border bg-card p-5"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-base font-extrabold text-primary-foreground">
              {i + 1}
            </span>
            <h3 className="mt-3 text-base font-bold text-primary">{s.t}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
          </li>
        ))}
      </ol>

      <div className="mt-9 text-center">
        <WhatsAppButton location="how_it_works">SEND MY PHOTO</WhatsAppButton>
      </div>
    </section>
  );
}

/* ---------------- 9. SERVICES ---------------- */

export function Services() {
  return (
    <section id="services" className="bg-secondary/60 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <Heading>Whatever the window problem, start by showing us.</Heading>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-5"
            >
              <span aria-hidden className="text-2xl">
                🛠️
              </span>
              <h3 className="mt-3 text-base font-bold text-primary">{s.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
              <a
                href={whatsappLink(
                  `Hi, I need help with: ${s.name}. I am in Powai and I am sending a photo of the problem.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  track("service_clicked", { service: s.name });
                  track("whatsapp_click", { location: "services" });
                }}
                className="mt-4 inline-flex min-h-[46px] items-center justify-center rounded-xl bg-whatsapp px-4 text-sm font-bold text-whatsapp-foreground"
              >
                SHOW US
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 10. OFFER ---------------- */

export function Offer() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-14 sm:py-20">
      <div className="rounded-3xl border-2 border-accent/40 bg-card p-6 text-center sm:p-12">
        <h2 className="text-2xl font-extrabold uppercase leading-tight text-primary sm:text-4xl">
          Not sure if you need a repair or a replacement?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Don't guess. Before you spend money replacing a window, show us the
          problem. Send a photo on WhatsApp and we'll help you understand what
          may be causing the issue and what the next step could be.
        </p>
        <WhatsAppButton location="offer" className="mt-7" />
      </div>
    </section>
  );
}

/* ---------------- 11 + 12. PROOF ---------------- */

const galleryStages = ["Before", "During", "After"] as const;
const galleryItems = [
  "Broken roller",
  "Damaged track",
  "Broken handle",
  "Window repair",
  "Glass replacement",
  "Sliding door repair",
];

export function WorkGallery() {
  return (
    <section id="our-work" className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
      <Heading sub="Before, during and after — from real jobs.">
        This is what we actually do.
      </Heading>

      <div className="mt-10 space-y-8">
        {galleryItems.slice(0, 3).map((item) => (
          <div key={item}>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-primary">
              {item}
            </h3>
            <div className="grid gap-3 sm:grid-cols-3">
              {galleryStages.map((stage) => (
                <div
                  key={stage}
                  className="flex aspect-[4/3] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border bg-secondary/50 p-4 text-center"
                >
                  <span className="text-xs font-bold uppercase tracking-wide text-accent">
                    {stage}
                  </span>
                  <span className="mt-2 text-xs text-muted-foreground">
                    Add real customer repair photo here
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function WorkshopProof() {
  const shots = [
    "Aluminium profiles",
    "Tools",
    "Technician working",
    "Window frames",
    "Repair work",
    "Workshop",
  ];
  return (
    <section className="bg-secondary/60 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <Heading sub="See the people and workshop behind the service.">
          Real people. Real repairs.
        </Heading>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {shots.map((s) => (
            <div
              key={s}
              className="flex aspect-square flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border bg-card p-3 text-center"
            >
              <span className="text-xs font-bold text-primary">{s}</span>
              <span className="mt-1 text-[11px] text-muted-foreground">
                Add real business photo here
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 13. WHY CHOOSE US ---------------- */

const reasons = [
  { t: "Local to Powai", d: "Serving Powai and nearby areas." },
  {
    t: "Show us the problem",
    d: "You don't need to know the technical name.",
  },
  {
    t: "Repair-first approach",
    d: "If the problem can be repaired, you can discuss the repair before considering replacement.",
  },
  { t: "Real work", d: "See examples of our actual work." },
];

export function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
      <Heading>Why customers show us first</Heading>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((r) => (
          <div key={r.t} className="rounded-2xl border border-border bg-card p-5">
            <h3 className="text-base font-bold uppercase text-primary">{r.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{r.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- 14. SERVICE AREAS ---------------- */

export function ServiceAreas() {
  return (
    <section id="areas" className="bg-primary py-14 text-primary-foreground sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-2xl font-extrabold uppercase sm:text-4xl">
          Window repair around Powai
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
          Serving customers in Powai, Hiranandani Gardens, Chandivali, IIT Powai,
          Saki Vihar and nearby areas.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {business.serviceAreas.map((a) => (
            <a
              key={a}
              href={whatsappLink(
                `Hi, I have a window problem. My area is ${a}. Do you serve my area? I will send a photo.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                track("area_selected", { area: a });
                track("whatsapp_click", { location: "areas" });
              }}
              className="rounded-full border border-primary-foreground/25 px-4 py-2 text-sm font-semibold hover:bg-primary-foreground/10"
            >
              {a}
            </a>
          ))}
        </div>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <WhatsAppButton location="areas_cta" message={whatsappMessages.area}>
            CHECK IF WE SERVE YOUR AREA
          </WhatsAppButton>
          <CallButton
            location="areas_cta"
            className="border-primary-foreground/30 bg-transparent text-primary-foreground"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------- 15. REVIEWS ---------------- */

export function Reviews() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-14 sm:py-20">
      <Heading>What our customers say</Heading>
      <div className="mt-8 rounded-2xl border-2 border-dashed border-border bg-card p-8 text-center">
        <p className="text-base font-semibold text-primary">
          Real customer reviews will appear here.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Only genuine reviews from customers will be shown in this section.
        </p>
      </div>
    </section>
  );
}

/* ---------------- 16. FAQ ---------------- */

export function Faq() {
  return (
    <section id="faq" className="bg-secondary/60 py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-4">
        <Heading>Questions people ask us</Heading>
        <Accordion
          type="single"
          collapsible
          className="mt-8"
          onValueChange={(v) => v && track("faq_opened", { question: v })}
        >
          {faqs.map((f) => (
            <AccordionItem key={f.q} value={f.q}>
              <AccordionTrigger className="text-left text-base font-semibold text-primary">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* ---------------- 20/21. SHORT LEAD FORM ---------------- */

type Errors = Partial<Record<"name" | "phone" | "area" | "problem", string>>;

export function LeadForm() {
  const [started, setStarted] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [values, setValues] = useState({
    name: "",
    phone: "",
    area: "",
    problem: "",
  });

  const onFirstTouch = () => {
    if (!started) {
      setStarted(true);
      track("form_started");
    }
  };

  const set = (k: keyof typeof values) => (v: string) =>
    setValues((prev) => ({ ...prev, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Errors = {};
    if (values.name.trim().length < 2) next.name = "Please enter your name.";
    const digits = values.phone.replace(/[^\d]/g, "").replace(/^91(?=\d{10}$)/, "");
    if (!/^[6-9]\d{9}$/.test(digits))
      next.phone = "Please enter a valid 10-digit mobile number.";
    if (!values.area.trim()) next.area = "Please select your area.";
    if (!values.problem) next.problem = "Tell us what is happening with the window.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    track("form_submitted", { area: values.area, problem: values.problem });
    track("whatsapp_click", { location: "lead_form" });
    const msg = `Hi, I have a window problem.\nName: ${values.name}\nArea: ${values.area}\nProblem: ${values.problem}\nMy WhatsApp number: ${digits}\nI am sending a photo of the problem.`;
    window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
  };

  const field =
    "mt-1 w-full rounded-xl border border-input bg-card px-4 py-3 text-base text-foreground outline-none focus:border-whatsapp";

  return (
    <section className="mx-auto max-w-xl px-4 py-14 sm:py-20">
      <Heading sub="Four quick details, then continue the chat on WhatsApp.">
        Prefer to type it out?
      </Heading>

      <form onSubmit={submit} onFocus={onFirstTouch} className="mt-8 space-y-4" noValidate>
        <div>
          <label className="text-sm font-semibold text-primary" htmlFor="lf-name">
            Name
          </label>
          <input
            id="lf-name"
            className={field}
            value={values.name}
            onChange={(e) => set("name")(e.target.value)}
            autoComplete="name"
          />
          {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name}</p>}
        </div>

        <div>
          <label className="text-sm font-semibold text-primary" htmlFor="lf-phone">
            WhatsApp Number
          </label>
          <input
            id="lf-phone"
            className={field}
            inputMode="tel"
            placeholder="9876543210"
            value={values.phone}
            onChange={(e) => set("phone")(e.target.value)}
            autoComplete="tel"
          />
          {errors.phone && <p className="mt-1 text-sm text-destructive">{errors.phone}</p>}
        </div>

        <div>
          <label className="text-sm font-semibold text-primary" htmlFor="lf-area">
            Area
          </label>
          <select
            id="lf-area"
            className={field}
            value={values.area}
            onChange={(e) => {
              set("area")(e.target.value);
              if (e.target.value) track("area_selected", { area: e.target.value });
            }}
          >
            <option value="">Select your area</option>
            {business.serviceAreas.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
          {errors.area && <p className="mt-1 text-sm text-destructive">{errors.area}</p>}
        </div>

        <div>
          <label className="text-sm font-semibold text-primary" htmlFor="lf-problem">
            Problem
          </label>
          <select
            id="lf-problem"
            className={field}
            value={values.problem}
            onChange={(e) => {
              set("problem")(e.target.value);
              if (e.target.value)
                track("problem_selected", { problem: e.target.value });
            }}
          >
            <option value="">What is happening?</option>
            {problemOptions.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
          {errors.problem && (
            <p className="mt-1 text-sm text-destructive">{errors.problem}</p>
          )}
        </div>

        <Button
          type="submit"
          className="min-h-[54px] w-full rounded-xl bg-whatsapp text-base font-bold text-whatsapp-foreground shadow-cta hover:bg-whatsapp/90"
        >
          <WhatsAppIcon className="h-5 w-5" />
          CONTINUE ON WHATSAPP
        </Button>
        <p className="text-center text-xs text-muted-foreground">
          <ImageUp aria-hidden="true" className="mr-1 inline h-4 w-4 align-text-bottom" />
          You can attach your photo once WhatsApp opens.
        </p>
      </form>
    </section>
  );
}

/* ---------------- 17. FINAL CTA ---------------- */

export function FinalCTA() {
  return (
    <section className="bg-primary py-16 text-primary-foreground sm:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-3xl font-extrabold uppercase leading-[1.05] sm:text-5xl">
          Got a window problem?
          <br />
          <span className="text-accent">Show us. Don't guess.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-primary-foreground/85">
          Take a photo and send it on WhatsApp. We'll help you understand the next
          step.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <WhatsAppButton location="final_cta" />
          <CallButton
            location="final_cta"
            className="border-primary-foreground/30 bg-transparent text-primary-foreground"
          />
        </div>
        <p className="mt-5 text-sm text-primary-foreground/60">{business.areaLine}</p>
      </div>
    </section>
  );
}

/* ---------------- 18. STICKY MOBILE CTA ---------------- */

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 p-2 backdrop-blur md:hidden">
      <div className="flex gap-2">
        <a
          href={business.phoneHref}
          onClick={() => track("call_click", { location: "sticky_mobile" })}
          className="flex min-h-[52px] w-[38%] items-center justify-center gap-2 rounded-xl border-2 border-primary/25 text-sm font-bold text-primary"
        >
          <Phone aria-hidden="true" className="h-5 w-5" strokeWidth={2.25} />
          CALL NOW
        </a>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("whatsapp_click", { location: "sticky_mobile" })}
          className="flex min-h-[52px] flex-1 items-center justify-center gap-2 rounded-xl bg-whatsapp text-sm font-bold text-whatsapp-foreground shadow-cta"
        >
          <WhatsAppIcon className="h-5 w-5" />
          WHATSAPP
        </a>
      </div>
    </div>
  );
}

/* ---------------- 33. FOOTER ---------------- */

export function Footer() {
  return (
    <footer className="bg-primary pb-24 pt-12 text-primary-foreground md:pb-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-3">
        <div>
          <p className="font-display text-lg font-extrabold">{business.name}</p>
          <p className="mt-1 text-sm text-primary-foreground/70">
            Window repair services — sliding, aluminium, rollers, tracks, locks,
            handles and glass.
          </p>
          <p className="mt-3 text-sm text-primary-foreground/70">
            Powai and nearby areas
          </p>
          {business.address ? (
            <p className="mt-1 text-sm text-primary-foreground/70">
              {business.address}
            </p>
          ) : null}
        </div>

        <div className="text-sm text-primary-foreground/80">
          <p className="font-bold uppercase text-primary-foreground">Contact</p>
          <p className="mt-2">
            <a href={business.phoneHref}>{business.phone}</a>
          </p>
          <p className="mt-1">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              WhatsApp us
            </a>
          </p>
          {business.hours ? <p className="mt-1">{business.hours}</p> : null}
          {business.googleBusinessProfileUrl ? (
            <p className="mt-1">
              <a
                href={business.googleBusinessProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Business Profile
              </a>
            </p>
          ) : null}
        </div>

        <div className="text-sm text-primary-foreground/80">
          <p className="font-bold uppercase text-primary-foreground">Links</p>
          <ul className="mt-2 space-y-1">
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#our-work">Our Work</a>
            </li>
            <li>
              <a href="#areas">Areas</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="/sliding-window-repair-powai">Sliding Window Repair</a>
            </li>
            <li>
              <a href="/aluminium-window-repair-powai">Aluminium Window Repair</a>
            </li>
            <li>
              <a href="/window-roller-repair-powai">Window Roller Replacement</a>
            </li>
            <li>
              <a href="/window-track-repair-powai">Window Track Repair</a>
            </li>
            <li>
              <a href="/window-lock-repair-powai">Window Lock &amp; Handle Repair</a>
            </li>
            <li>
              <a href="/window-glass-replacement-powai">Window Glass Replacement</a>
            </li>
            <li>
              <a href="/sliding-door-repair-powai">Sliding Door Repair</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms">Terms</a>
            </li>
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl px-4 text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} {business.name}. {business.tagline}
      </p>
    </footer>
  );
}
