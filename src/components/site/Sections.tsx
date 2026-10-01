import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Link } from "@tanstack/react-router";
import { getAreaByName } from "@/config/areas";
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
  Play,
  MapPin,
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
    <div className="mx-auto max-w-3xl text-center px-2">
      <h2 className="section-h2 text-primary drop-shadow-sm pb-1">
        {children}
      </h2>
      {sub ? (
        <p className="section-sub mx-auto mt-3 max-w-xl text-muted-foreground font-medium">
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
      <Heading sub="You shouldn't need gym strength or both hands just to open a balcony window. Tap your headache below for an instant WhatsApp diagnosis:">
        WHICH OF THESE DAILY HEADACHES <br className="hidden sm:block" />IS <span className="highlighter px-2 text-black">DRIVING YOU CRAZY?</span>
      </Heading>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {problems.map((p) => (
          <a
            key={p.title}
            href={whatsappLink(
              `Hi, I have a window problem in Mumbai. Problem: ${p.title}. I am sending a photo of the problem. Please help me understand what may be wrong.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              track("problem_selected", { problem: p.title });
              track("whatsapp_click", { location: "problem_section" });
            }}
            aria-label={`Get free diagnosis for ${p.title} problem on WhatsApp`}
            className="tap group rounded-2xl border-2 border-red-500/10 bg-card p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-xl hover:shadow-red-500/10 sm:p-5"
          >
            <span className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-red-500/10 text-xl sm:text-2xl transition-transform group-hover:scale-110 group-hover:bg-red-500/20">
              {(p as any).icon || "❌"}
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
        <h3 className="card-h3 text-primary font-display mb-2">
          Not sure what the exact problem is?
        </h3>
        <p className="text-lg sm:text-xl font-bold mb-8">
          <span className="highlighter px-2 text-black">That's completely fine.</span> 👇
        </p>
        <WhatsAppButton location="problem_section" className="max-w-md mx-auto cta-live" />
      </div>
    </section>
  );
}

/* ---------------- 7. REMOVE UNCERTAINTY ---------------- */

export function NoNeedToKnow() {
  return (
    <section className="reveal-section bg-primary py-16 text-primary-foreground sm:py-24">
      <div className="mx-auto max-w-2xl px-4 text-center">
        <h2 className="section-h2 text-white">
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
        <WhatsAppButton location="uncertainty" className="mt-10 max-w-md mx-auto cta-live" />
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
    <section className="reveal-section mx-auto max-w-5xl px-4 py-20 sm:py-28 bg-white rounded-3xl my-10 border border-border/80 shadow-sm">
      <Heading>
        Get help without knowing <span className="highlighter px-2 text-black">fancy technical words.</span>
      </Heading>

      <div className="mt-16 mx-auto max-w-md">
        <div className="relative">
          <div className="absolute left-[27px] top-6 bottom-6 w-0.5 bg-border/80" aria-hidden="true" />
          
          <ol className="space-y-12 list-none p-0 m-0">
            {steps.map((s, i) => (
              <li key={s.t} className="relative flex gap-6 sm:gap-8 items-start group">
                <span className="relative z-10 flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-full bg-[#111827] text-white shadow-xl transition-transform duration-300 group-hover:scale-110 border-4 border-white">
                  <s.icon aria-hidden="true" className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2} />
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-accent text-[13px] sm:text-[15px] font-black text-black shadow-sm ring-2 ring-white">
                    {i + 1}
                  </span>
                </span>
                <div className="pt-2 sm:pt-3">
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight text-slate-950 font-display uppercase">{s.t}</h3>
                  <p className="mt-2 text-[15px] sm:text-[17px] leading-relaxed text-slate-950 font-medium">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="mt-16 text-center max-w-md mx-auto">
        <WhatsAppButton location="how_it_works" className="cta-live">
          <span className="flex flex-col items-center leading-tight">
            <span className="text-[15px] sm:text-[17px] font-black tracking-tight uppercase text-white font-display">
              SEND MY PHOTO ON WHATSAPP ➔
            </span>
            <span className="text-xs font-bold text-white mt-0.5">
              Takes 15 Seconds • Free Diagnosis • No Technical Words Needed
            </span>
          </span>
        </WhatsAppButton>
      </div>
    </section>
  );
}

/* ---------------- 9. SERVICES ---------------- */

export function Services() {
  return (
    <section id="services" className="reveal-section bg-secondary/5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <Heading sub="From stuck sliding doors to brand new safety nets and soundproof glass. We fix it all without the headache.">
          EVERYTHING <span className="highlighter px-2 text-black">WE FIX FOR YOU.</span>
        </Heading>

        <div className="mt-16 space-y-20">
          {serviceCategories.map((category) => (
            <div key={category.category}>
              <h3 className="card-h3 mb-6 text-primary font-display border-b-4 border-accent pb-2 inline-block drop-shadow-sm">
                {category.category}
              </h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((s) => (
                  <div
                    key={s.name}
                    className="tap group flex flex-col rounded-3xl border-2 border-border/60 bg-white p-5 sm:p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl shadow-md overflow-hidden"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/20">
                      <Wrench
                        aria-hidden="true"
                        className="h-5 w-5 text-primary"
                        strokeWidth={2.5}
                      />
                    </span>
                    <h4 className="mt-4 text-[18px] font-black text-primary leading-tight tracking-wide font-display">{s.name}</h4>
                    <p className="mt-2.5 flex-1 text-[14px] sm:text-[15px] font-medium leading-relaxed text-slate-800">
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
                      aria-label={`Get free estimate for ${s.name} on WhatsApp`}
                      className="mt-6 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-whatsapp px-4 text-[14px] sm:text-[15px] font-black tracking-wide text-white tap shadow-[var(--shadow-cta)] hover:brightness-105 transition-all font-display uppercase"
                    >
                      <WhatsAppIcon className="h-4 w-4 text-white fill-current shrink-0" />
                      <span>GET FREE ESTIMATE ➔</span>
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
        <h2 className="section-h2 text-black mt-4 sm:mt-0">
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
              <span className="text-[15px] font-black text-emerald-800">✅ The "No Fix, No Fee"<br/>Guarantee</span>
              <span className="text-[15px] font-black text-amber-950 bg-amber-100/90 px-2.5 py-0.5 rounded-md border border-amber-300">PRICELESS</span>
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
        <WhatsAppButton location="offer" className="mt-2 max-w-md mx-auto cta-live" />
      </div>
    </section>
  );
}

/* ---------------- 11 + 12. PROOF ---------------- */

import imgLockHandleKey from "@/assets/images/real-soundproof-domal-sliding.webp";
import imgKitchenDuct1 from "@/assets/images/real-kitchen-window-exhaust-1.webp";
import imgKitchenWorkshopProof05 from "@/assets/images/sliding-window-workshop-proof-05.webp";
import imgGlassPartition from "@/assets/images/real-office-glass-partition.webp";
import imgPigeonNet1 from "@/assets/images/real-balcony-pigeon-net-1.webp";
import imgBalconyNet2 from "@/assets/images/real-balcony-pigeon-net-2.webp";
import imgBalconyGrillBars from "@/assets/images/real-balcony-railing-grill-bars.webp";
import imgInvisibleGrill1 from "@/assets/images/real-invisible-safety-grill-1.webp";
import imgInvisibleGrill2 from "@/assets/images/real-invisible-safety-grill-2.webp";
import imgInvisibleGrill3 from "@/assets/images/real-invisible-safety-grill-3.webp";
import imgBalconyViewNet from "@/assets/images/real-highrise-balcony-net-view.webp";
import imgLivingRoomSlider1 from "@/assets/images/real-living-room-sliding-window-1.webp";
import imgLivingRoomSlider2 from "@/assets/images/real-living-room-sliding-window-2.webp";
import imgWindowHandleLatch from "@/assets/images/real-broken-window-handle.webp";
import imgBalconyGlider from "@/assets/images/real-balcony-sliding-glide.webp";

import imgOfficePartition1 from "@/assets/images/real-office-partition-view-1.webp";
import imgOfficePartition2 from "@/assets/images/real-office-partition-view-2.webp";
import imgOfficePartition3 from "@/assets/images/real-office-partition-view-3.webp";

import wsWorkshopShelf from "@/assets/images/sliding-window-spare-parts-workshop.jpg";
import wsFinishedCloseup from "@/assets/images/domal-sliding-window-glide-closeup.jpg";
import wsImg6 from "@/assets/images/sliding-window-bearing-roller-replacement.jpg";
import imgSoundproofDomal from "@/assets/images/real-soundproof-domal-sliding.webp";
import founderImage from "@/assets/images/sumit-vishwakarma-founder.jpg";

interface RealWorkProject {
  title: string;
  category: string;
  location: string;
  description: string;
  images: string[];
  highlights: string[];
}

const realWorkProjects: RealWorkProject[] = [
  {
    title: "Heavy Balcony Sliding Windows & Multi-Track Doors",
    category: "Balcony Sliders",
    location: "Powai & Bandra High-Rise",
    description: "Real repair and roller realignment for heavy multi-track sliding balcony doors in Mumbai high-rises. Restores effortless 1-finger glide and eliminates track grinding.",
    images: [
      imgLivingRoomSlider1,
      imgLivingRoomSlider2,
      imgBalconyGlider,
    ],
    highlights: ["Smooth 1-Finger Glide", "Domal & Euro Track Alignment", "Zero Rattle In High Wind"],
  },
  {
    title: "Soundproof Domal & Double-Glazed (DGU) Windows",
    category: "Soundproof & Domal",
    location: "Bandra, Worli & JVLR High-Rises",
    description: "Heavy Domal 27mm & 40mm sliding profiles fitted with double-glazed acoustic laminated glass (DGU) and EPDM weather gaskets. Cuts outside traffic horns and metro noise by up to 80%.",
    images: [
      imgSoundproofDomal,
      wsFinishedCloseup,
    ],
    highlights: ["80% Traffic Noise Reduction", "Double-Glazed (DGU) Glass", "Domal Heavy Profiles"],
  },
  {
    title: "Office Glass Partitions & Sliding Commercial Cabins",
    category: "Office & Cabins",
    location: "BKC, Andheri East & Lower Parel",
    description: "Floor-to-ceiling 10mm/12mm toughened glass partitions with slim anodized aluminium framework, frosted privacy film, and heavy-duty sliding glass door systems.",
    images: [
      imgOfficePartition1,
      imgOfficePartition2,
      imgOfficePartition3,
    ],
    highlights: ["10mm/12mm Toughened Glass", "Acoustic Cabin Privacy", "Floor-to-Ceiling Finish"],
  },
  {
    title: "Invisible Stainless Steel Safety Wire Grill Systems",
    category: "Invisible Safety Grills",
    location: "Kandivali & Thane Apartments",
    description: "High-tensile 316 marine-grade nylon-coated stainless steel invisible safety wires installed across balcony railings. Unblocked skyline views with 100% child and pet fall protection.",
    images: [
      imgInvisibleGrill3,
      imgInvisibleGrill1,
      imgInvisibleGrill2,
    ],
    highlights: ["Grade 316 SS Marine Wire", "Unblocked 180° View", "Child & Pet Safe (Up to 400kg)"],
  },
  {
    title: "Balcony Pigeon Netting & High-Rise Bird Protection",
    category: "Pigeon Netting",
    location: "Goregaon & Chembur",
    description: "Durable UV-stabilized transparent nylon safety netting securely anchored with stainless steel hooks. Keeps pigeons, dirt, and droppings out while maintaining complete daylight and airflow.",
    images: [
      imgPigeonNet1,
      imgBalconyViewNet,
      imgBalconyNet2,
    ],
    highlights: ["UV-Resistant Nylon Mesh", "Rust-Free SS Fasteners", "Zero Obstruction to Airflow"],
  },
  {
    title: "Concealed Flush Locks, Handles & Keyed Latches",
    category: "Locks & Hardware",
    location: "Andheri West & Malad",
    description: "Broken, loose, and snapped sliding window locks replaced on-site with heavy-duty powder-coated aluminium flush latches, dual-hook locks, and high-security key sets.",
    images: [
      imgLockHandleKey,
      imgWindowHandleLatch,
    ],
    highlights: ["Solid Brass Cylinders", "Powder-Coated Anti-Corrosion", "Tight Acoustic Weather-Seal"],
  },
  {
    title: "Kitchen Utility Windows & Custom Exhaust Cutouts",
    category: "Kitchen & Ventilators",
    location: "Dadar & Ghatkopar",
    description: "Custom precision exhaust fan and chimney duct cutouts directly in toughened glass, integrated with sliding mosquito screens and anodized frames.",
    images: [
      imgKitchenDuct1,
      imgKitchenWorkshopProof05,
    ],
    highlights: ["Precision Diamond Glass Cutout", "Chimney Duct Sealed", "Mosquito Mesh Integrated"],
  },
  {
    title: "Heavy-Duty Ball-Bearing Rollers & Track Replacement",
    category: "Roller & Track Workshop",
    location: "Mumbai Central Workshop & On-Site",
    description: "Direct parts from our workshop inventory. Crushed, squeaking plastic wheels swapped for industrial brass and stainless steel ball-bearing rollers carrying up to 120kg panes.",
    images: [
      imgLivingRoomSlider2,
      wsFinishedCloseup,
    ],
    highlights: ["Solid Brass Ball-Bearings", "Heavy 120kg Pane Support", "1-Year Glide Guarantee"],
  },
];

function ProjectImageCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  // Maximum 3 images per carousel as requested
  const displayImages = images.slice(0, 3);
  const total = displayImages.length;

  if (total === 1) {
    return (
      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-border/80 shadow-md bg-slate-900 group">
        <img
          src={displayImages[0]}
          alt={alt}
          width={640}
          height={480}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    );
  }

  const prev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const next = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    if (touch) {
      touchStartX.current = touch.clientX;
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touch = e.changedTouches[0];
    if (!touch) return;
    const touchEndX = touch.clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  return (
    <div
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-border/80 shadow-md bg-slate-900 group select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      <div
        className="flex w-full h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {displayImages.map((img, idx) => (
          <div key={idx} className="w-full h-full flex-shrink-0 relative">
            <img
              src={img}
              alt={`${alt} - View ${idx + 1}`}
              width={640}
              height={480}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous photo"
        className="absolute left-2.5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/65 hover:bg-black/90 text-white backdrop-blur-sm flex items-center justify-center transition-all opacity-90 sm:opacity-75 sm:group-hover:opacity-100 shadow-md active:scale-90 z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        type="button"
        onClick={next}
        aria-label="Next photo"
        className="absolute right-2.5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/65 hover:bg-black/90 text-white backdrop-blur-sm flex items-center justify-center transition-all opacity-90 sm:opacity-75 sm:group-hover:opacity-100 shadow-md active:scale-90 z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Photo Counter Badge */}
      <div className="absolute top-3 right-3 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-semibold text-white tracking-wider flex items-center gap-1 shadow z-10">
        <span>{currentIndex + 1}</span>
        <span className="opacity-40">/</span>
        <span>{total}</span>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-1 inset-x-0 flex items-center justify-center gap-0.5 z-10">
        {displayImages.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(idx);
            }}
            aria-label={`Go to slide ${idx + 1} of ${total}`}
            className="flex items-center justify-center min-w-[44px] min-h-[44px] p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full group/dot transition-transform active:scale-95"
          >
            <span
              className={`h-1.5 rounded-full transition-all duration-300 block shadow-sm ${
                idx === currentIndex ? "w-6 bg-accent" : "w-2 bg-white/60 group-hover/dot:bg-white"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export function WorkGallery() {
  return (
    <section id="our-work" className="reveal-section mx-auto max-w-7xl px-4 py-20 sm:py-28">
      <Heading sub="Real job site photos from Mumbai apartments across Powai, Bandra, Andheri, and Thane. Genuine parts, clean work, no shortcuts.">
        THIS IS <span className="highlighter px-2 text-black">HOW WE FIX IT.</span>
      </Heading>

      <div className="mt-12 grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {realWorkProjects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col rounded-3xl bg-card border border-border/70 p-4 sm:p-5 shadow-sm hover:shadow-xl transition-all duration-300 group"
          >
            {/* Image Carousel (Max 3 real images) */}
            <ProjectImageCarousel images={project.images} alt={project.title} />

            {/* Meta tags */}
            <div className="mt-4 flex items-center justify-between gap-2 flex-wrap text-xs">
              <span className="bg-primary/10 text-primary font-bold px-2.5 py-1 rounded-full">
                {project.category}
              </span>
              <span className="text-muted-foreground flex items-center gap-1 font-medium">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                {project.location}
              </span>
            </div>

            {/* Title & Description */}
            <h3 className="card-h3 text-foreground font-display tracking-tight mt-3 text-lg leading-snug font-bold">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground flex-1 leading-relaxed">
              {project.description}
            </p>

            {/* Highlights */}
            <div className="mt-4 pt-3 border-t border-border/60 flex flex-wrap gap-1.5">
              {project.highlights.map((h, i) => (
                <span
                  key={i}
                  className="inline-flex items-center text-[11px] font-semibold text-slate-700 bg-secondary/80 px-2 py-0.5 rounded-md"
                >
                  ✓ {h}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Powai Physical Workshop Credibility Proof */}
      <div className="mt-16 rounded-[28px] sm:rounded-[36px] bg-gradient-to-br from-white via-slate-50 to-slate-100/90 border-2 border-border/80 p-5 sm:p-8 lg:p-10 shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Workshop Photo with Overlays */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative w-full h-[260px] sm:h-[340px] lg:h-full min-h-[320px] rounded-2xl sm:rounded-3xl overflow-hidden border border-border shadow-md group bg-slate-900">
              <img
                src={wsWorkshopShelf}
                alt="Vishwa Works Powai Workshop and Hardware Inventory"
                width={640}
                height={480}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-3.5 left-3.5 bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-white flex items-center gap-1.5 shadow-md">
                <span>📍</span>
                <span>Physical Workshop • Powai</span>
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 sm:p-5 text-left">
                <p className="text-[11px] font-extrabold uppercase tracking-wider text-accent">
                  GENUINE HARDWARE READY IN STOCK
                </p>
                <p className="text-xs text-white/90 font-medium mt-1 leading-snug">
                  Opp. IIT Market, Powai • 1,000+ Domal & Jindal bearings ready for same-day doorstep dispatch across Mumbai.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: High-Converting Direct Response Copy */}
          <div className="lg:col-span-7 flex flex-col justify-between text-left">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-extrabold bg-amber-500/15 text-amber-950 border border-amber-500/30 uppercase tracking-wide">
                ⚠️ TIRED OF RANDOM APP GUYS GUESSING IN YOUR LIVING ROOM?
              </span>

              <h3 className="card-h3 text-primary font-display tracking-tight text-xl sm:text-2xl lg:text-3xl mt-3.5 font-extrabold leading-snug">
                We Don't "Order Parts Online." <br className="hidden sm:inline" />
                <span className="highlighter px-1.5 text-black">We Stock 1,000+ Bearings</span> In Our Own Powai Workshop.
              </h3>

              {/* The Mistri Trap vs. Vishwa Works Way */}
              <div className="mt-5 rounded-2xl bg-white border border-border shadow-sm divide-y divide-border overflow-hidden">
                <div className="p-3.5 sm:p-4 flex items-start gap-3 bg-red-500/[0.03]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 text-xs font-black">
                    ✕
                  </span>
                  <div>
                    <p className="text-xs sm:text-sm font-black text-red-950">
                      The Random App & Mistri Trap
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      A guy shows up on a bike with zero spare parts and says: <i>"Bhaiya, ₹500 advance do, market jaake dhoondna padega."</i> Vanishes for 3 hours, fits a cheap ₹50 plastic duplicate, and your window jams again next week.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 flex items-start gap-3 bg-emerald-500/[0.04]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-xs font-black">
                    ✓
                  </span>
                  <div>
                    <p className="text-xs sm:text-sm font-black text-emerald-950">
                      The Honest Mumbai Vishwa Works Way
                    </p>
                    <p className="text-xs sm:text-sm text-slate-800 mt-1 leading-relaxed font-medium">
                      Our technician arrives with genuine Domal, Jindal, and heavy-duty steel roller bearings in his toolkit. Fixed right in front of your eyes in <b>45 minutes flat</b> with a 1-year smooth glide guarantee.
                    </p>
                  </div>
                </div>
              </div>

              {/* 3 Quick Proof Points */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-3 text-center sm:text-left">
                  <p className="text-xs font-black text-primary uppercase">No "Market Jao"</p>
                  <p className="text-[11px] text-slate-600 mt-0.5 font-medium">1,000+ bearings in stock</p>
                </div>
                <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-3 text-center sm:text-left">
                  <p className="text-xs font-black text-primary uppercase">No Random Strangers</p>
                  <p className="text-[11px] text-slate-600 mt-0.5 font-medium">10+ yrs trade veterans</p>
                </div>
                <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-3 text-center sm:text-left">
                  <p className="text-xs font-black text-primary uppercase">No Advance Money</p>
                  <p className="text-[11px] text-slate-600 mt-0.5 font-medium">Pay only after 1-finger glide</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <WhatsAppButton
                location="work_gallery_workshop_callout"
                className="w-full sm:w-auto text-xs sm:text-sm font-bold"
              >
                SEND PHOTO ON WHATSAPP FOR 5-MIN DIAGNOSIS ➔
              </WhatsAppButton>
            </div>
          </div>
        </div>
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
  const areaDetail = getAreaByName(area);
  const targetPath = areaDetail ? areaDetail.path : "/window-repair-mumbai";

  return (
    <Link
      to={targetPath}
      onClick={() => {
        track("area_selected", { area });
      }}
      className="shrink-0 -skew-x-[12deg] bg-[#e63c15] px-6 py-2 sm:px-8 sm:py-3 transition-transform hover:scale-105 shadow-sm block cursor-pointer"
    >
      <div className="skew-x-[12deg]">
        <span className="text-xl sm:text-2xl font-black italic uppercase tracking-wider text-white">
          {area}
        </span>
      </div>
    </Link>
  );
}

function AreaMarqueeRow({ items, direction = "left" }: { items: readonly string[], direction?: "left" | "right" }) {
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
        <WhatsAppButton
          location="areas_cta"
          message={whatsappMessages.area}
          ariaLabel="Check if Vishwa Works serves your area on WhatsApp"
        >
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
    name: "Sachin Yadav",
    title: "Excellent service & quality work",
    text: "Excellent service and very good quality work! Vishwakarma Works provided professional and reliable service for aluminium window work. The finishing was neat, the material quality was good, and the work was completed properly. Highly recommended for anyone looking for quality window and aluminium work in Mumbai. 👍",
    rating: 5,
    date: "Google Review"
  },
  {
    name: "Tanzim Farooqui",
    title: "Reasonable price & good service",
    text: "Overall Good Service & at a very reasonable price.",
    rating: 5,
    date: "Google Review"
  },
  {
    name: "strike speed",
    title: "Workmanship is excellent",
    text: "Very happy with the window fitting service. Workmanship is excellent, alignment and finishing is perfect. Professional, punctual and clean work. Highly recommended!",
    rating: 5,
    date: "Google Review"
  },
  {
    name: "Trupti Panchal",
    title: "Done neatly with perfect finishing",
    text: "Excellent work Window fitting done very neatly with perfect finishing and alignment. Fully satisfied. Worth the money paid.",
    rating: 5,
    date: "Google Review"
  },
  {
    name: "Rahul M.",
    title: "Saved me ₹15,000!",
    text: "My sliding window was stuck for months. Two local carpenters said I had to replace the entire frame (quoted ₹15k). Vishwa Works replaced the rollers in 45 minutes for a fraction of the cost.",
    rating: 5,
    date: "Google Review"
  },
  {
    name: "Sneha P.",
    title: "Super fast and clean",
    text: "Sent a photo on WhatsApp, got a quote in 10 mins. The technician arrived the same day and fixed the broken track. Super professional. They didn't even leave a mess.",
    rating: 5,
    date: "Google Review"
  },
  {
    name: "Vikram S.",
    title: "Finally, actual experts",
    text: "Finally, a service that knows what they are doing. Replaced my broken locks perfectly. The 'No Fix No Fee' guarantee gave me the confidence to call them.",
    rating: 5,
    date: "Google Review"
  },
  {
    name: "Pooja K.",
    title: "No more noise!",
    text: "The street noise was unbearable until they fixed the sealing on my bedroom windows. I can finally sleep in peace. Highly recommended for anyone in Powai.",
    rating: 5,
    date: "Google Review"
  },
  {
    name: "Amit D.",
    title: "Excellent WhatsApp support",
    text: "Loved the fact that I didn't have to explain technical terms. Just sent a video of my jammed balcony door and they knew exactly what was wrong.",
    rating: 5,
    date: "Google Review"
  },
  {
    name: "Neha R.",
    title: "Honest and transparent",
    text: "I thought the glass needed replacement, but their technician honestly told me it was just a track alignment issue. Saved me a lot of money.",
    rating: 5,
    date: "Google Review"
  },
  {
    name: "Karan T.",
    title: "Best in Hiranandani",
    text: "Tried three different handymen before finding Vishwa Works. They had the exact branded rollers my premium windows needed.",
    rating: 5,
    date: "Google Review"
  },
  {
    name: "Meera V.",
    title: "Very professional team",
    text: "The team arrived on time, wearing uniforms, and carried all necessary tools. Fixed our French windows effortlessly. Will definitely use again.",
    rating: 5,
    date: "Google Review"
  },
  {
    name: "Siddharth B.",
    title: "Smooth like butter",
    text: "My heavy balcony doors were a nightmare to open. After they changed the bearings, I can slide them with one finger!",
    rating: 5,
    date: "Google Review"
  },
  {
    name: "Anjali M.",
    title: "Highly responsive",
    text: "Messaged them on a Sunday evening and got a reply instantly. They booked an appointment for Monday morning and sorted out the lock issue.",
    rating: 5,
    date: "Google Review"
  },
  {
    name: "Rohan J.",
    title: "Great value for money",
    text: "You pay a slight premium compared to local guys, but the peace of mind and quality of parts is 100% worth it. The 6-month warranty is a big plus.",
    rating: 5,
    date: "Google Review"
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
        <h3 className="text-[18px] font-bold text-foreground mb-2 leading-tight font-display">{review.title}</h3>
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
        <Heading sub="Real verified feedback from Mumbai homeowners">
          WHAT OUR <span className="highlighter px-2 text-black">CUSTOMERS SAY</span>
        </Heading>

        {/* Continuous High-Speed Proof Marquee */}
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
            aria-label="View Vishwa Works 4.9-star customer reviews on Google Maps"
            onClick={() => track("google_profile_click", { location: "reviews" })}
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm sm:text-base font-bold text-primary shadow-md hover:shadow-lg hover:text-accent transition-all border border-border/80"
          >
            <span>⭐️⭐️⭐️⭐️⭐️ See all 120+ verified reviews on Google Maps →</span>
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
        <Heading sub="Got doubts before messaging us? Here is everything you need to know upfront:">
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
          <span className="font-display font-black tracking-tight text-3xl sm:text-5xl uppercase">Vishwa Works <span className="text-red-500 px-2 line-through">VS.</span> The Local Mistri</span>
        </Heading>
        <div className="mt-12 overflow-hidden rounded-3xl border-2 border-border bg-card shadow-xl shadow-accent/5">
          <div className="grid grid-cols-2 divide-x divide-border sm:grid-cols-3">
            <div className="hidden bg-secondary/20 p-6 sm:flex items-center justify-center">
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Feature</p>
            </div>
            <div className="bg-red-50/80 p-5 sm:p-6 text-center border-b-2 border-red-100">
              <p className="text-xl sm:text-2xl font-black text-red-700 font-display uppercase tracking-tight">Local Mistri</p>
            </div>
            <div className="bg-orange-50/80 p-5 sm:p-6 text-center border-b-2 border-orange-200">
              <p className="text-xl sm:text-2xl font-black text-amber-950 font-display uppercase tracking-tight">Vishwa Works</p>
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
                  <p className="text-[13px] font-black uppercase tracking-wider text-slate-800">{r.f}</p>
                </div>
                <div className="flex flex-col items-center justify-center p-6 text-center bg-red-50/20">
                  <span className="mb-3 sm:hidden text-[11px] font-black uppercase tracking-wider text-slate-800">{r.f}</span>
                  <X className="mb-3 h-8 w-8 text-red-600 drop-shadow-sm" strokeWidth={2.5} />
                  <p className="text-[14px] font-semibold text-slate-700 leading-snug">{r.bad}</p>
                </div>
                <div className="flex flex-col items-center justify-center p-6 text-center bg-orange-50/30">
                  <span className="mb-3 sm:hidden text-[11px] font-black uppercase tracking-wider text-slate-800">{r.f}</span>
                  <Check className="mb-3 h-8 w-8 text-emerald-700 drop-shadow-md" strokeWidth={3.5} />
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
    <section className="reveal-section mx-auto max-w-3xl px-4 py-20 sm:py-28 bg-card rounded-3xl my-10 border border-border/80 shadow-sm">
      <Heading sub="We don't just fix windows and doors. We restore your peace of mind.">
        What happens after a repair?
      </Heading>
      <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
        {[
          "The 1-Finger Glide: Push even heavy balcony sliding doors with one single finger. No gym strength needed.",
          "Keep ₹15,000 to ₹20,000 In Your Pocket: Local mistris say 'pura window badalna padega'. We fix just the broken parts.",
          "Cut Down Your AC Bills: Airtight sealing stops your expensive air conditioning from escaping into Mumbai heat.",
          "Pin-Drop Quiet Nights: No more ear-piercing screeching noises or rattling glass during heavy monsoon winds.",
          "100% Balcony & Child Safety: Snapped locks replaced with heavy-duty latches so panels never wobble or fall off.",
          "Zero Civil Mess In Your Home: 45-minute clean doorstep repair. No broken tiles, no cement, and no construction dust."
        ].map((b, i) => {
          const [title, desc] = b.split(": ");
          return (
            <div key={i} className="flex gap-4 items-start group">
              <Check className="mt-0.5 h-6 w-6 shrink-0 text-emerald-700 drop-shadow-sm group-hover:scale-110 transition-transform" strokeWidth={3} />
              <p className="text-[16px] leading-relaxed text-slate-900 font-medium">
                <strong className="font-bold text-slate-950">{title}:</strong> {desc}
              </p>
            </div>
          );
        })}
      </div>
      <div className="mt-12 text-center max-w-md mx-auto">
        <WhatsAppButton location="benefits" className="cta-live" />
        <p className="mt-4 text-xs font-semibold text-slate-700">
          Replies in 5 mins • 100% Doorstep Service Anywhere in Mumbai • No Fix, No Fee
        </p>
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
             <h3 className="card-h3 text-primary mb-6 font-display flex items-center gap-3 border-b-2 border-border/50 pb-3">
               <span className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#22c55e]/20 shrink-0">
                 <Check className="h-6 w-6 sm:h-7 sm:w-7 text-[#16a34a]" strokeWidth={3} />
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
             <h3 className="card-h3 text-primary mb-6 font-display flex items-center gap-3 border-b-2 border-border/50 pb-3">
               <span className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#ef4444]/20 shrink-0">
                 <X className="h-6 w-6 sm:h-7 sm:w-7 text-[#dc2626]" strokeWidth={3} />
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
              width={320}
              height={320}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-top grayscale transition-all duration-700 hover:grayscale-0"
            />
          </div>
          <div>
            <h2 className="section-h2 text-primary-foreground">
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
                "I started Vishwa Works with a simple mission: <b className="text-accent font-black">Repair first, replace only when absolutely necessary.</b> We give you honest advice, upfront pricing, and a 'No Fix, No Fee' guarantee. It's how service should be."
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
        <h2 className="section-h2 text-white">
          STOP STRUGGLING WITH <br />
          <span className="text-accent">STUCK WINDOWS.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-[18px] text-primary-foreground/90 font-medium">
          Take a photo and send it on WhatsApp right now. We'll give you a free, honest diagnosis before you commit.
        </p>
        
        <div className="mt-10 flex flex-col justify-center gap-4">
          <div className="w-full flex justify-center text-[40px] animate-bounce">
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
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-whatsapp/30 bg-card/95 p-2.5 safe-bottom backdrop-blur md:hidden shadow-[0_-10px_25px_-5px_rgba(37,211,102,0.4)]">
      <div className="flex items-center justify-between px-1 mb-1.5 text-[11px] font-black uppercase tracking-wider">
        <span className="text-red-700 font-black flex items-center gap-1.5">
          <span className="relative flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-[#521616] border border-[#782222]">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500/40 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#e84141] shadow-[0_0_6px_rgba(232,65,65,0.9)]"></span>
          </span>
          <span>⏳ LIMITED SAME-DAY SLOTS</span>
        </span>
        <span className="text-emerald-950 font-black">⚡ Replies in 5m</span>
      </div>
      <div className="grid grid-cols-[1fr_2.4fr] gap-2">
        <a
          href={business.phoneHref}
          aria-label={`Call Vishwa Works Window Repair at ${business.phone}`}
          onClick={() => track("call_click", { location: "sticky_mobile" })}
          className="tap flex min-h-[50px] items-center justify-center gap-1.5 rounded-xl border-2 border-primary bg-primary/5 text-primary text-xs font-black uppercase tracking-wide active:scale-95 transition-transform"
        >
          <Phone className="h-4 w-4 shrink-0" />
          <span>CALL</span>
        </a>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact Vishwa Works on WhatsApp for Free Window Repair Diagnosis"
          onClick={() => track("whatsapp_click", { location: "sticky_mobile" })}
          className="tap cta-live flex min-h-[50px] items-center justify-center gap-2 rounded-xl bg-whatsapp text-[13px] font-black text-white shadow-[var(--shadow-cta)] active:scale-95 transition-transform font-display tracking-wide uppercase"
        >
          <WhatsAppIcon className="h-5 w-5 text-white fill-current shrink-0" />
          <span>FREE DIAGNOSIS ➔</span>
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
            <a
              href={business.phoneHref}
              aria-label={`Call Vishwa Works Window Repair at ${business.phone}`}
            >
              {business.phone}
            </a>
          </p>
          <p className="mt-1">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Vishwa Works on WhatsApp for Free Window Repair Diagnosis"
            >
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
              aria-label="View Vishwa Works 4.9-star customer reviews on Google Maps"
              onClick={() => track("google_profile_click", { location: "footer" })}
              className="underline underline-offset-4"
            >
              Find us on Google
            </a>
          </p>
          <div className="mt-4 pt-3 border-t border-primary-foreground/20">
            <p className="font-semibold text-xs uppercase tracking-wider text-primary-foreground/90 mb-2">Connect With Us</p>
            <div className="flex items-center gap-3">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact Vishwa Works on WhatsApp for Free Window Repair Diagnosis"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 hover:bg-whatsapp hover:text-white transition-colors"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 hover:bg-[#1877F2] hover:text-white transition-colors text-white"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white transition-all text-white"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>
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
              <a href="/new-window-installation-mumbai">New Window Installation</a>
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

const allImagesGlob: Record<string, { default: string }> = import.meta.glob('@/assets/images/*.{jpeg,jpg,png,webp,avif}', { eager: true });
const newVideosGlob: Record<string, { default: string }> = import.meta.glob('@/assets/videos/*.mp4', { eager: true });

const posterMap: Record<string, string> = {};
Object.keys(allImagesGlob).forEach((key) => {
  const filename = key.split('/').pop()?.replace(/\.[^/.]+$/, "") || "";
  if (filename.startsWith('poster-')) {
    const videoKey = filename.replace('poster-', '');
    const item = allImagesGlob[key];
    if (item) {
      posterMap[videoKey] = item.default;
    }
  }
});

type GalleryItem = {
  url: string;
  poster: string;
  isVideo: boolean;
};

const newVideos: GalleryItem[] = Object.keys(newVideosGlob)
  .filter((key) => !key.includes('hero.mp4'))
  .map((key) => {
    const filename = key.split('/').pop()?.replace(/\.[^/.]+$/, "") || "";
    const item = newVideosGlob[key];
    const url = item ? item.default : "";
    return {
      url,
      poster: posterMap[filename] || url,
      isVideo: true,
    };
  });

const excludeFromGallery = new Set([
  'hero-poster',
  'hero-window-repair',
  'sumit-vishwakarma-founder',
  'wreath-left',
  'wreath-right',
]);

const galleryPhotos: GalleryItem[] = Object.keys(allImagesGlob)
  .filter((key) => {
    const filename = key.split('/').pop()?.replace(/\.[^/.]+$/, "") || "";
    if (filename.startsWith('poster-')) return false;
    for (const prefix of excludeFromGallery) {
      if (filename.startsWith(prefix)) return false;
    }
    return true;
  })
  .map((key) => {
    const item = allImagesGlob[key];
    const url = item ? item.default : "";
    return {
      url,
      poster: url,
      isVideo: false,
    };
  });

export function RealWorkGallery() {
  const [selectedAsset, setSelectedAsset] = useState<GalleryItem | null>(null);

  const allAssets = [...newVideos, ...galleryPhotos];
  const row1 = allAssets.slice(0, Math.ceil(allAssets.length / 2));
  const row2 = allAssets.slice(Math.ceil(allAssets.length / 2));

  const MarqueeRow = ({ items, direction = "left" }: { items: GalleryItem[], direction?: "left" | "right" }) => {
    const content = (
      <>
        {items.map((asset, i) => (
          <div 
            key={i} 
            onClick={() => setSelectedAsset(asset)}
            className="flex-none w-[280px] h-[360px] md:w-[320px] md:h-[420px] relative rounded-[32px] overflow-hidden border border-border/50 cursor-pointer group bg-black/10"
          >
            <img 
              src={asset.poster} 
              alt={`Sliding window repair work in Mumbai proof ${i + 1}`} 
              width={320}
              height={420}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none" 
              loading="lazy" 
              decoding="async" 
            />
            {asset.isVideo && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black/70 text-white shadow-xl backdrop-blur-sm border border-white/30 group-hover:scale-110 group-hover:bg-red-600 transition-all duration-300">
                  <Play className="h-6 w-6 fill-current ml-0.5 text-white" />
                </div>
                <span className="absolute top-4 right-4 rounded-full bg-red-600/90 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-white shadow-lg backdrop-blur-sm">
                  ▶ Video Proof
                </span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
        ))}
      </>
    );

    return (
      <div className="relative flex overflow-hidden w-full py-6">
        <div 
          className={`flex w-max gap-5 pause-on-hover ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}`}
          style={{ animationDuration: '140s' }}
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
          className="fixed inset-0 z-[9999] bg-black/95 flex flex-col items-center justify-center p-4 cursor-pointer backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedAsset(null)}
        >
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setSelectedAsset(null);
            }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-auto sm:bottom-auto sm:top-6 sm:right-8 z-[10000] flex items-center gap-2 text-white bg-black/80 sm:bg-white/10 hover:bg-white/25 px-6 py-3 sm:px-4 sm:py-2 rounded-full backdrop-blur-md transition-all shadow-2xl border border-white/20 whitespace-nowrap active:scale-95"
          >
            <span className="font-bold tracking-wide text-sm sm:text-base">Close</span>
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div 
            className="relative max-w-4xl max-h-[85vh] w-full h-full flex items-center justify-center cursor-default mt-10 sm:mt-0 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedAsset.isVideo ? (
              <video 
                src={selectedAsset.url} 
                autoPlay 
                controls
                loop 
                playsInline 
                preload="auto"
                className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
              />
            ) : (
              <img 
                src={selectedAsset.url} 
                alt="Enlarged proof" 
                width={800}
                height={600}
                className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
              />
            )}
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
