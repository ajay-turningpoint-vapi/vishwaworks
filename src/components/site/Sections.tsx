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
      <h2 className="text-4xl font-black uppercase leading-[1.25] tracking-tight text-primary font-display sm:text-6xl drop-shadow-sm pb-1">
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
      <Heading sub="Does any of this sound familiar?">
        IS YOUR WINDOW OR SLIDING DOOR <span className="highlighter px-2 text-black">DOING THIS?</span>
      </Heading>

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
            className="tap group rounded-2xl border-2 border-red-500/10 bg-card p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-xl hover:shadow-red-500/10 sm:p-5"
          >
            <span className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-red-500/10 text-xl sm:text-2xl transition-transform group-hover:scale-110 group-hover:bg-red-500/20">
              ❌
            </span>
            <h3 className="mt-3 text-sm font-black text-primary font-display uppercase tracking-tight sm:text-base">
              {p.title}
            </h3>
            <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground font-medium sm:text-sm">
              {p.desc}
            </p>
          </a>
        ))}
      </div>

      <div className="mt-16 text-center flex flex-col items-center">
        <h3 className="text-xl sm:text-2xl font-black uppercase text-primary font-display mb-2">
          Not sure what the exact problem is?
        </h3>
        <p className="text-lg sm:text-xl font-bold mb-8">
          <span className="highlighter px-2 text-black">That's completely fine.</span> 👇
        </p>
        <WhatsAppButton location="problem_section" className="cta-live shadow-[var(--shadow-cta)] transform hover:scale-105 transition-transform" />
      </div>
    </section>
  );
}

/* ---------------- 7. REMOVE UNCERTAINTY ---------------- */

export function NoNeedToKnow() {
  return (
    <section className="reveal-section bg-primary py-16 text-primary-foreground sm:py-24">
      <div className="mx-auto max-w-2xl px-4 text-center">
        <h2 className="text-4xl font-black uppercase leading-[1.1] tracking-tight font-display sm:text-6xl text-white">
          You don't need to know
          <br />
          <span className="text-accent drop-shadow-md">what's broken.</span>
        </h2>
        <div className="mt-10 flex flex-col gap-4 max-w-md mx-auto">
          {[
            "Take a photo.",
            "Send it to us.",
            "We'll help you understand what may be wrong.",
          ].map((t) => (
            <div
              key={t}
              className="rounded-2xl bg-white/5 border border-white/10 px-6 py-6 text-center shadow-lg transition-transform hover:bg-white/10"
            >
              <p className="text-[17px] font-bold text-white leading-snug">
                {t}
              </p>
            </div>
          ))}
        </div>
        <WhatsAppButton location="uncertainty" className="mt-10 cta-live scale-105" />
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
    t: "Know what's wrong",
    d: "We will look at your photo and tell you exactly how to fix it.",
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
    <section className="reveal-section mx-auto max-w-5xl px-4 py-20 sm:py-28 bg-secondary/5 rounded-3xl my-10 border border-border/50">
      <Heading>
        Get help without knowing <span className="highlighter px-2 text-black">fancy technical words.</span>
      </Heading>

      <div className="mt-16 mx-auto max-w-md">
        <ol className="relative">
          <div className="absolute left-[27px] top-6 bottom-6 w-0.5 bg-border/80 hidden sm:block"></div>
          <div className="absolute left-[27px] top-6 bottom-6 w-0.5 bg-border/80 sm:hidden"></div>
          
          <div className="space-y-12">
            {steps.map((s, i) => (
              <li key={s.t} className="relative flex gap-6 sm:gap-8 items-start group">
                <span className="relative z-10 flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-full bg-[#111827] text-white shadow-xl transition-transform duration-300 group-hover:scale-110 border-4 border-white">
                  <s.icon aria-hidden="true" className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2} />
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-accent text-[13px] sm:text-[15px] font-black text-black shadow-sm ring-2 ring-white">
                    {i + 1}
                  </span>
                </span>
                <div className="pt-2 sm:pt-3">
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight text-primary font-display uppercase">{s.t}</h3>
                  <p className="mt-2 text-[15px] sm:text-[17px] leading-relaxed text-slate-600 font-medium">{s.d}</p>
                </div>
              </li>
            ))}
          </div>
        </ol>
      </div>

      <div className="mt-16 text-center">
        <WhatsAppButton location="how_it_works" className="cta-live scale-105">SEND MY PHOTO</WhatsAppButton>
      </div>
    </section>
  );
}

/* ---------------- 9. SERVICES ---------------- */

