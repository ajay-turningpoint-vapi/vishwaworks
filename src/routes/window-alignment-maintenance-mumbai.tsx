import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/site/ServicePage";

const title = "Sliding Window Alignment & Deep Servicing Mumbai | Frictionless Glide";
const description =
  "Complete window servicing, height adjustment, track degreasing, bearing lubrication & square alignment for aluminium and UPVC sliding windows in Mumbai.";

export const Route = createFileRoute("/window-alignment-maintenance-mumbai")({
  head: () =>
    serviceHead({
      title,
      description,
      path: "/window-alignment-maintenance-mumbai",
      serviceName: "Window Alignment & Maintenance",
    }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      content={{
        h1: "SLIDING WINDOW TILTED, DRAGGING OR REQUIRING TOO MUCH EFFORT?",
        intro:
          "Over years of building vibration and everyday use, sliding window panels tilt out of square, causing the top to bind and the bottom to scrape. Our comprehensive servicing realigns the sash, levels the roller height, and restores effortless one-finger sliding.",
        signs: [
          "Visible gap at the top or bottom when the window is pushed shut",
          "Lock latch doesn't line up with the frame keeper slot",
          "Window needs lifting slightly before it can slide",
          "Heavy accumulation of grime, dust and rust in the track channel",
          "Rough vibration and resistance when opening",
        ],
        photoTip:
          "Send a photo showing the gap when the window is nearly closed, and a photo of the bottom track.",
        whatsappMessage:
          "Hi, my sliding windows need alignment and complete servicing in Mumbai. Sending photo.",
        locationKey: "service_alignment_maintenance",
      }}
    />
  );
}
