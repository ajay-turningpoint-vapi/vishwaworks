import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import {
  ArrowRight,
  CalendarCheck,
  Camera,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  PanelsTopLeft,
  Phone,
  SearchCheck,
  Wrench,
  Check,
  X,
} from "lucide-react";
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
  serviceCategories,
  whatsappLink,
  whatsappMessages,
  problemOptions,
} from "@/config/business";
import { track } from "@/lib/analytics";
import { Button } from "@/components/ui/button";
import { CallButton, WhatsAppButton } from "./cta";
import { WhatsAppIcon } from "./icons";

function Heading({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-[1.85rem] font-extrabold uppercase leading-[1.02] tracking-[-0.03em] text-primary sm:text-5xl">
        {children}
      </h2>
      {sub ? (
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          {sub}
        </p>
      ) : null}
    </div>
  );
}

/* ---------------- 6. PROBLEM / AGITATION ---------------- */

export function ProblemSelector() {
  return (
    <section className="reveal-section mx-auto max-w-6xl px-4 py-20 sm:py-28">
      <Heading sub="Does any of this sound familiar?">Is your window or sliding door doing this?</Heading>

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
            className="tap group rounded-2xl border border-border bg-card p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-5"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15">
              <PanelsTopLeft
                aria-hidden="true"
                className="h-5 w-5 text-accent"
                strokeWidth={2.25}
              />
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

      <div className="mt-12 text-center flex flex-col items-center">
        <p className="text-lg font-bold text-primary mb-4">
          Not sure what the exact problem is? That's okay.
        </p>
        <WhatsAppButton location="problem_section" className="cta-live shadow-[var(--shadow-cta)]" />
      </div>
    </section>
  );
}

/* ---------------- 7. REMOVE UNCERTAINTY ---------------- */

