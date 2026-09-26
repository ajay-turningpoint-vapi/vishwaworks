import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Faq, Footer, Reviews, ServiceAreas, StickyMobileCTA, WhyChooseUs, WorkshopProof } from "@/components/site/Sections";
import { CallButton, WhatsAppButton } from "@/components/site/cta";
import { business, whatsappLink } from "@/config/business";
import { CheckCircle2, ShieldCheck, Clock, Wrench, ArrowRight } from "lucide-react";

export type AreaPageContent = {
  areaName: string;
  slug: string;
  h1: string;
  intro: string;
  popularComplexes?: string[];
  commonIssues: readonly string[];
  whatsappMessage: string;
  locationKey: string;
};

export function AreaPage({
  content,
  children,
}: {
  content: AreaPageContent;
  children?: ReactNode;
}) {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-primary px-4 py-12 sm:py-16 text-primary-foreground">
          <div className="mx-auto max-w-4xl text-center sm:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-accent border border-accent/30 mb-4">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              Serving {content.areaName}, Mumbai
            </div>
            <h1 className="font-display text-3xl font-extrabold leading-tight sm:text-5xl text-white">
              {content.h1}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-primary-foreground/85 leading-relaxed max-w-2xl">
              {content.intro}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton
                location={content.locationKey}
                message={content.whatsappMessage}
              >
                SEND PHOTO → GET ESTIMATE
              </WhatsAppButton>
              <CallButton location={content.locationKey} variant="outline" />
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-xs sm:text-sm text-primary-foreground/75">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-green-400" /> 100% No-Fix-No-Fee Guarantee
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-accent" /> 45-Min Doorstep Service
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-blue-400" /> 6-Month Service Warranty
              </span>
            </div>
          </div>
        </section>

        {/* Services & Problems in this Area */}
        <section className="px-4 py-14 bg-background">
          <div className="mx-auto max-w-4xl">
            <div className="text-center sm:text-left">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-foreground">
                Common Window & Door Problems We Solve in {content.areaName}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground">
                Don't let local carpenters convince you to replace your entire frame for ₹15,000+. We restore them to factory-smooth glide for a fraction of the cost.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {content.commonIssues.map((issue, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 rounded-2xl border border-border bg-card p-4 sm:p-5 shadow-sm hover:border-primary/40 transition-colors"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent font-bold text-sm">
                    ✓
                  </span>
                  <div>
                    <h3 className="font-bold text-foreground text-base leading-snug">{issue}</h3>
                    <p className="mt-1 text-xs text-muted-foreground leading-normal">
                      Quick on-site hardware replacement without breaking walls or civil mess.
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Photo Tip Box */}
            <div className="mt-10 rounded-2xl border-2 border-accent/40 bg-accent/10 p-6 sm:p-8 text-center sm:text-left">
              <h3 className="font-display text-xl sm:text-2xl font-extrabold text-foreground">
                How It Works: Show Us The Problem
              </h3>
              <p className="mt-2 text-sm text-foreground/80 leading-relaxed max-w-2xl">
                Take a quick 5-second video or photo of your window/door track on your phone and send it to our technicians on WhatsApp. We diagnose the issue and give you upfront pricing before visiting.
              </p>
              <div className="mt-6">
                <WhatsAppButton
                  location={`${content.locationKey}_photo_box`}
                  message={content.whatsappMessage}
                >
                  SEND PHOTO ON WHATSAPP
                </WhatsAppButton>
              </div>
            </div>

            {children}
          </div>
        </section>

        <WhyChooseUs />
        <Reviews />
        <WorkshopProof />
        <ServiceAreas />
        <Faq />

        {/* Final CTA */}
        <section className="bg-navy px-4 py-16 text-primary-foreground text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-2xl font-extrabold sm:text-4xl">
              NEED WINDOW REPAIR IN {content.areaName.toUpperCase()}?
            </h2>
            <p className="mt-3 text-base text-primary-foreground/80">
              Message us right now on WhatsApp. Send a photo and get expert assistance within minutes.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3.5 sm:flex-row">
              <WhatsAppButton
                location={`${content.locationKey}_bottom_cta`}
                message={content.whatsappMessage}
              />
              <CallButton location={`${content.locationKey}_bottom_cta`} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}

export function areaHead({
  title,
  description,
  path,
  areaName,
}: {
  title: string;
  description: string;
  path: string;
  areaName: string;
}) {
  const fullUrl = `${business.siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: fullUrl },
      { property: "og:image", content: `${business.siteUrl}/og-image.jpg` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${business.siteUrl}/og-image.jpg` },
    ],
    links: [{ rel: "canonical", href: fullUrl }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          name: `${business.name} - ${areaName}`,
          description,
          url: fullUrl,
          telephone: business.phone,
          priceRange: "₹₹",
          areaServed: {
            "@type": "Place",
            name: `${areaName}, Mumbai`,
          },
          address: {
            "@type": "PostalAddress",
            addressLocality: `${areaName}, Mumbai`,
            addressRegion: "Maharashtra",
            addressCountry: "IN",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: `${business.siteUrl}/`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: `${areaName} Window Repair`,
              item: fullUrl,
            },
          ],
        }),
      },
    ],
  };
}
