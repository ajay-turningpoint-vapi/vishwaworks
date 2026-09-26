import { createFileRoute } from "@tanstack/react-router";

import { ServicePage, serviceHead } from "@/components/site/ServicePage";

const title = "Sliding Window Wheels & Roller Replacement Powai | Glass Door Rollers";
const description =
  "Window dragging or heavy to slide? We offer sliding window wheels replacement and new rollers for sliding glass doors in Powai & Mumbai. Same-day repair.";

export const Route = createFileRoute("/window-roller-repair-powai")({
  head: () =>
    serviceHead({
      title,
      description,
      path: "/window-roller-repair-powai",
      serviceName: "Sliding Window Roller & Wheels Replacement",
    }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      content={{
        h1: "WINDOW DRAGGING? THE ROLLERS MAY BE WORN.",
        intro:
          "The small wheels under a sliding panel wear out with time and dust. When they do, the window drags, tilts or makes noise. A photo helps us see the type of roller used.",
        signs: [
          "The window scrapes along the track",
          "It feels heavy at one end only",
          "You hear a clicking or grinding noise",
          "The panel leans instead of standing straight",
          "It lifts out of the track easily",
        ],
        photoTip:
          "A close-up of the bottom edge of the sliding panel and the track underneath. If a roller is visible or has fallen out, photograph it too.",
        whatsappMessage:
          "Hi, my window is dragging and I think the rollers are worn. I am in Powai and sending a photo of the panel and track.",
        locationKey: "service_roller",
      }}
    />
  );
}
