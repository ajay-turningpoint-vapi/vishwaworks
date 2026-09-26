import type { ReactNode } from "react";

import { Header } from "@/components/site/Header";
import { Faq, Footer, ServiceAreas, StickyMobileCTA } from "@/components/site/Sections";
import { CallButton, WhatsAppButton } from "@/components/site/cta";
import { business } from "@/config/business";

export type ServicePageContent = {
  h1: string;
  intro: string;
  signs: readonly string[];
  photoTip: string;
  whatsappMessage: string;
  locationKey: string;
};

export function ServicePage({
  content,
  children,
}: {
  content: ServicePageContent;
  children?: ReactNode;
}) {
  return (
    <>
      <Header />
      <main>
        <section className="bg-primary px-4 py-12 text-primary-foreground">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-accent">
              {business.areaLine}
            </p>
            <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
              {content.h1}
            </h1>
            <p className="mt-4 text-base text-primary-foreground/80">{content.intro}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton
                location={content.locationKey}
                message={content.whatsappMessage}
              >
                SEND PHOTO → GET HELP
              </WhatsAppButton>
              <CallButton location={content.locationKey} variant="outline" />
            </div>
            <p className="mt-4 text-sm text-primary-foreground/70">
              You don't need to know the technical name of the part. Just show us the
              problem.
            </p>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-2xl font-extrabold">
              Signs you may need this repair
            </h2>
            <ul className="mt-5 space-y-3">
              {content.signs.map((s) => (
                <li
                  key={s}
                  className="rounded-xl border border-border bg-card p-4 text-sm font-medium"
                >
                  {s}
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border-2 border-accent/40 bg-accent/10 p-5">
              <h2 className="font-display text-xl font-extrabold">
                What photo should you send?
              </h2>
              <p className="mt-2 text-sm text-foreground/80">{content.photoTip}</p>
              <div className="mt-5">
                <WhatsAppButton
                  location={`${content.locationKey}_photo_tip`}
                  message={content.whatsappMessage}
                >
                  SEND PHOTO ON WHATSAPP
                </WhatsAppButton>
              </div>
            </div>

            {children}
          </div>
        </section>

        <ServiceAreas />
        <Faq />

        <section className="bg-navy px-4 py-14 text-primary-foreground">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
              GOT A WINDOW PROBLEM? SHOW US. DON'T GUESS.
            </h2>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <WhatsAppButton
                location={`${content.locationKey}_final`}
                message={content.whatsappMessage}
              />
              <CallButton location={`${content.locationKey}_final`} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}

export function serviceHead({
  title,
  description,
  path,
  serviceName,
}: {
  title: string;
  description: string;
  path: string;
  serviceName: string;
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
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: fullUrl }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: serviceName,
          description,
          url: fullUrl,
          areaServed: business.serviceAreas.map((a) => ({
            "@type": "Place",
            name: `${a}, Mumbai`,
          })),
          provider: {
            "@type": "LocalBusiness",
            name: business.name,
            telephone: business.phone,
          },
        }),
      },
    ],
  };
}
