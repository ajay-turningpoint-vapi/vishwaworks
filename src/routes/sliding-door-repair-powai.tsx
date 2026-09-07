import { createFileRoute } from "@tanstack/react-router";

import { ServicePage, serviceHead } from "@/components/site/ServicePage";

const title = "Sliding Door Repair in Powai | Heavy & Off-Track Doors";
const description =
  "Sliding door heavy, stuck or off the track in Powai? Send a photo or short video on WhatsApp and get help with the next step.";

export const Route = createFileRoute("/sliding-door-repair-powai")({
  head: () =>
    serviceHead({
      title,
      description,
      path: "/sliding-door-repair-powai",
      serviceName: "Sliding Door Repair",
    }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      content={{
        h1: "SLIDING DOOR HEAVY OR OFF-TRACK? SHOW US.",
        intro:
          "Sliding doors are heavier than windows, so worn rollers and damaged tracks show up faster. A short video while you push it tells us a lot.",
        signs: [
          "The door needs both hands to move",
          "It has come off the bottom track",
          "It drags on the floor or the track",
          "The lock no longer lines up",
          "There is a gap when the door is closed",
        ],
        photoTip:
          "One photo of the full door, one close-up of the bottom track, and if possible a short video while you slide it open and shut.",
        whatsappMessage:
          "Hi, my sliding door is heavy/off the track. I am in Powai and sending a photo/video of the door and the track.",
        locationKey: "service_sliding_door",
      }}
    />
  );
}
