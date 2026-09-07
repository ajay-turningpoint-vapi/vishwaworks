import { createFileRoute } from "@tanstack/react-router";

import { ServicePage, serviceHead } from "@/components/site/ServicePage";

const title = "Aluminium Window Repair in Powai | Frames & Fittings";
const description =
  "Aluminium window frame, section or fitting giving trouble in Powai? Send a photo on WhatsApp and get help with what to do next.";

export const Route = createFileRoute("/aluminium-window-repair-powai")({
  head: () =>
    serviceHead({
      title,
      description,
      path: "/aluminium-window-repair-powai",
      serviceName: "Aluminium Window Repair",
    }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      content={{
        h1: "ALUMINIUM WINDOW PROBLEM? SHOW US THE SECTION.",
        intro:
          "Aluminium windows come in many section types and fittings. A photo tells us the section and fitting type, so you don't have to describe it in technical words.",
        signs: [
          "The frame section feels loose or has separated at a joint",
          "The window rattles in the frame",
          "A fitting has come off or is missing",
          "Water or dust comes in around the edges",
          "The panel no longer closes flush",
        ],
        photoTip:
          "One photo of the full window from inside, and one close-up of the damaged section or joint from as near as you can safely get.",
        whatsappMessage:
          "Hi, I have an aluminium window problem in Powai. I am sending a photo of the window and the damaged section. Please help me understand what is needed.",
        locationKey: "service_aluminium_window",
      }}
    />
  );
}
