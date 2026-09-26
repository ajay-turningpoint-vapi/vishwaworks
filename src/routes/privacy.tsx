import { createFileRoute, Link } from "@tanstack/react-router";
import { business } from "@/config/business";

const title = `Privacy Policy | ${business.name} Window Repair Powai`;
const description =
  "How Vishwa Windows handles the details you share when you send a window repair enquiry on WhatsApp or through the enquiry form.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${business.siteUrl}/privacy` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${business.siteUrl}/privacy` }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-14">
      <Link to="/" className="text-sm font-semibold text-muted-foreground">
        ← Back to home
      </Link>
      <h1 className="mt-6 text-3xl font-extrabold text-primary">Privacy Policy</h1>
      <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
        <p>
          When you contact {business.name} on WhatsApp or through the short enquiry
          form, we receive the details you choose to share — usually your name,
          your phone number, your area and photos of the window problem.
        </p>
        <p>
          We use these details only to understand your problem, reply to you and
          arrange a repair or visit if one is needed.
        </p>
        <p>
          We do not sell your details. We do not send marketing emails. Photos you
          share stay in the chat with our team.
        </p>
        <p>
          This website may use basic analytics to count which sections lead to
          enquiries. This does not identify you personally.
        </p>
        <p>
          If you want your details or photos removed from our records, message us on
          WhatsApp at {business.phone} and we will remove them.
        </p>
      </div>
    </main>
  );
}
