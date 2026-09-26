import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/site/ServicePage";

const title = "Pigeon & Mosquito Safety Nets Mumbai | Balcony & Window Netting";
const description =
  "Durable pigeon safety nets, anti-bird spikes, pleated mosquito mesh & sliding insect screens for balconies and windows across Mumbai. Same day measurement.";

export const Route = createFileRoute("/safety-nets-installation-mumbai")({
  head: () =>
    serviceHead({
      title,
      description,
      path: "/safety-nets-installation-mumbai",
      serviceName: "Pigeon & Mosquito Safety Nets",
    }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      content={{
        h1: "PIGEON MENACE OR MOSQUITO ISSUES? GET HEAVY-DUTY BALCONY & WINDOW NETS.",
        intro:
          "Keep your balcony clean, bird-free, and protected without ruining your outside view or blocking fresh airflow. We install UV-stabilized nylon bird nets, stainless steel bird spikes, and smooth pleated sliding insect mesh.",
        signs: [
          "Pigeons nesting on AC outdoor units or balcony corners",
          "Bird droppings ruining window glass and creating hygiene hazards",
          "Torn or rusted old mosquito mesh on sliding window frames",
          "Insects and mosquitoes entering whenever windows are opened",
          "Need child-safe and pet-safe balcony net barriers",
        ],
        photoTip:
          "Send a full photo of your balcony or window opening. If you want mosquito mesh on existing sliding tracks, send a photo of the frame track.",
        whatsappMessage:
          "Hi, I need pigeon net / mosquito mesh installation in Mumbai. Sending photo of my balcony/window area.",
        locationKey: "service_safety_nets",
      }}
    />
  );
}
