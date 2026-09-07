import { createFileRoute } from "@tanstack/react-router";

import { ServicePage, serviceHead } from "@/components/site/ServicePage";

const title = "Window Lock & Handle Repair in Powai | Latches & Handles";
const description =
  "Window lock not catching or handle broken in Powai? Send a close-up photo on WhatsApp so the right part can be identified.";

export const Route = createFileRoute("/window-lock-repair-powai")({
  head: () =>
    serviceHead({
      title,
      description,
      path: "/window-lock-repair-powai",
      serviceName: "Window Lock and Handle Repair",
    }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      content={{
        h1: "LOCK NOT WORKING? HANDLE BROKEN? SEND A CLOSE-UP.",
        intro:
          "Locks and handles come in many shapes. A close-up photo lets us match the right type instead of guessing over a phone call.",
        signs: [
          "The latch does not catch when you close the window",
          "The lock turns but nothing holds",
          "The handle is loose, cracked or has come off",
          "A screw hole has widened and will not hold",
          "The window can be pushed open even when locked",
        ],
        photoTip:
          "One close-up of the lock or handle from the front, and one from the side showing how it is fixed to the frame.",
        whatsappMessage:
          "Hi, my window lock/handle is not working. I am in Powai and sending a close-up photo of the lock and handle.",
        locationKey: "service_lock",
      }}
    />
  );
}
