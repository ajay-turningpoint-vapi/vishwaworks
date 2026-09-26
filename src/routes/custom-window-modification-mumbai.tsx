import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/site/ServicePage";

const title = "Custom Window Modification & Retrofitting Mumbai | Hardware Upgrades";
const description =
  "Modify old windows into smooth sliding systems, add mosquito tracks, upgrade safety glass & install modern hardware across Mumbai without changing existing civil walls.";

export const Route = createFileRoute("/custom-window-modification-mumbai")({
  head: () =>
    serviceHead({
      title,
      description,
      path: "/custom-window-modification-mumbai",
      serviceName: "Custom Window Modification",
    }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      content={{
        h1: "UPGRADE & MODIFY YOUR OLD WINDOWS WITHOUT CIVIL WORK.",
        intro:
          "Want to convert difficult-to-operate old windows, add a dedicated mosquito net channel, or retrofit modern flush handles and multipoint locks? Our custom fabrication and retrofitting team handles it on-site with zero wall damage.",
        signs: [
          "Want to add mosquito mesh track to existing 2-track sliding windows",
          "Need child-safety restrictors or grill modifications",
          "Upgrading outdated slide latches to modern key locks",
          "Converting fixed glass sections into operable ventilators",
          "Custom sizing and hardware replacement for non-standard frames",
        ],
        photoTip:
          "Send a photo of your existing window frame and describe what modification or upgrade you would like to achieve.",
        whatsappMessage:
          "Hi, I want custom window modifications/upgrades in Mumbai. Sending photos of my existing window frame.",
        locationKey: "service_custom_modification",
      }}
    />
  );
}
