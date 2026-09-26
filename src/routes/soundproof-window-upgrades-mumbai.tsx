import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/site/ServicePage";

const title = "Soundproof Window Upgrades Mumbai | Noise Reduction Glass";
const description =
  "Tired of traffic horns, construction noise, and street chaos? Upgrade your existing sliding windows with acoustic soundproof glass & high-density seals in Mumbai.";

export const Route = createFileRoute("/soundproof-window-upgrades-mumbai")({
  head: () =>
    serviceHead({
      title,
      description,
      path: "/soundproof-window-upgrades-mumbai",
      serviceName: "Soundproof Window Upgrades",
    }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      content={{
        h1: "TIRED OF MUMBAI TRAFFIC & NOISE? UPGRADE TO SOUNDPROOF WINDOWS.",
        intro:
          "You don't need to rebuild your walls or replace your entire frame. We upgrade your existing sliding and casement windows with double-glazed acoustic glass, acoustic laminates, and precision perimeter rubber seals to cut outside noise by up to 80%.",
        signs: [
          "Traffic horns, construction noise, or metro sounds wake you up",
          "Wind whistling loudly through window gaps during monsoons",
          "AC cooling escaping quickly, resulting in high electricity bills",
          "Single thin 4mm glass vibrating under heavy traffic rumble",
          "Existing sliding window lacking proper rubber acoustic gaskets",
        ],
        photoTip:
          "Send one photo of the entire window and frame, and one close-up of the track and glass thickness. Mention what kind of noise is bothering you.",
        whatsappMessage:
          "Hi, I want to soundproof my sliding windows in Mumbai. I am sending a photo of my window. Please guide me on options and pricing.",
        locationKey: "service_soundproof",
      }}
    />
  );
}
