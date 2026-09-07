import { createFileRoute } from "@tanstack/react-router";

import { ServicePage, serviceHead } from "@/components/site/ServicePage";

const title = "Window Roller Replacement in Powai | Dragging Windows";
const description =
  "Window dragging, noisy or heavy to slide in Powai? Worn rollers are often the reason. Send a photo on WhatsApp and get help with the next step.";

export const Route = createFileRoute("/window-roller-repair-powai")({
  head: () =>
    serviceHead({
      title,
      description,
      path: "/window-roller-repair-powai",
      serviceName: "Window Roller Replacement",
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