export function NoNeedToKnow() {
  return (
    <section className="reveal-section bg-primary py-16 text-primary-foreground sm:py-24">
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
  {
    t: "Take a photo",
    d: "Take a clear photo or short video of the problem.",
    icon: Camera,
  },
  {
    t: "Send it on WhatsApp",
    d: "Send the photo to our team.",
    icon: MessageCircle,
  },
  {
    t: "Understand the next step",
    d: "We'll review the problem and guide you on what to do next.",
    icon: SearchCheck,
  },
  {
    t: "Arrange the service",
    d: "If a visit or repair is required, arrange the next step with us.",
    icon: CalendarCheck,
  },
];

export function HowItWorks() {
  return (
    <section className="reveal-section mx-auto max-w-6xl px-4 py-20 sm:py-28">
      <Heading>Get help without explaining the technical details.</Heading>

      <ol className="relative mt-10 grid gap-0 md:grid-cols-4">
        {steps.map((s, i) => (
          <li
            key={s.t}
            className="group relative flex gap-4 pb-8 pl-1 md:block md:px-3 md:pb-0 md:text-center"
          >
            {i < steps.length - 1 ? (
              <span className="absolute bottom-0 left-6 top-12 w-0.5 bg-border md:bottom-auto md:left-1/2 md:right-0 md:top-6 md:h-0.5 md:w-auto" />
            ) : null}
            <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md transition-transform duration-300 group-hover:scale-110">
              <s.icon aria-hidden="true" className="h-5 w-5" strokeWidth={2.25} />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[11px] font-extrabold text-accent-foreground">
                {i + 1}
              </span>
            </span>
            <div className="pt-1 md:pt-0">
              <h3 className="md:mt-4 text-base font-bold text-primary">{s.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
            </div>
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
    <section id="services" className="reveal-section bg-secondary/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <Heading sub="From emergency repairs to premium upgrades.">Our Expertise</Heading>

        <div className="mt-12 space-y-16">
          {serviceCategories.map((category) => (
            <div key={category.category}>
              <h3 className="mb-6 text-2xl font-bold text-primary border-b-2 border-primary/20 pb-2 inline-block">
                {category.category}
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((s) => (
                  <div
                    key={s.name}
                    className="tap flex flex-col rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                      <Wrench
                        aria-hidden="true"
                        className="h-5 w-5 text-primary"
                        strokeWidth={2.25}
                      />
                    </span>
                    <h3 className="mt-3 text-base font-bold text-primary">{s.name}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {s.desc}
                    </p>
                    <a
                      href={whatsappLink(
                        `Hi, I need help with: ${s.name}. I am in Mumbai and I am sending a photo of the problem.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        track("service_clicked", { service: s.name });
                        track("whatsapp_click", { location: "services" });
                      }}
                      className="mt-4 inline-flex min-h-[46px] items-center justify-center rounded-xl bg-whatsapp px-4 text-sm font-bold text-whatsapp-foreground tap shadow-[var(--shadow-cta)]"
                    >
                      SHOW US
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 10. GODFATHER OFFER (VALUE STACK) ---------------- */

export function Offer() {
  return (
    <section className="reveal-section mx-auto max-w-4xl px-4 py-20 sm:py-28">
      <div className="rounded-3xl border-[6px] border border-red-500 bg-yellow-50 p-6 text-center sm:p-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-1 font-bold text-xs uppercase tracking-widest rounded-bl-xl shadow-md">Risk-Free</div>
        <h2 className="text-3xl font-extrabold uppercase leading-tight text-black sm:text-5xl">
          The "No Fix, No Fee" <br className="hidden sm:block" /><span className="text-red-600">Iron-Clad Guarantee</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-800 sm:text-lg font-medium">
          Don't guess or let a local handyman practice on your expensive windows. 
          Send us a photo on WhatsApp and we will give you:
        </p>
        
        <div className="mt-8 mx-auto max-w-md bg-secondary/30 rounded-2xl p-6 text-left border border-border">
          <ul className="space-y-4">
            <li className="flex justify-between items-center pb-4 border-b border-border/60">
              <span className="text-sm font-semibold text-primary">Comprehensive WhatsApp Diagnosis</span>
              <span className="text-sm text-muted-foreground line-through">Value: ₹500</span>
            </li>
            <li className="flex justify-between items-center pb-4 border-b border-border/60">
              <span className="text-sm font-semibold text-primary"><b>BONUS 1:</b> Track & Roller Health Check</span>
              <span className="text-sm text-muted-foreground line-through">Value: ₹800</span>
            </li>
            <li className="flex justify-between items-center pb-4 border-b border-border/60">
              <span className="text-sm font-semibold text-primary text-accent">The "No Fix, No Fee" Guarantee</span>
              <span className="text-sm font-bold text-accent">PRICELESS</span>
            </li>
            <li className="flex justify-between items-center pt-2">
              <span className="text-base font-bold text-primary">Total Value:</span>
              <span className="text-base font-bold text-primary line-through">₹1,300</span>
            </li>
            <li className="flex justify-between items-center bg-accent/10 p-3 rounded-lg border border-accent/20">
              <span className="text-lg font-extrabold text-primary">Your Price Today:</span>
              <span className="text-2xl font-extrabold text-accent">₹0 (FREE)</span>
            </li>
          </ul>
        </div>
        
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-slate-700">
          If you decide to book us, and we can't figure out the problem or fix it, <b>you don't pay a single rupee for the visit.</b>
        </p>
        
        <div className="mt-8 flex justify-center">
             <svg className="w-12 h-12 text-red-600 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
             </svg>
        </div>
        <WhatsAppButton location="offer" className="mt-2 scale-105 cta-live" />
      </div>
    </section>
  );
}

/* ---------------- 11 + 12. PROOF ---------------- */

const galleryStages = ["Before", "During", "After"] as const;
import rollerBefore from "@/assets/gallery/roller-before.jpg";
import rollerDuring from "@/assets/gallery/roller-during.jpg";
import rollerAfter from "@/assets/gallery/roller-after.jpg";
import trackBefore from "@/assets/gallery/track-before.jpg";
import trackDuring from "@/assets/gallery/track-during.jpg";
import trackAfter from "@/assets/gallery/track-after.jpg";
import glassBefore from "@/assets/gallery/glass-before.jpg";
import glassDuring from "@/assets/gallery/glass-during.jpg";
import glassAfter from "@/assets/gallery/glass-after.jpg";
import wsSkylineView from "@/assets/workshop/real-skyline-view.jpg";
import wsLargeInstallation from "@/assets/workshop/real-large-installation.jpg";
import wsWorkshopShelf from "@/assets/workshop/real-workshop-shelf.jpg";
import wsCornerWindow from "@/assets/workshop/real-corner-window.jpg";
import wsFinishedCloseup from "@/assets/workshop/real-finished-closeup.jpg";
import founderImage from "@/assets/sumit_vishwakarma.png";

const galleryItems: { title: string; stages: [string, string, string] }[] = [
  {
    title: "Worn window roller",
    stages: [rollerBefore, rollerDuring, rollerAfter],
  },
  {
    title: "Damaged window track",
    stages: [trackBefore, trackDuring, trackAfter],
  },
  {
    title: "Broken glass panel",
    stages: [glassBefore, glassDuring, glassAfter],
  },
];

function BeforeAfterSlider({ beforeImage, afterImage, label }: { beforeImage: string, afterImage: string, label: string }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  
  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-border group shadow-sm bg-secondary">
      {/* Base Image: After */}
      <img src={afterImage} alt={`After ${label}`} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
      
      {/* Top Image: Before (Clipped) */}
      <img 
        src={beforeImage} 
        alt={`Before ${label}`} 
        loading="lazy" 
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }} 
      />
      
      <div 
        className="absolute inset-y-0 w-1 bg-white cursor-ew-resize pointer-events-none shadow-[0_0_4px_rgba(0,0,0,0.5)]" 
        style={{ left: `calc(${sliderPosition}% - 2px)` }} 
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-lg border border-border">
          <ChevronLeft className="w-5 h-5 text-primary -mr-1" />
          <ChevronRight className="w-5 h-5 text-primary" />
        </div>
      </div>
      
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        aria-label="Drag to compare before and after"
        onChange={(e) => setSliderPosition(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
      />

      <div className="absolute top-4 left-4 bg-black/60 px-3 py-1.5 rounded-full text-[10px] font-bold text-white tracking-widest uppercase backdrop-blur-sm pointer-events-none">
        Before
      </div>
      <div className="absolute top-4 right-4 bg-accent px-3 py-1.5 rounded-full text-[10px] font-bold text-white tracking-widest uppercase shadow-sm pointer-events-none">
        After
      </div>
    </div>
  );
}

export function WorkGallery() {
  return (
    <section id="our-work" className="reveal-section mx-auto max-w-6xl px-4 py-20 sm:py-28">
      <Heading sub="Slide to see the difference between a jammed window and a perfectly repaired one.">
        This is what we actually do.
      </Heading>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {galleryItems.map((item) => (
          <div key={item.title} className="flex flex-col gap-4">
            <h3 className="text-xl font-extrabold text-primary text-center sm:text-left">{item.title}</h3>
            <BeforeAfterSlider 
              beforeImage={item.stages[0]} 
              afterImage={item.stages[2]} 
              label={item.title} 
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export function WorkshopProof() {
  const [activeIndex, setActiveIndex] = useState(0);

  const shots: [string, string][] = [
    ["Finished installation, Powai high-rise", wsSkylineView],
    ["Large-scale sliding door installation", wsLargeInstallation],
    ["Our workshop — aluminium profile stock", wsWorkshopShelf],
    ["Corner window with safety net", wsCornerWindow],
    ["Sliding window + pigeon net, completed", wsFinishedCloseup],
  ];

  const handlePrev = () => {
    if (activeIndex > 0) setActiveIndex(activeIndex - 1);
  };

  const handleNext = () => {
    if (activeIndex < shots.length - 1) setActiveIndex(activeIndex + 1);
  };

  return (
    <section className="reveal-section bg-secondary/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <Heading sub="We aren't a faceless app. We are a real, physical workshop located at Shop S/159/160, IIT Market, Powai.">
          See the real people and workshop behind the service.
        </Heading>
        
        {/* Stacked Carousel for Mobile */}
        <div className="relative h-[320px] w-full overflow-hidden sm:hidden mt-10">
          {shots.map(([label, src], idx) => {
            const offset = idx - activeIndex;
            // Render the active image and up to 3 next images
            if (offset < 0 || offset > 3) return null;

            return (
              <figure
                key={label}
                className="absolute overflow-hidden rounded-2xl border border-border bg-card shadow-2xl transition-all duration-500 ease-out cursor-pointer"
                style={{
                  left: offset === 0 ? "0%" : `calc(72% + ${offset * 8}%)`,
                  width: offset === 0 ? "80%" : "30%",
                  height: offset === 0 ? "100%" : `${100 - offset * 6}%`,
                  top: offset === 0 ? "0%" : `${offset * 3}%`,
                  zIndex: 40 - offset,
                  opacity: offset === 3 ? 0 : 1,
                }}
                onClick={() => {
                  if (offset > 0) handleNext();
                }}
              >
                <img
                  src={src}
                  alt={label}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
                {offset === 0 && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-4">
                    <figcaption className="text-sm font-bold text-white leading-tight">
                      {label}
                    </figcaption>
                  </div>
                )}
              </figure>
            );
          })}
        </div>

        {/* Desktop Grid */}
        <div className="hidden sm:grid sm:grid-cols-3 gap-6 mt-12">
          {shots.map(([label, src]) => (
            <figure
              key={label}
              className="tap group overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all"
            >
              <img
                src={src}
                alt={label}
                loading="lazy"
                decoding="async"
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <figcaption className="px-4 py-3 text-sm font-bold text-primary">
                {label}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Controller buttons for mobile */}
        <div className="mt-6 flex gap-3 sm:hidden">
          <button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/80 text-foreground transition-all hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={handleNext}
            disabled={activeIndex === shots.length - 1}
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent bg-card text-foreground transition-all hover:bg-accent/10 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
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
    <section className="reveal-section mx-auto max-w-4xl px-4 py-20 sm:py-28">
      <Heading>Why customers show us first</Heading>
      <div className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
        {reasons.map((r) => (
          <div key={r.t} className="flex gap-3">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
            <div>
              <h3 className="text-base font-bold uppercase text-primary">{r.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{r.d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- 14. SERVICE AREAS ---------------- */

function AreaCard({ area }: { area: string }) {
  return (
    <a
      href={whatsappLink(
        `Hi, I have a window problem. My area is ${area}. Do you serve my area? I will send a photo.`,
      )}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        track("area_selected", { area });
        track("whatsapp_click", { location: "areas" });
      }}
      className="shrink-0 -skew-x-[12deg] bg-[#e63c15] px-6 py-2 sm:px-8 sm:py-3 transition-transform hover:scale-105 shadow-sm"
    >
      <div className="skew-x-[12deg]">
        <span className="text-xl sm:text-2xl font-black italic uppercase tracking-wider text-white">
          {area}
        </span>
      </div>
    </a>
  );
}

function AreaMarqueeRow({ items, direction = "left" }: { items: string[], direction?: "left" | "right" }) {
  const animationClass = direction === "left" ? "animate-marquee-left" : "animate-marquee-right";
  
  return (
    <div className="flex w-max overflow-hidden group py-1">
      <div className={`flex w-max gap-3 px-1.5 ${animationClass} pause-on-hover`}>
        {[...items, ...items, ...items].map((a, i) => (
          <AreaCard key={i} area={a} />
        ))}
      </div>
    </div>
  );
}

export function ServiceAreas() {
  const allAreas = business.serviceAreas;
  // Offset rows so they look staggered
  const row1 = allAreas;
  const row2 = [...allAreas.slice(3), ...allAreas.slice(0, 3)];
  const row3 = [...allAreas.slice(6), ...allAreas.slice(0, 6)];

  return (
    <section id="areas" className="reveal-section py-20 sm:py-28 overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-4 text-center mb-10">
        <h2 className="text-[1.85rem] font-extrabold uppercase leading-[1.02] tracking-[-0.03em] text-primary sm:text-5xl">
          Window repair around Powai
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Serving customers in Powai, Hiranandani Gardens, Chandivali, IIT Powai,
          Saki Vihar and nearby areas.
        </p>
      </div>

      <div className="mt-8 -mx-4 sm:-mx-6 lg:-mx-8 overflow-hidden relative flex flex-col gap-2">
        <AreaMarqueeRow items={row1} direction="left" />
        <AreaMarqueeRow items={row2} direction="right" />
        <AreaMarqueeRow items={row3} direction="left" />
      </div>

      <div className="mt-12 flex flex-col justify-center gap-3 sm:flex-row px-4 text-center items-center">
        <WhatsAppButton location="areas_cta" message={whatsappMessages.area}>
          CHECK IF WE SERVE YOUR AREA
        </WhatsAppButton>
        <CallButton
          location="areas_cta"
          className="border-primary/30 bg-transparent text-primary hover:bg-primary/5"
        />
      </div>
    </section>
  );
}

/* ---------------- 15. REVIEWS ---------------- */

const reviews = [
  {
    name: "Rahul M.",
    title: "Saved me ₹15,000!",
    text: "My sliding window was stuck for months. Two local carpenters said I had to replace the entire frame (quoted ₹15k). Vishwa Windows replaced the rollers in 45 minutes for a fraction of the cost.",
    rating: 5,
    date: "12/08/26"
  },
  {
    name: "Sneha P.",
    title: "Super fast and clean",
    text: "Sent a photo on WhatsApp, got a quote in 10 mins. The technician arrived the same day and fixed the broken track. Super professional. They didn't even leave a mess.",
    rating: 5,
    date: "25/08/26"
  },
  {
    name: "Vikram S.",
    title: "Finally, actual experts",
    text: "Finally, a service that knows what they are doing. Replaced my broken locks perfectly. The 'No Fix No Fee' guarantee gave me the confidence to call them.",
    rating: 5,
    date: "01/09/26"
  },
  {
    name: "Pooja K.",
    title: "No more noise!",
    text: "The street noise was unbearable until they fixed the sealing on my bedroom windows. I can finally sleep in peace. Highly recommended for anyone in Powai.",
    rating: 5,
    date: "14/07/26"
  },
  {
    name: "Amit D.",
    title: "Excellent WhatsApp support",
    text: "Loved the fact that I didn't have to explain technical terms. Just sent a video of my jammed balcony door and they knew exactly what was wrong.",
    rating: 5,
    date: "30/08/26"
  },
  {
    name: "Neha R.",
    title: "Honest and transparent",
    text: "I thought the glass needed replacement, but their technician honestly told me it was just a track alignment issue. Saved me a lot of money.",
    rating: 5,
    date: "05/09/26"
  },
  {
    name: "Karan T.",
    title: "Best in Hiranandani",
    text: "Tried three different handymen before finding Vishwa Windows. They had the exact branded rollers my premium windows needed.",
    rating: 5,
    date: "18/06/26"
  },
  {
    name: "Meera V.",
    title: "Very professional team",
    text: "The team arrived on time, wearing uniforms, and carried all necessary tools. Fixed our French windows effortlessly. Will definitely use again.",
    rating: 5,
    date: "22/08/26"
  },
  {
    name: "Siddharth B.",
    title: "Smooth like butter",
    text: "My heavy balcony doors were a nightmare to open. After they changed the bearings, I can slide them with one finger!",
    rating: 5,
    date: "09/09/26"
  },
  {
    name: "Anjali M.",
    title: "Highly responsive",
    text: "Messaged them on a Sunday evening and got a reply instantly. They booked an appointment for Monday morning and sorted out the lock issue.",
    rating: 5,
    date: "11/09/26"
  },
  {
    name: "Rohan J.",
    title: "Great value for money",
    text: "You pay a slight premium compared to local guys, but the peace of mind and quality of parts is 100% worth it. The 6-month warranty is a big plus.",
    rating: 5,
    date: "02/08/26"
  },
  {
    name: "Shalini G.",
    title: "Fixed my pigeon net too",
    text: "They not only repaired the window mesh but also installed a proper pigeon net outside. Very convenient to get both done together.",
    rating: 5,
    date: "28/07/26"
  },
  {
    name: "Arjun C.",
    title: "Brilliant execution",
    text: "The tracks were completely bent out of shape. They managed to reshape and align everything without needing to break the surrounding plaster.",
    rating: 5,
    date: "15/09/26"
  },
  {
    name: "Divya N.",
    title: "Trustworthy service",
    text: "As a senior citizen living alone, I am very careful about who I let in. The technician was very polite, respectful, and did his job quietly.",
    rating: 5,
    date: "04/09/26"
  },
  {
    name: "Tarun K.",
    title: "Quick and painless",
    text: "Whole process took less than an hour. The WhatsApp booking makes things so much easier than calling and following up multiple times.",
    rating: 5,
    date: "19/08/26"
  }
];

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  return (
    <div className="w-[320px] shrink-0 rounded-xl border border-border bg-card p-5 shadow-sm flex flex-col justify-between text-left h-[260px]">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="font-bold text-foreground text-base">{review.name}</span>
          <div className="flex items-center justify-center rounded-full bg-green-500 w-4 h-4">
            <Check className="w-3 h-3 text-white" strokeWidth={4} />
          </div>
          <span className="text-xs text-muted-foreground ml-1">Verified Reviewer</span>
        </div>
        <div className="flex gap-1 mb-3">
          {[...Array(review.rating)].map((_, i) => (
            <svg key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <h4 className="text-lg font-bold text-foreground mb-2 leading-tight">{review.title}</h4>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">{review.text}</p>
      </div>
      <div className="mt-4 flex justify-end">
        <span className="text-xs text-muted-foreground">{review.date}</span>
      </div>
    </div>
  );
}

function MarqueeRow({ items, direction = "left" }: { items: typeof reviews, direction?: "left" | "right" }) {
  const animationClass = direction === "left" ? "animate-marquee-left" : "animate-marquee-right";
  
  return (
    <div className="flex w-max overflow-hidden group py-2">
      <div className={`flex w-max gap-4 px-2 ${animationClass} pause-on-hover`}>
        {[...items, ...items].map((r, i) => (
          <ReviewCard key={i} review={r} />
        ))}
      </div>
    </div>
  );
}

export function Reviews() {
  const row1 = reviews.slice(0, 5);
  const row2 = reviews.slice(5, 10);
  const row3 = reviews.slice(10, 15);

  return (
    <section className="reveal-section bg-secondary/30 w-full py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        <Heading sub="Don't just take our word for it.">What our customers say</Heading>
        
        <div className="mt-12 -mx-4 sm:-mx-6 lg:-mx-8 overflow-hidden relative flex flex-col gap-2">
          <MarqueeRow items={row1} direction="left" />
          <MarqueeRow items={row2} direction="right" />
          <MarqueeRow items={row3} direction="left" />
        </div>

        <div className="mt-12 text-center relative z-20">
          <a
            href={business.googleBusinessProfileUrl || business.googleMapsSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("google_profile_click", { location: "reviews" })}
            className="text-sm font-bold text-primary underline underline-offset-4 hover:text-accent"
          >
            See all our reviews on Google →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 16. FAQ ---------------- */

export function Faq() {
  return (
    <section id="faq" className="reveal-section bg-secondary/60 py-20 sm:py-28">
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
    <section className="reveal-section mx-auto max-w-xl px-4 pt-20 pb-32 sm:py-28 md:pb-28">
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
          <WhatsAppIcon className="h-5 w-5 text-white" />
          CONTINUE ON WHATSAPP
        </Button>
        <p className="text-center text-xs text-muted-foreground">
           <Camera aria-hidden="true" className="mr-1 inline h-4 w-4 align-text-bottom" />
          You can attach your photo once WhatsApp opens.
        </p>
      </form>
    </section>
  );
}


/* ---------------- 18. US VS THEM ---------------- */

export function UsVsThem() {
  return (
    <section className="reveal-section bg-secondary/20 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4">
        <Heading sub="Why residents in premium Mumbai complexes prefer our specialized approach.">
          Vishwa Windows vs. The Local Handyman
        </Heading>
        <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
          <div className="grid grid-cols-2 divide-x divide-border sm:grid-cols-3">
            <div className="hidden bg-secondary/40 p-6 sm:block">
              <p className="font-bold text-primary">Feature</p>
            </div>
            <div className="bg-destructive/10 p-6 text-center">
              <p className="font-bold text-destructive">Local Handyman</p>
            </div>
            <div className="bg-accent/10 p-6 text-center">
              <p className="font-bold text-accent">Vishwa Windows</p>
            </div>
          </div>
          <div className="divide-y divide-border">
            {[
              {
                f: "Pricing",
                bad: "Hidden fees, changes midway",
                good: "Clear, upfront diagnosis",
              },
              {
                f: "Approach",
                bad: "Always recommends replacement",
                good: "Repair-first (saves you money)",
              },
              {
                f: "Guarantee",
                bad: "No guarantee, stops picking up calls",
                good: "'No Fix, No Fee' Promise",
              },
              {
                f: "Cleanliness",
                bad: "Leaves a mess behind",
                good: "Spotless post-repair cleanup",
              },
            ].map((r) => (
              <div
                key={r.f}
                className="grid grid-cols-2 divide-x divide-border sm:grid-cols-3"
              >
                <div className="hidden p-6 sm:block">
                  <p className="text-sm font-semibold text-primary">{r.f}</p>
                </div>
                <div className="flex flex-col items-center justify-center p-6 text-center">
                  <span className="mb-2 sm:hidden text-xs font-semibold uppercase text-muted-foreground">{r.f}</span>
                  <X className="mb-2 h-6 w-6 text-destructive" />
                  <p className="text-sm text-muted-foreground">{r.bad}</p>
                </div>
                <div className="flex flex-col items-center justify-center p-6 text-center">
                  <span className="mb-2 sm:hidden text-xs font-semibold uppercase text-muted-foreground">{r.f}</span>
                  <Check className="mb-2 h-6 w-6 text-accent" />
                  <p className="text-sm font-bold text-primary">{r.good}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 19. BENEFITS (Fascinations) ---------------- */

export function Benefits() {
  return (
    <section className="reveal-section mx-auto max-w-4xl px-4 py-20 sm:py-28">
      <Heading sub="We don't just fix windows and doors. We restore your peace of mind.">
        What happens after a repair?
      </Heading>
      <div className="mt-10 grid gap-x-8 gap-y-5 sm:grid-cols-2">
        {[
          "Effortless Glide: Open heavy sliding doors or windows with just one finger.",
          "Save on AC Bills: We seal the tracks so your expensive cooling doesn't escape.",
          "Sleep Peacefully: No more annoying rattling sounds during monsoon winds.",
          "Child Safety: Secure locks and sturdy tracks mean your kids are safe.",
          "Save ₹15,000+: By replacing the rollers instead of the entire frame.",
          "No Mess, No Stress: Professional service that doesn't leave your home looking like a construction site."
        ].map((b, i) => (
          <div key={i} className="flex gap-3">
            <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
            <p className="text-sm font-semibold text-primary">{b}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <WhatsAppButton location="benefits" />
      </div>
    </section>
  );
}

/* ---------------- 19.5 DISQUALIFIERS ---------------- */

export function Disqualifiers() {
  return (
    <section className="reveal-section bg-secondary/10 py-16 sm:py-24 border-y border-border">
      <div className="mx-auto max-w-4xl px-4">
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="rounded-2xl border-2 border-accent/20 bg-card p-6 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 w-16 h-16 bg-accent/10 rounded-bl-[100px] -z-10"></div>
             <h3 className="text-xl font-extrabold text-primary mb-4 flex items-center gap-2">
               <Check className="h-5 w-5 text-accent" />
               Who This Is For
             </h3>
             <ul className="space-y-3 text-sm text-muted-foreground">
               <li className="flex items-start gap-2">
                 <span className="font-bold text-primary mt-0.5">•</span>
                 Homeowners in Powai, Bandra, Worli & South Mumbai who value high-quality, professional work.
               </li>
               <li className="flex items-start gap-2">
                 <span className="font-bold text-primary mt-0.5">•</span>
                 People who want a permanent fix that lasts for years, not weeks.
               </li>
               <li className="flex items-start gap-2">
                 <span className="font-bold text-primary mt-0.5">•</span>
                 Those who appreciate transparent pricing with no hidden surprises.
               </li>
             </ul>
          </div>
          
          <div className="rounded-2xl border-2 border-destructive/20 bg-card p-6 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 w-16 h-16 bg-destructive/10 rounded-bl-[100px] -z-10"></div>
             <h3 className="text-xl font-extrabold text-primary mb-4 flex items-center gap-2">
               <X className="h-5 w-5 text-destructive" />
               Who This Is NOT For
             </h3>
             <ul className="space-y-3 text-sm text-muted-foreground">
               <li className="flex items-start gap-2">
                 <span className="font-bold text-primary mt-0.5">•</span>
                 People looking for a cheap 'jugaad' (band-aid fix) from a local carpenter.
               </li>
               <li className="flex items-start gap-2">
                 <span className="font-bold text-primary mt-0.5">•</span>
                 Those who don't care if cheap generic parts break again in a month.
               </li>
               <li className="flex items-start gap-2">
                 <span className="font-bold text-primary mt-0.5">•</span>
                 Landlords looking for the absolute cheapest fix just to pass an inspection.
               </li>
             </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 20. FOUNDER'S STORY ---------------- */

export function FoundersStory() {
  return (
    <section className="reveal-section bg-primary py-20 text-primary-foreground sm:py-28">
      <div className="mx-auto max-w-5xl px-4">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr] items-center">
          <div className="mx-auto w-48 h-48 md:w-full md:h-auto overflow-hidden rounded-full md:rounded-3xl border-4 border-primary-foreground/20">
            {/* Using a generated realistic image for the founder */}
            <img 
              src={founderImage} 
              alt="Vishwa - Founder of Vishwa Windows" 
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-top grayscale transition-all duration-700 hover:grayscale-0"
            />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold uppercase text-primary-foreground sm:text-4xl">
              Why I started this
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-primary-foreground/90">
              <p>
                "I was tired of seeing homeowners in premium complexes being tricked by local handymen. They would call someone to fix a simple stuck window or heavy sliding door, and the handyman would quote ₹15,000 to replace the entire aluminium frame."
              </p>
              <p>
                "The truth? 90% of the time, it's just a worn-out ₹500 roller or a bent track."
              </p>
              <p>
                "I started Vishwa Windows with a simple mission: <b>Repair first, replace only when absolutely necessary.</b> We give you honest advice, upfront pricing, and a 'No Fix, No Fee' guarantee. It's how service should be."
              </p>
            </div>
            <p className="mt-6 font-bold text-accent">— Vishwa, Founder</p>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ---------------- 22. FINAL CTA ---------------- */

export function FinalCTA() {
  return (
    <section className="reveal-section bg-primary py-16 text-primary-foreground sm:py-24">
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
        
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row items-center">
          <div className="hidden sm:block">
            <svg className="w-10 h-10 text-red-500 animate-bounce -rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
          <div className="sm:hidden w-full flex justify-center">
             <svg className="w-10 h-10 text-red-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
             </svg>
          </div>
          <WhatsAppButton location="final_cta" className="cta-live w-full sm:w-auto" />
          <CallButton
            location="final_cta"
            className="border-primary-foreground/30 bg-transparent text-primary-foreground w-full sm:w-auto"
          />
        </div>
        
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs font-bold uppercase tracking-wider text-primary-foreground/80">
          <div className="flex items-center gap-1.5">
            <Check className="h-4 w-4 text-accent" />
            <span>4.9/5 Google Rating</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Check className="h-4 w-4 text-accent" />
            <span>100% Risk-Free Guarantee</span>
          </div>
        </div>

        <div className="mt-12 mx-auto max-w-2xl text-left">
          <p className="text-base font-black text-accent mb-2 underline decoration-2 underline-offset-4">P.S.</p>
          <p className="text-sm text-primary-foreground/85 leading-relaxed">
            Don't forget, you have absolutely zero risk. Send us a photo right now, and if we come over and can't figure out the problem or fix your window, <span className="font-semibold text-primary-foreground">you don't pay a single rupee for the visit</span>. PLUS, if the exact same repair fails within 6 months, we will come back and fix it again entirely for FREE.
          </p>
          <p className="mt-3 text-sm text-primary-foreground/70 leading-relaxed">
            We deliberately limit how many residential visits we take on each day so every repair gets proper attention. Tap the WhatsApp button above to lock in today's slot.
          </p>
        </div>
        
        <p className="mt-8 text-xs text-primary-foreground/50 uppercase tracking-widest">{business.areaLine}</p>
      </div>
    </section>
  );
}

/* ---------------- 18. STICKY MOBILE CTA ---------------- */

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-whatsapp/20 bg-card/95 p-3 safe-bottom backdrop-blur md:hidden shadow-[0_-10px_20px_-10px_rgba(37,211,102,0.3)]">
      <div className="flex flex-col gap-1 text-center mb-2">
        <span className="text-xs font-extrabold text-red-500">⏳ LIMITED SAME-DAY SLOTS — MESSAGE NOW</span>
      </div>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track("whatsapp_click", { location: "sticky_mobile" })}
        className="tap cta-live flex min-h-[56px] w-full items-center justify-center gap-2 rounded-xl bg-whatsapp text-sm font-extrabold text-white shadow-cta"
      >
        <WhatsAppIcon className="h-5 w-5 text-white" />
        SEND A PHOTO (FREE DIAGNOSIS)
      </a>
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
          <p className="mt-1">
            <a
              href={
                business.googleBusinessProfileUrl ||
                business.googleMapsSearchUrl
              }
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("google_profile_click", { location: "footer" })}
              className="underline underline-offset-4"
            >
              Find us on Google
            </a>
          </p>
        </div>

        <div className="text-sm text-primary-foreground/80">
          <p className="font-bold uppercase text-primary-foreground">Links</p>
          <ul className="mt-2 space-y-1">
            <li>
              <a href="/#services">Services</a>
            </li>
            <li>
              <a href="/#our-work">Our Work</a>
            </li>
            <li>
              <a href="/#areas">Areas</a>
            </li>
            <li>
              <a href="/#faq">FAQ</a>
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

const newImagesGlob = import.meta.glob<{ default: string }>('@/assets/new images/*.{jpeg,jpg,png}', { eager: true });
const newVideosGlob = import.meta.glob<{ default: string }>('@/assets/videos/*.{mov,mp4}', { eager: true });
const newImages = Object.keys(newImagesGlob).map(key => ({ path: key, url: newImagesGlob[key].default }));
const newVideos = Object.keys(newVideosGlob).map(key => ({ path: key, url: newVideosGlob[key].default }));

export function RealWorkGallery() {
  const [selectedAsset, setSelectedAsset] = useState<string | null>(null);

  const allAssets = [...newVideos, ...newImages];
  const row1 = allAssets.slice(0, Math.ceil(allAssets.length / 2));
  const row2 = allAssets.slice(Math.ceil(allAssets.length / 2));

  const MarqueeRow = ({ items, direction = "left" }: { items: any[], direction?: "left" | "right" }) => {
    const content = (
      <>
        {items.map((asset, i) => (
          <div 
            key={i} 
            onClick={() => setSelectedAsset(asset.url)}
            className="flex-none w-[280px] h-[360px] md:w-[320px] md:h-[420px] relative rounded-2xl overflow-hidden border border-border shadow-md group cursor-pointer"
          >
            {asset.url.match(/\.(mp4|mov)$/i) ? (
              <video src={asset.url} autoPlay loop muted playsInline preload="metadata" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none" />
            ) : (
              <img src={asset.url} alt={`Recent sliding window repair work in Powai ${i}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none" loading="lazy" decoding="async" />
            )}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
          </div>
        ))}
      </>
    );

    return (
      <div className="relative flex overflow-hidden w-full py-2">
        <div 
          className={`flex w-max gap-4 pause-on-hover ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}`}
          style={{ animationDuration: '60s' }}
        >
          {content}
          {content}
        </div>
      </div>
    );
  };

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedAsset) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedAsset]);

  return (
    <section className="reveal-section py-20 sm:py-28 overflow-hidden bg-secondary/30 relative">
      <Heading sub="We document everything. Here is recent footage straight from our technicians' phones while out on the job in Mumbai.">
        RAW, UNFILTERED PROOF FROM THE FIELD.
      </Heading>

      <div className="mt-12 flex flex-col gap-4">
        <MarqueeRow items={row1} direction="left" />
        <MarqueeRow items={row2} direction="right" />
      </div>

      {selectedAsset && typeof document !== 'undefined' && createPortal(
        <div 
          className="fixed inset-0 z-[9999] bg-black/95 flex flex-col items-center justify-center p-4 cursor-pointer backdrop-blur-sm"
          onClick={() => setSelectedAsset(null)}
        >
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setSelectedAsset(null);
            }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-auto sm:bottom-auto sm:top-6 sm:right-8 z-[10000] flex items-center gap-2 text-white bg-black/80 sm:bg-white/10 hover:bg-white/25 px-6 py-3 sm:px-4 sm:py-2 rounded-full backdrop-blur-md transition-colors shadow-2xl border border-white/20 whitespace-nowrap"
          >
            <span className="font-bold tracking-wide text-sm sm:text-base">Close</span>
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div 
            className="relative max-w-6xl max-h-[85vh] w-full h-full flex items-center justify-center cursor-default mt-10 sm:mt-0"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedAsset.match(/\.(mp4|mov)$/i) ? (
              <video 
                src={selectedAsset} 
                autoPlay 
                loop 
                muted 
                playsInline 
                preload="metadata"
                className="max-w-full max-h-[85vh] object-contain rounded-lg cursor-pointer shadow-2xl"
                onClick={(e) => {
                  const v = e.currentTarget;
                  if (v.paused) v.play();
                  else v.pause();
                }}
              />
            ) : (
              <img 
                src={selectedAsset} 
                alt="Enlarged view" 
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
            )}
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
