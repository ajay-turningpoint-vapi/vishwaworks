import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/site/ServicePage";

const title = "New Window Fabrication & Installation Mumbai | Custom Aluminium & Domal";
const description =
  "Need brand new sliding windows, Domal systems, or balcony glass enclosures in Mumbai? Custom fabrication directly from our Powai workshop with precision installation.";

export const Route = createFileRoute("/new-window-installation-mumbai")({
  head: () =>
    serviceHead({
      title,
      description,
      path: "/new-window-installation-mumbai",
      serviceName: "New Window Fabrication & Installation",
    }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      content={{
        h1: "BRAND NEW ALUMINIUM & DOMAL SLIDING WINDOW INSTALLATION IN MUMBAI.",
        intro:
          "Renovating your flat, replacing damaged frames, or building a new home? We custom-design, precision-cut, and fabricate high-grade Jindal aluminium, luxury Domal systems, soundproof DGU glass, and custom French balcony windows directly from our Powai workshop.",
        signs: [
          "Complete home renovation requiring modern, sleek aluminium sliding windows",
          "Old wooden or rusted steel window frames that need full replacement",
          "Upgrading to heavy-duty luxury Domal & slim-profile European systems",
          "Enclosing open balconies with floor-to-ceiling sliding glass partitions",
          "Installing high-performance acoustic double-glazed (DGU) soundproof glass windows",
        ],
        photoTip:
          "Send measurements or photos of the opening/wall where you need new windows installed. Mention if you prefer standard 27mm Jindal aluminium, heavy Domal, or soundproof double glass.",
        whatsappMessage:
          "Hi, I need brand new window fabrication & installation in Mumbai. I am sending the details/photos. Please share a quote.",
        locationKey: "service_new_windows",
      }}
    />
  );
}
