import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/site/ServicePage";

const title = "Window Rubber Gasket & Silicone Weather Sealing Mumbai | Waterproofing";
const description =
  "Stop monsoon window leakage, draughts, and dust. Replace worn-out rubber gaskets, wool pile weatherstrips, and premium neutral-cure silicone sealing in Mumbai.";

export const Route = createFileRoute("/rubber-gasket-sealing-mumbai")({
  head: () =>
    serviceHead({
      title,
      description,
      path: "/rubber-gasket-sealing-mumbai",
      serviceName: "Rubber, Gasket & Silicone Sealing",
    }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      content={{
        h1: "MONSOON WATER SEEPAGE OR DUST LEAKING THROUGH WINDOWS?",
        intro:
          "Over time, sun exposure and Mumbai weather dry out rubber gaskets and shrink weatherpile brushes. We replace degraded EPDM rubber beadings and apply commercial-grade silicone weatherproofing to keep your home 100% leak-proof and dust-free.",
        signs: [
          "Rainwater seeping along window sills or bottom tracks during heavy monsoons",
          "Black dust and pollution constantly settling inside window frames",
          "Loud wind howling or whistling through window crevices",
          "Glass rattling inside the aluminium frame when wind blows",
          "Cracked, brittle, or missing rubber seal beadings",
        ],
        photoTip:
          "Send a photo showing the edge where the glass meets the frame, or where water/dust enters during rain.",
        whatsappMessage:
          "Hi, I have window water seepage/dust sealing issues in Mumbai. Sending photos for gasket and silicone sealing.",
        locationKey: "service_gasket_sealing",
      }}
    />
  );
}
