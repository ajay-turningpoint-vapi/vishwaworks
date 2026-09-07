import { createFileRoute } from "@tanstack/react-router";

import { ServicePage, serviceHead } from "@/components/site/ServicePage";

const title = "Sliding Window Repair in Powai | Stuck & Jammed Windows";
const description =
  "Sliding window stuck, jammed or hard to move in Powai? Send a photo on WhatsApp and get help understanding the problem and the next step.";

export const Route = createFileRoute("/sliding-window-repair-powai")({
  head: () =>
    serviceHead({
      title,
      description,
      path: "/sliding-window-repair-powai",
      serviceName: "Sliding Window Repair",
    }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      content={{
        h1: "SLIDING WINDOW STUCK? DON'T REPLACE IT YET.",
        intro:
          "Most sliding windows that stop moving smoothly have a problem in the rollers, the track or the alignment. Show us a photo and we will help you understand what is likely wrong.",
        signs: [
          "The window needs too much force to slide",
          "It moves part of the way and then jams",
          "It makes a grinding or scraping sound",
          "The panel sits unevenly in the frame",
          "It slips off the track when you push it",
        ],
        photoTip:
          "One photo of the whole window, and one close-up of the bottom track where the panel sits. A short video while you slide it helps even more.",
        whatsappMessage:
          "Hi, my sliding window in Powai is not sliding properly. I am sending a photo/video of the window and the track. Please help me understand the problem.",
        locationKey: "service_sliding_window",
      }}
    />
  );
}
