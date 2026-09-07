import { createFileRoute } from "@tanstack/react-router";

import { ServicePage, serviceHead } from "@/components/site/ServicePage";

const title = "Window Glass Replacement in Powai | Cracked & Broken Panels";
const description =
  "Cracked or broken window glass in Powai? Send a photo of the panel and frame on WhatsApp and get help with the next step.";

export const Route = createFileRoute("/window-glass-replacement-powai")({
  head: () =>
    serviceHead({
      title,
      description,
      path: "/window-glass-replacement-powai",
      serviceName: "Window Glass Replacement",
    }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      content={{
        h1: "BROKEN GLASS? SHOW US THE PANEL AND THE FRAME.",
        intro:
          "Glass is replaced to fit the panel and the frame that holds it. A photo of both, along with the crack, tells us what is involved.",
        signs: [
          "The glass is cracked across the panel",
          "A corner or edge is chipped",
          "The panel has shattered",
          "Glass is loose in the frame or the beading has come out",
          "There is a hole or missing piece",
        ],
        photoTip:
          "Keep a safe distance from broken glass. One photo of the whole window and one of the damaged panel is enough. Mention the rough size if you know it.",
        whatsappMessage:
          "Hi, my window glass is cracked/broken. I am in Powai and sending a photo of the panel and the frame.",
        locationKey: "service_glass",
      }}
    />
  );
}
