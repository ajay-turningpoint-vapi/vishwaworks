import { createFileRoute } from "@tanstack/react-router";

import { ServicePage, serviceHead } from "@/components/site/ServicePage";

const title = "Sliding Window Track Repair Powai | Sliding Glass Door Track Fix";
const description =
  "Bent, worn or blocked sliding track in Powai? We repair sliding glass door tracks, realign aluminium window rails, and restore smooth sliding without replacing the frame.";

export const Route = createFileRoute("/window-track-repair-powai")({
  head: () =>
    serviceHead({
      title,
      description,
      path: "/window-track-repair-powai",
      serviceName: "Sliding Window & Door Track Repair",
    }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      content={{
        h1: "TRACK DAMAGED? SHOW US BEFORE YOU DECIDE.",
        intro:
          "A window can stop moving simply because the track is bent, dented or packed with grit. A clear photo of the track usually shows what is going on.",
        signs: [
          "The track looks bent, dented or flattened",
          "The window stops at the same point every time",
          "The track is full of dust, grit or old grease",
          "The panel jumps out of the groove",
          "You can see a crack or split in the track",
        ],
        photoTip:
          "Take the photo along the length of the track at a low angle, so the bend or blockage is visible. Slide the panel to one side first if you can.",
        whatsappMessage:
          "Hi, my window track looks damaged. I am in Powai and sending a photo of the track. Please help me understand what is needed.",
        locationKey: "service_track",
      }}
    />
  );
}
