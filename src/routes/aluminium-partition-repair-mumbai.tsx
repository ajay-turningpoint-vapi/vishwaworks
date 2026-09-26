import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/site/ServicePage";

const title = "Aluminium Partition & Shutter Repair Mumbai | Office & Home";
const description =
  "Expert repair for aluminium office partitions, glass partitions, sliding shutters, door floor springs & hinges across Mumbai. Fast doorstep technician visits.";

export const Route = createFileRoute("/aluminium-partition-repair-mumbai")({
  head: () =>
    serviceHead({
      title,
      description,
      path: "/aluminium-partition-repair-mumbai",
      serviceName: "Aluminium Partition & Shutter Repair",
    }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      content={{
        h1: "LOOSE, SAGGING OR BROKEN ALUMINIUM PARTITIONS & SHUTTERS?",
        intro:
          "We repair and reinforce commercial and residential aluminium partitions, sliding office cubicles, heavy glass doors, floor springs, and rolling shutters throughout Mumbai.",
        signs: [
          "Partition doors sagging, scraping the floor or failing to latch",
          "Glass panels wobbling inside loose aluminium framing",
          "Heavy sliding partition tracks bent or derailed",
          "Floor spring hydraulic oil leakage or slamming door issue",
          "Loose frame joints and rattling metal sections",
        ],
        photoTip:
          "Send a full picture of the partition or door, plus a close-up of any loose hinges, floor machines, or joints.",
        whatsappMessage:
          "Hi, I need aluminium partition / shutter repair in Mumbai. Sending photo for inspection.",
        locationKey: "service_partition_repair",
      }}
    />
  );
}