export function Services() {
  return (
    <section id="services" className="reveal-section bg-secondary/5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <Heading sub="From stuck sliding doors to brand new safety nets. We fix it all without the headache.">
          EVERYTHING <span className="highlighter px-2 text-black">WE FIX FOR YOU.</span>
        </Heading>

        <div className="mt-16 space-y-20">
          {serviceCategories.map((category) => (
            <div key={category.category}>
              <h3 className="mb-8 text-[26px] sm:text-[32px] font-black uppercase tracking-tight text-primary font-display border-b-4 border-accent pb-2 inline-block drop-shadow-sm">
                {category.category}
              </h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((s) => (
                  <div
                    key={s.name}
                    className="tap flex flex-col rounded-3xl border-2 border-border/60 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl shadow-md"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/20">
                      <Wrench
                        aria-hidden="true"
                        className="h-6 w-6 text-primary"
                        strokeWidth={2.5}
                      />
                    </span>
                    <h3 className="mt-5 text-[18px] font-black text-primary leading-tight tracking-wide">{s.name}</h3>
                    <p className="mt-3 flex-1 text-[15px] font-medium leading-relaxed text-slate-600">
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
                      className="mt-6 inline-flex min-h-[50px] items-center justify-center rounded-xl bg-whatsapp px-4 text-[15px] font-black tracking-wide text-whatsapp-foreground tap shadow-[var(--shadow-cta)] hover:bg-whatsapp/90 transition-colors"
                    >
                      SEND A PHOTO ➔
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
      <div className="rounded-3xl border-4 border-red-500 bg-yellow-50/50 p-6 text-center sm:p-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-1.5 font-bold text-xs sm:text-sm uppercase tracking-widest rounded-bl-xl shadow-md">Risk-Free</div>
        <h2 className="text-4xl font-black uppercase leading-[1.1] text-black font-display sm:text-6xl tracking-tight mt-4 sm:mt-0">
          The "No Fix, No Fee" <br className="hidden sm:block" /><span className="text-red-600 drop-shadow-sm">Iron-Clad Guarantee</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-slate-800 sm:text-[19px] font-medium">
          You're busy. You don't have time to chase unreliable mistris who do trial-and-error 'jugaad' on your expensive windows. 
          <br className="hidden sm:block" />
          Send us a quick WhatsApp photo for a zero-BS diagnosis. Here is what you get:
        </p>
        
        <div className="mt-8 mx-auto max-w-md bg-white rounded-2xl p-6 text-left border border-border shadow-sm">
          <ul className="space-y-4">
            <li className="flex justify-between items-center pb-4 border-b border-border/60">
              <span className="text-[15px] font-bold text-primary">👉 Comprehensive<br/>WhatsApp Diagnosis</span>
              <div className="text-right">
                <span className="block text-[13px] text-muted-foreground line-through">Value:</span>
                <span className="block text-[15px] text-muted-foreground line-through">₹500</span>
              </div>
            </li>
            <li className="flex justify-between items-center pb-4 border-b border-border/60">
              <span className="text-[15px] font-bold text-primary">₹ BONUS 1: Track & Roller<br/>Health Check</span>
              <div className="text-right">
                <span className="block text-[13px] text-muted-foreground line-through">Value:</span>
                <span className="block text-[15px] text-muted-foreground line-through">₹800</span>
              </div>
            </li>
            <li className="flex justify-between items-center pb-4 border-b border-border/60">
              <span className="text-[15px] font-black text-green-600">✅ The "No Fix, No Fee"<br/>Guarantee</span>
              <span className="text-[15px] font-black text-accent drop-shadow-sm">PRICELESS</span>
            </li>
            <li className="flex justify-between items-center pt-2">
              <span className="text-[17px] font-black text-primary">Total Value:</span>
              <span className="text-[17px] font-black text-primary line-through drop-shadow-sm">₹1,300</span>
            </li>
            <li className="flex justify-between items-center bg-orange-50/50 p-4 rounded-xl border-2 border-accent/20 mt-2">
              <span className="text-[19px] font-black text-primary leading-tight">Your Price<br/>Today:</span>
              <div className="text-right flex flex-col items-end">
                <span className="text-2xl font-black text-black highlighter px-2 leading-none">₹0</span>
                <span className="text-2xl font-black text-black highlighter px-2 leading-tight mt-1">(FREE)</span>
              </div>
            </li>
          </ul>
        </div>
        
        <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-slate-700 font-medium">
          If you decide to book us, and we can't fix the problem, <b className="text-red-600">you don't pay a single rupee.</b> No excuses. No hidden visiting charges. Just honest, professional work.
        </p>
        
        <div className="flex justify-center mt-6 text-[40px] animate-bounce drop-shadow-sm">
          👇
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
import wsImg1 from "@/assets/workshop/WhatsApp Image 2026-09-05 at 1.59.11 PM.jpeg";
import wsImg2 from "@/assets/workshop/WhatsApp Image 2026-09-05 at 1.59.13 PM.jpeg";
import wsImg3 from "@/assets/workshop/WhatsApp Image 2026-09-05 at 1.59.14 PM (1).jpeg";
import wsImg4 from "@/assets/workshop/WhatsApp Image 2026-09-05 at 1.59.14 PM.jpeg";
import wsImg5 from "@/assets/workshop/WhatsApp Image 2026-09-05 at 1.59.28 PM (3).jpeg";
import wsImg6 from "@/assets/workshop/WhatsApp Image 2026-09-05 at 13.59.15.jpeg";
import wsImg7 from "@/assets/workshop/WhatsApp Image 2026-09-05 at 13.59.17 (1).jpeg";
import wsImg8 from "@/assets/workshop/WhatsApp Image 2026-09-05 at 13.59.18.jpeg";
import wsImg9 from "@/assets/workshop/WhatsApp Image 2026-09-05 at 13.59.19 (1).jpeg";
import founderImage from "@/assets/sumit_vishwakarma.png";

const galleryItems: { title: string; stages: [string, string, string] }[] = [
  {
    title: "Stuck Window ➔ Slides with 1 Finger",
    stages: [rollerBefore, rollerDuring, rollerAfter],
  },
  {
    title: "Broken Track ➔ Safe & Smooth",
    stages: [trackBefore, trackDuring, trackAfter],
  },
  {
    title: "Broken Glass ➔ Brand New Glass",
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
    <section id="our-work" className="reveal-section mx-auto max-w-4xl px-4 py-20 sm:py-28">
      <Heading sub="Slide to see how we fix stuck windows and make them slide with just one finger.">
        THIS IS <span className="highlighter px-2 text-black">HOW WE FIX IT.</span>
      </Heading>

      <div className="mt-14 grid gap-16 grid-cols-1">
        {galleryItems.map((item) => (
          <div key={item.title} className="flex flex-col gap-6">
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-primary text-center font-display tracking-wide">{item.title}</h3>
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 w-full">
              <BeforeAfterSlider 
                beforeImage={item.stages[0]} 
                afterImage={item.stages[2]} 
                label={item.title} 
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

interface WorkshopShotItem {
  label: string;
  src: string;
  category: "all" | "workshop" | "sliding" | "ventilators";
  tag: string;
}

const workshopShots: WorkshopShotItem[] = [
  {
    label: "Powai workshop desk & aluminium section sample profile display",
    src: wsWorkshopShelf,
    category: "workshop",
    tag: "Powai Workshop",
  },
  {
    label: "Anodized bronze casement window frame shrink-wrapped for dispatch",
    src: wsImg1,
    category: "workshop",
    tag: "Fabricated Frame",
  },
  {
    label: "Bathroom ventilator window with exhaust fan cutout & glass louvers",
    src: wsImg2,
    category: "ventilators",
    tag: "Ventilator & Louvers",
  },
  {
    label: "3-track sliding balcony window with stainless steel mosquito mesh",
    src: wsImg3,
    category: "sliding",
    tag: "3-Track Sliding",
  },
  {
    label: "Kitchen utility window with chimney exhaust duct cutout & mesh",
    src: wsImg4,
    category: "ventilators",
    tag: "Kitchen Exhaust",
  },
  {
    label: "Fabricated aluminium sliding frames & glass panels ready on-site",
    src: wsImg5,
    category: "workshop",
    tag: "On-Site Stacking",
  },
  {
    label: "Slim frosted glass privacy ventilator window with black aluminium frame",
    src: wsImg6,
    category: "ventilators",
    tag: "Slim Ventilator",
  },
  {
    label: "Granite framed bathroom ventilator with exhaust cutout & frosted casement",
    src: wsImg7,
    category: "ventilators",
    tag: "Exhaust Cutout",
  },
  {
    label: "White powder-coated bathroom casement window with frosted glass",
    src: wsImg8,
    category: "ventilators",
    tag: "White Casement",
  },
  {
    label: "Custom circular arched window with fitted safety grill & mesh",
    src: wsImg9,
    category: "ventilators",
    tag: "Circular Window",
  },
  {
    label: "L-shaped corner sliding window with invisible safety grill wires",
    src: wsCornerWindow,
    category: "sliding",
    tag: "Corner Window",
  },
  {
    label: "Champagne anodized 3-track sliding window with marble sill & lock",
    src: wsFinishedCloseup,
    category: "sliding",
    tag: "3-Track Sliding",
  },
  {
    label: "5-panel floor-to-ceiling sliding glass partition & door installation",
    src: wsLargeInstallation,
    category: "sliding",
    tag: "Glass Partition",
  },
  {
    label: "Wooden-finish sliding balcony window with pigeon net, high-rise view",
    src: wsSkylineView,
    category: "sliding",
    tag: "Wooden Finish Sliding",
  },
];

export function WorkshopProof() {
  const [activeTab, setActiveTab] = useState<"all" | "workshop" | "sliding" | "ventilators">("all");
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxShot, setLightboxShot] = useState<WorkshopShotItem | null>(null);

  const filteredShots = activeTab === "all" 
    ? workshopShots 
    : workshopShots.filter((s) => s.category === activeTab);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : filteredShots.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < filteredShots.length - 1 ? prev + 1 : 0));
  };

  const handleTabChange = (tab: "all" | "workshop" | "sliding" | "ventilators") => {
    setActiveTab(tab);
    setActiveIndex(0);
  };

  // Prevent background scroll when lightbox is open
  useEffect(() => {
    if (lightboxShot) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [lightboxShot]);

  return (
    <section className="reveal-section bg-secondary/10 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <Heading sub="Tired of apps sending random guys to your home? We have a real, physical workshop in Powai. You know exactly who is fixing your window.">
          NO FACELESS APPS. <br className="hidden sm:block" />JUST <span className="highlighter px-2 text-black">REAL PEOPLE & PROOF.</span>
        </Heading>

        {/* Filter categories */}
        <div className="mt-8 flex items-center overflow-x-auto no-scrollbar scroll-smooth gap-2 pb-2 sm:pb-0 sm:flex-wrap sm:justify-center sm:overflow-visible -mx-4 px-4 sm:mx-0 sm:px-0">
          {[
            { id: "all", label: `All Photos (${workshopShots.length})` },
            { id: "workshop", label: `Workshop & Stock (${workshopShots.filter(s => s.category === "workshop").length})` },
            { id: "sliding", label: `Sliding & Balconies (${workshopShots.filter(s => s.category === "sliding").length})` },
            { id: "ventilators", label: `Ventilators & Exhaust (${workshopShots.filter(s => s.category === "ventilators").length})` },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleTabChange(cat.id as any)}
              className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-xs sm:text-sm font-black transition-all ${
                activeTab === cat.id
                  ? "bg-primary text-white shadow-md scale-105"
                  : "bg-white/80 text-foreground/80 hover:bg-white border border-border/60 hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
        
        {/* Stacked Carousel for Mobile */}
        <div className="relative h-[360px] w-full overflow-hidden sm:hidden mt-8">
          {filteredShots.map((shot, idx) => {
            const offset = idx - activeIndex;
            // Render the active image and up to 3 next images
            if (offset < 0 || offset > 3) return null;

            return (
              <figure
                key={shot.label + idx}
                className="absolute overflow-hidden rounded-2xl border border-border bg-card shadow-2xl transition-all duration-500 ease-out cursor-pointer"
                style={{
                  left: offset === 0 ? "0%" : `calc(70% + ${offset * 8}%)`,
                  width: offset === 0 ? "82%" : "30%",
                  height: offset === 0 ? "100%" : `${100 - offset * 6}%`,
                  top: offset === 0 ? "0%" : `${offset * 3}%`,
                  zIndex: 40 - offset,
                  opacity: offset === 3 ? 0 : 1,
                }}
                onClick={() => {
                  if (offset === 0) {
                    setLightboxShot(shot);
                  } else {
                    handleNext();
                  }
                }}
              >
                <img
                  src={shot.src}
                  alt={shot.label}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
                <span className="absolute top-3 right-3 bg-black/70 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-sm">
                  {shot.tag}
                </span>
                {offset === 0 && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4">
                    <figcaption className="text-sm font-bold text-white leading-tight">
                      {shot.label}
                    </figcaption>
                    <p className="text-[11px] text-white/70 mt-1 flex items-center gap-1 font-medium">
                      <span>Tap to zoom</span> 🔍
                    </p>
                  </div>
                )}
              </figure>
            );
          })}
        </div>

        {/* Controller buttons for mobile */}
        <div className="mt-5 flex items-center justify-between sm:hidden">
          <div className="text-xs font-bold text-muted-foreground">
            Photo {activeIndex + 1} of {filteredShots.length}
          </div>
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-foreground shadow-md transition-all hover:bg-secondary border border-border/80"
              aria-label="Previous photo"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white shadow-md transition-all hover:bg-primary/90"
              aria-label="Next photo"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
          {filteredShots.map((shot) => (
            <figure
              key={shot.label}
              onClick={() => setLightboxShot(shot)}
              className="tap group relative cursor-pointer overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-secondary/30">
                <img
                  src={shot.src}
                  alt={shot.label}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 right-3 bg-black/75 text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-md shadow-sm">
                  {shot.tag}
                </span>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm">
                    Click to enlarge 🔍
                  </span>
                </div>
              </div>
              <figcaption className="p-4 text-[13px] font-bold text-primary leading-snug flex-1 flex items-center">
                {shot.label}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Lightbox Modal for Full View */}
        {lightboxShot && typeof document !== "undefined" && createPortal(
          <div
            className="fixed inset-0 z-[9999] bg-black/95 flex flex-col items-center justify-center p-4 cursor-pointer backdrop-blur-md"
            onClick={() => setLightboxShot(null)}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxShot(null);
              }}
              className="absolute top-6 right-6 z-[10000] flex items-center gap-2 text-white bg-white/15 hover:bg-white/30 px-4 py-2 rounded-full backdrop-blur-md transition-colors border border-white/20 shadow-2xl"
            >
              <span className="font-bold text-sm">Close</span>
              <X className="w-5 h-5" />
            </button>

            <div
              className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative max-h-[70vh] rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-black">
                <img
                  src={lightboxShot.src}
                  alt={lightboxShot.label}
                  className="max-h-[70vh] max-w-full object-contain"
                />
              </div>
              <div className="mt-4 text-center max-w-2xl px-4">
                <span className="inline-block bg-accent text-black font-black text-xs uppercase px-3 py-1 rounded-full mb-2">
                  {lightboxShot.tag}
                </span>
                <p className="text-white text-base sm:text-lg font-bold">
                  {lightboxShot.label}
                </p>
                <div className="mt-4 flex justify-center">
                  <WhatsAppButton 
                    location="workshop_lightbox" 
                    className="scale-95"
                  >
                    SEND A PHOTO ON WHATSAPP
                  </WhatsAppButton>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
      </div>
    </section>
  );
}

/* ---------------- 13. WHY CHOOSE US ---------------- */

const reasons = [
  { t: "We Are Local", d: "Serving premium apartments across Powai, Bandra, and South Mumbai." },
  {
    t: "Zero Technical BS",
    d: "Don't know the parts? Just send a WhatsApp photo and we figure it out.",
  },
  {
    t: "We Fix, Not Force",
    d: "Other guys force you to buy new windows. We fix your old ones to save you money.",
  },
  { t: "100% Honest Proof", d: "No hidden costs. No fake stock photos. What you see is exactly what you get." },
];

export function WhyChooseUs() {
  return (
    <section className="reveal-section mx-auto max-w-4xl px-4 py-20 sm:py-28">
      <Heading>WHY MUMBAI <span className="highlighter px-2 text-black">CHOOSES US.</span></Heading>
      <div className="mt-14 flex flex-col gap-8 max-w-xl mx-auto">
        {reasons.map((r) => (
          <div key={r.t} className="flex gap-4 items-start group">
            <span className="mt-1.5 h-3 w-3 shrink-0 rounded-full bg-accent drop-shadow-sm group-hover:scale-125 transition-transform" />
            <div>
              <h3 className="text-xl sm:text-2xl font-black uppercase text-primary font-display tracking-wide">{r.t}</h3>
              <p className="mt-1.5 text-[16px] leading-relaxed text-slate-700 font-medium">{r.d}</p>
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
        <Heading sub="Serving homeowners in Powai, Bandra, Worli, South Mumbai, and premium complexes everywhere in between. When you search for 'sliding window repair near me' or 'sliding glass door repair near me', we are your trusted local experts.">
          FAST, ON-SITE REPAIRS <br className="hidden sm:block" />ACROSS <span className="highlighter px-2 text-black">MUMBAI.</span>
        </Heading>
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
          <span className="font-bold text-foreground text-[16px]">{review.name}</span>
          <div className="flex items-center justify-center rounded-full bg-green-500 w-4 h-4">
            <Check className="w-3 h-3 text-white" strokeWidth={4} />
          </div>
          <span className="text-[12px] text-muted-foreground ml-1">Verified Reviewer</span>
        </div>
        <div className="flex gap-1 mb-3">
          {[...Array(review.rating)].map((_, i) => (
            <svg key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <h4 className="text-[18px] font-bold text-foreground mb-2 leading-tight">{review.title}</h4>
        <p className="text-[14px] text-muted-foreground leading-relaxed line-clamp-4">{review.text}</p>
      </div>
      <div className="mt-4 flex justify-end">
        <span className="text-[12px] text-muted-foreground">{review.date}</span>
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
    <section id="faq" className="reveal-section bg-secondary/5 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4">
        <Heading sub="Read the answers to our most common questions before messaging us.">
          YOUR QUESTIONS, <span className="highlighter px-2 text-black">ANSWERED.</span>
        </Heading>
        <Accordion
          type="single"
          collapsible
          className="mt-14"
          onValueChange={(v) => v && track("faq_opened", { question: v })}
        >
          {faqs.map((f) => (
            <AccordionItem key={f.q} value={f.q} className="border-primary/20 py-2">
              <AccordionTrigger className="text-left text-xl sm:text-2xl font-black uppercase text-primary font-display hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-[17px] leading-relaxed text-slate-700 font-medium pt-2 pb-6">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}




/* ---------------- 18. US VS THEM ---------------- */

export function UsVsThem() {
  return (
    <section className="reveal-section bg-secondary/20 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4">
        <Heading sub="Why Mumbai families choose us instead of regular handymen.">
          <span className="font-display font-black tracking-tight text-3xl sm:text-5xl uppercase">Vishwa Windows <span className="text-red-500 px-2 line-through">VS.</span> The Local Mistri</span>
        </Heading>
        <div className="mt-12 overflow-hidden rounded-3xl border-2 border-border bg-card shadow-xl shadow-accent/5">
          <div className="grid grid-cols-2 divide-x divide-border sm:grid-cols-3">
            <div className="hidden bg-secondary/20 p-6 sm:flex items-center justify-center">
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Feature</p>
            </div>
            <div className="bg-red-50/80 p-5 sm:p-6 text-center border-b-2 border-red-100">
              <p className="text-xl sm:text-2xl font-black text-red-600 font-display uppercase tracking-tight">Local Mistri</p>
            </div>
            <div className="bg-orange-50/80 p-5 sm:p-6 text-center border-b-2 border-orange-200">
              <p className="text-xl sm:text-2xl font-black text-yellow-600 font-display uppercase tracking-tight drop-shadow-sm">Vishwa Windows</p>
            </div>
          </div>
          <div className="divide-y divide-border">
            {[
              {
                f: "Pricing",
                bad: "Quotes low, then adds charges for extra parts",
                good: "Clear, upfront diagnosis",
              },
              {
                f: "Approach",
                bad: "Always tells you to change the whole frame",
                good: "Repair-first (saves you money)",
              },
              {
                f: "Guarantee",
                bad: "Does 'jugaad' fixes, then stops answering calls",
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
                className="grid grid-cols-2 divide-x divide-border sm:grid-cols-3 group hover:bg-muted/30 transition-colors"
              >
                <div className="hidden p-6 sm:flex items-center justify-center">
                  <p className="text-[13px] font-bold uppercase tracking-wider text-primary/60">{r.f}</p>
                </div>
                <div className="flex flex-col items-center justify-center p-6 text-center bg-red-50/20">
                  <span className="mb-3 sm:hidden text-[11px] font-bold uppercase tracking-wider text-primary/50">{r.f}</span>
                  <X className="mb-3 h-8 w-8 text-red-500 drop-shadow-sm" strokeWidth={2.5} />
                  <p className="text-[14px] font-medium text-gray-500 leading-snug">{r.bad}</p>
                </div>
                <div className="flex flex-col items-center justify-center p-6 text-center bg-orange-50/30">
                  <span className="mb-3 sm:hidden text-[11px] font-bold uppercase tracking-wider text-primary/50">{r.f}</span>
                  <Check className="mb-3 h-8 w-8 text-accent drop-shadow-md" strokeWidth={3.5} />
                  <p className="text-[16px] font-black text-gray-900 leading-snug tracking-tight">{r.good}</p>
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
    <section className="reveal-section mx-auto max-w-3xl px-4 py-20 sm:py-28 bg-secondary/5 rounded-3xl my-10 border border-border/50">
      <Heading sub="We don't just fix windows and doors. We restore your peace of mind.">
        What happens after a repair?
      </Heading>
      <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
        {[
          "Effortless Glide: Open heavy sliding doors or windows with just one finger.",
          "Save on AC Bills: We seal the tracks so your expensive cooling doesn't escape.",
          "Sleep Peacefully: No more annoying rattling sounds during monsoon winds.",
          "Child Safety: Secure locks and sturdy tracks mean your kids are safe.",
          "Save ₹15,000+: By replacing the rollers instead of the entire frame.",
          "No Mess, No Stress: Professional service that doesn't leave your home looking like a construction site."
        ].map((b, i) => {
          const [title, desc] = b.split(": ");
          return (
            <div key={i} className="flex gap-4 items-start group">
              <Check className="mt-0.5 h-6 w-6 shrink-0 text-accent drop-shadow-sm group-hover:scale-110 transition-transform" strokeWidth={3} />
              <p className="text-[16px] leading-relaxed text-slate-700">
                <strong className="font-bold text-slate-900">{title}:</strong> {desc}
              </p>
            </div>
          );
        })}
      </div>
      <div className="mt-12 text-center">
        <WhatsAppButton location="benefits" className="cta-live scale-105" />
      </div>
    </section>
  );
}

/* ---------------- 19.5 DISQUALIFIERS ---------------- */

export function Disqualifiers() {
  return (
    <section className="reveal-section bg-secondary/5 py-20 sm:py-28 border-y border-border/50">
      <div className="mx-auto max-w-5xl px-4">
        <div className="grid gap-10 md:grid-cols-2">
          
          {/* Who This Is For Card */}
          <div className="rounded-3xl border-[3px] border-[#22c55e]/40 bg-white p-8 shadow-xl relative overflow-hidden flex flex-col">
             <div className="absolute top-0 right-0 w-24 h-24 bg-[#22c55e]/10 rounded-bl-[100px] -z-10"></div>
             <h3 className="text-3xl sm:text-4xl font-black uppercase text-primary mb-8 font-display tracking-tight flex items-center gap-3 border-b-2 border-border/50 pb-4">
               <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#22c55e]/20 shrink-0">
                 <Check className="h-7 w-7 text-[#16a34a]" strokeWidth={3} />
               </span>
               WHO IT'S FOR
             </h3>
             <ul className="space-y-6">
               <li className="flex items-start gap-4">
                 <Check className="h-7 w-7 text-[#16a34a] shrink-0 mt-0.5" strokeWidth={3} />
                 <span className="text-[17px] leading-relaxed text-slate-700 font-medium">Homeowners in Powai, Bandra, Worli & South Mumbai who value premium, professional work.</span>
               </li>
               <li className="flex items-start gap-4">
                 <Check className="h-7 w-7 text-[#16a34a] shrink-0 mt-0.5" strokeWidth={3} />
                 <span className="text-[17px] leading-relaxed text-slate-700 font-medium">People who want a permanent fix that lasts for years, not weeks.</span>
               </li>
               <li className="flex items-start gap-4">
                 <Check className="h-7 w-7 text-[#16a34a] shrink-0 mt-0.5" strokeWidth={3} />
                 <span className="text-[17px] leading-relaxed text-slate-700 font-medium">Those who appreciate 100% transparent pricing with zero hidden surprises.</span>
               </li>
             </ul>
          </div>
          
          {/* Who This Is NOT For Card */}
          <div className="rounded-3xl border-[3px] border-[#ef4444]/40 bg-white p-8 shadow-xl relative overflow-hidden flex flex-col">
             <div className="absolute top-0 right-0 w-24 h-24 bg-[#ef4444]/10 rounded-bl-[100px] -z-10"></div>
             <h3 className="text-3xl sm:text-4xl font-black uppercase text-primary mb-8 font-display tracking-tight flex items-center gap-3 border-b-2 border-border/50 pb-4">
               <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ef4444]/20 shrink-0">
                 <X className="h-7 w-7 text-[#dc2626]" strokeWidth={3} />
               </span>
               WHO IT'S NOT FOR
             </h3>
             <ul className="space-y-6">
               <li className="flex items-start gap-4">
                 <X className="h-7 w-7 text-[#dc2626] shrink-0 mt-0.5" strokeWidth={3} />
                 <span className="text-[17px] leading-relaxed text-slate-700 font-medium">People looking for a cheap 'jugaad' (band-aid fix) from a local carpenter.</span>
               </li>
               <li className="flex items-start gap-4">
                 <X className="h-7 w-7 text-[#dc2626] shrink-0 mt-0.5" strokeWidth={3} />
                 <span className="text-[17px] leading-relaxed text-slate-700 font-medium">Those who don't care if cheap generic parts break again in a month.</span>
               </li>
               <li className="flex items-start gap-4">
                 <X className="h-7 w-7 text-[#dc2626] shrink-0 mt-0.5" strokeWidth={3} />
                 <span className="text-[17px] leading-relaxed text-slate-700 font-medium">Landlords looking for the absolute cheapest fix just to pass an inspection.</span>
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
              alt={`${business.founder} - Founder of ${business.name}`} 
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-top grayscale transition-all duration-700 hover:grayscale-0"
            />
          </div>
          <div>
            <h2 className="text-3xl font-black uppercase text-primary-foreground font-display sm:text-4xl">
              <span className="highlighter px-2 text-black">WHY I STARTED THIS</span>
            </h2>
            <div className="mt-8 space-y-6 text-[17px] leading-relaxed text-primary-foreground/90">
              <p>
                "I was tired of seeing Mumbai families being tricked by local carpenters. They would call someone to fix a simple stuck window or heavy sliding door, and the mistri would quote <b className="text-red-400 font-black">₹15,000 to replace the whole aluminium frame.</b>"
              </p>
              <p className="text-xl sm:text-2xl font-black text-white border-l-4 border-accent pl-5 py-1">
                "The truth? 90% of the time, it's just a worn-out ₹500 roller or a bent track."
              </p>
              <p>
                "I started Vishwa Windows with a simple mission: <b className="text-accent font-black">Repair first, replace only when absolutely necessary.</b> We give you honest advice, upfront pricing, and a 'No Fix, No Fee' guarantee. It's how service should be."
              </p>
            </div>
            <p className="mt-8 text-xl font-bold text-white font-display uppercase tracking-wider">— {business.founder}, Founder</p>
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
        <h2 className="text-4xl font-extrabold uppercase leading-tight sm:text-6xl font-display">
          STOP STRUGGLING WITH <br />
          <span className="text-accent">STUCK WINDOWS.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-[18px] text-primary-foreground/90 font-medium">
          Take a photo and send it on WhatsApp right now. We'll give you a free, honest diagnosis before you commit.
        </p>
        
        <div className="mt-10 flex flex-col justify-center gap-4">
          <div className="w-full flex justify-center text-[40px] animate-bounce drop-shadow-sm">
            👇
          </div>
          <WhatsAppButton location="final_cta" className="cta-live w-full" />
          <CallButton
            location="final_cta"
            className="border-primary-foreground/30 bg-transparent text-primary-foreground w-full"
          />
        </div>
        
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-[13px] font-bold uppercase tracking-wider text-primary-foreground/90">
          <div className="flex items-center gap-1.5">
            <Check className="h-5 w-5 text-accent" strokeWidth={3} />
            <span>4.9/5 Google Rating</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Check className="h-5 w-5 text-accent" strokeWidth={3} />
            <span>100% Risk-Free Guarantee</span>
          </div>
        </div>

        <div className="mt-14 mx-auto max-w-2xl text-left bg-primary-foreground/5 p-6 rounded-xl border border-primary-foreground/10">
          <p className="text-xl mb-3"><span className="bg-accent px-2 py-0.5 text-black font-black font-display uppercase tracking-wider">MY PROMISE TO YOU:</span></p>
          <p className="text-[16px] text-primary-foreground/90 leading-relaxed font-medium">
            Don't forget, you have absolutely zero risk. Send us a photo right now, and if we come over and can't figure out the problem or fix your window, <span className="font-bold text-accent">you don't pay a single rupee for the visit</span>. PLUS, if the exact same repair fails within 6 months, we will come back and fix it again entirely for FREE.
          </p>
          <p className="mt-4 text-[15px] text-primary-foreground/70 leading-relaxed">
            We deliberately limit how many residential visits we take on each day so every repair gets proper attention. Tap the WhatsApp button above to lock in today's slot.
          </p>
        </div>
        
        <p className="mt-10 text-sm text-primary-foreground/50 font-bold uppercase tracking-widest">{business.areaLine}</p>
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
const workshopGlob = import.meta.glob<{ default: string }>('@/assets/workshop/*.{jpeg,jpg,png}', { eager: true });
const newVideosGlob = import.meta.glob<{ default: string }>('@/assets/videos/*.{mov,mp4}', { eager: true });
const newImages = Object.keys(newImagesGlob).map(key => ({ path: key, url: newImagesGlob[key].default }));
const workshopImages = Object.keys(workshopGlob).map(key => ({ path: key, url: workshopGlob[key].default }));
const newVideos = Object.keys(newVideosGlob).map(key => ({ path: key, url: newVideosGlob[key].default }));

export function RealWorkGallery() {
  const [selectedAsset, setSelectedAsset] = useState<string | null>(null);

  const allAssets = [...newVideos, ...newImages, ...workshopImages];
  const row1 = allAssets.slice(0, Math.ceil(allAssets.length / 2));
  const row2 = allAssets.slice(Math.ceil(allAssets.length / 2));

  const MarqueeRow = ({ items, direction = "left" }: { items: any[], direction?: "left" | "right" }) => {
    const content = (
      <>
        {items.map((asset, i) => (
          <div 
            key={i} 
            onClick={() => setSelectedAsset(asset.url)}
            className="flex-none w-[280px] h-[360px] md:w-[320px] md:h-[420px] relative rounded-[32px] overflow-hidden border border-border/50 cursor-pointer"
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
      <div className="relative flex overflow-hidden w-full py-6">
        <div 
          className={`flex w-max gap-5 pause-on-hover ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}`}
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
    <section className="reveal-section py-20 sm:py-28 overflow-hidden bg-secondary/10 relative">
      <Heading sub="No fake photos. Just real videos of our team fixing stuck windows, stopping rain leaks, and blocking out Mumbai dust—without breaking your walls.">
        REAL, <span className="highlighter px-2 text-black">UNCUT PROOF</span> <br className="hidden sm:block" />FROM ACTUAL MUMBAI HOMES.
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
