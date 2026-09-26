import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/site/ServicePage";

const title = "Domal & Slim Domal Window Repair Mumbai | Heavy Balcony Doors";
const description =
  "Specialist repair and hardware replacement for Domal, Slim Domal, and Euro-groove sliding aluminium windows & doors in Mumbai. Heavy-duty bearings & locks.";

export const Route = createFileRoute("/domal-window-repair-mumbai")({
  head: () =>
    serviceHead({
      title,
      description,
      path: "/domal-window-repair-mumbai",
      serviceName: "Domal & Slim Domal Window Repair",
    }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      content={{
        h1: "DOMAL & SLIM DOMAL WINDOW OR DOOR HEAVY TO SLIDE?",
        intro:
          "Domal systems use specialized heavy profiles and high-capacity ball bearings. Standard carpenter repairs often fail because they install generic low-weight rollers. We carry authentic Domal-compatible steel bearings, multi-point locks, and precision guide tracks.",
        signs: [
          "Heavy Domal glass sliding door dragging on the bottom track",
          "Multipoint lock or flush handle stuck and refusing to latch",
          "Jammed sliding sash requiring full body force to move",
          "Interlocking profile misaligned causing draughts and leaks",
          "Screeching metal-on-metal sound during sliding",
        ],
        photoTip:
          "Take a photo of the bottom profile and the lock/handle mechanism. A short video of opening the door is ideal.",
        whatsappMessage:
          "Hi, I have Domal sliding windows/doors in Mumbai that need repair. I am sending a photo of the door and track. Please assist.",
        locationKey: "service_domal",
      }}
    />
  );
}
