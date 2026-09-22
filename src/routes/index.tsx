import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import {
  Faq,
  FinalCTA,
  Footer,
  HowItWorks,
  NoNeedToKnow,
  Offer,
  ProblemSelector,
  Reviews,
  ServiceAreas,
  Services,
  StickyMobileCTA,
  WhyChooseUs,
  WorkGallery,
  WorkshopProof,
  UsVsThem,
  Disqualifiers,
  Benefits,
  FoundersStory,
  RealWorkGallery,
} from "@/components/site/Sections";
import { business } from "@/config/business";
import heroVideo from "@/assets/hero.mp4";
import heroPoster from "@/assets/hero-poster.jpg";

const title = "Sliding Window & Glass Door Repair Mumbai | Fix Jammed Tracks";
const description =
  "Expert sliding window and glass door repair in Mumbai. We fix jammed doors, replace broken rollers & tracks. 100% Guaranteed. Serving premium Mumbai high-rises.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "video", href: heroVideo, type: "video/mp4" },
      { rel: "preload", as: "image", href: heroPoster }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: business.name,
          description,
          telephone: business.phone,
          areaServed: business.serviceAreas.map((a) => ({
            "@type": "Place",
            name: `${a}, Mumbai`,
          })),
          address: {
            "@type": "PostalAddress",
            addressLocality: "Powai, Mumbai",
            addressRegion: "Maharashtra",
            addressCountry: "IN",
          },
          ...(business.hours ? { openingHours: business.hours } : {}),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        {/* Phase 1: Hook, Agitation & The Epiphany */}
        <Hero />
        <ProblemSelector />
        <FoundersStory />
        <UsVsThem />
        
        {/* Phase 2: The Godfather Offer & Solution */}
        <Offer />
        <Benefits />
        <HowItWorks />
        <NoNeedToKnow />

        {/* Phase 3: Avalanche of Proof */}
        <RealWorkGallery />
        <Reviews />
        <WorkGallery />

        {/* Phase 4: Logical Justification & Takeaway */}
        <Services />
        <WhyChooseUs />
        <WorkshopProof />
        <Disqualifiers />
        
        {/* Phase 5: Closing */}
        <ServiceAreas />
        <Faq />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
