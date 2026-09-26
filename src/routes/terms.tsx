import { createFileRoute, Link } from "@tanstack/react-router";
import { business } from "@/config/business";

const title = `Terms of Use | ${business.name} Window Repair Powai`;
const description =
  "Terms for using the Vishwa Windows website and for window repair enquiries sent on WhatsApp from Powai and nearby areas.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${business.siteUrl}/terms` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${business.siteUrl}/terms` }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-14">
      <Link to="/" className="text-sm font-semibold text-muted-foreground">
        ← Back to home
      </Link>
      <h1 className="mt-6 text-3xl font-extrabold text-primary">Terms of Use</h1>
      <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
        <p>
          This website gives general information about the window repair services
          offered by {business.name} in Powai and nearby areas.
        </p>
        <p>
          Any guidance given after you send a photo is based on what can be seen in
          that photo. The actual problem, the parts required and the final cost can
          only be confirmed after the window is inspected in person.
        </p>
        <p>
          Service availability depends on your area, the type of window and current
          workload. Nothing on this website is a promise of a fixed price or a fixed
          timeline.
        </p>
        <p>
          Costs, parts and timelines for any repair will be agreed with you directly
          before the work is carried out.
        </p>
      </div>
    </main>
  );
}
