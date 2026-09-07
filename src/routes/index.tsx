import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import {
  Faq,
  FinalCTA,
  Footer,
  HowItWorks,
  LeadForm,
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
} from "@/components/site/Sections";
import { business } from "@/config/business";

const title = "Window Repair in Powai | Sliding & Aluminium Window Repair";
const description =
  "Need window repair in Powai? Send a photo of your window problem on WhatsApp and get help with the next step. Serving Powai, Hiranandani, Chandivali and nearby areas.";

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
    links: [{ rel: "canonical", href: "/" }],
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
        <Hero />
        <ProblemSelector />
        <NoNeedToKnow />
        <HowItWorks />
        <Services />
        <Offer />
        <WorkGallery />
        <WorkshopProof />
        <WhyChooseUs />
        <ServiceAreas />
        <Reviews />
        <Faq />
        <LeadForm />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
