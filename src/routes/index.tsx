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
import { faqs } from "@/config/business";
import { business } from "@/config/business";
import heroVideo from "@/assets/hero.mp4";
import heroPoster from "@/assets/hero-poster.jpg";

const title = "Sliding Glass Door & Window Repair Near Me Mumbai | Rollers, Wheels & Track Fix";
const description =
  "Searching for sliding glass door repair near me or aluminium sliding window repair in Mumbai? We fix jammed window sliders, replace rollers, wheels, tracks, locks & broken glass. Same-day doorstep service.";
const liveUrl = business.siteUrl;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: liveUrl },
      { property: "og:image", content: `${liveUrl}/og-image.jpg` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${liveUrl}/og-image.jpg` },
    ],
    links: [
      { rel: "canonical", href: `${liveUrl}/` },
      { rel: "preload", as: "image", href: heroPoster, fetchPriority: "high" }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          name: business.name,
          image: `${liveUrl}${heroPoster}`,
          description,
          url: liveUrl,
          telephone: business.phone,
          priceRange: "₹₹",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "128"
          },
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
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.a,
            },
          })),
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
