/**
 * CENTRAL BUSINESS CONFIGURATION
 * Change these values in one place — every button, link and text updates.
 */

export const business = {
  // Placeholder name — replace with the confirmed business name.
  name: "Vishwa Windows",
  tagline: "Show Us The Problem.",

  whatsappNumber: "919004515924",
  // Phone number used for the CALL NOW buttons
  phone: "+91 90045 15924",
  phoneHref: "tel:+919004515924",

  // Leave address empty until it is verified. Empty = not shown.
  address: "",
  // Paste the Google Business Profile short link here once the listing is live
  // (looks like https://g.page/r/XXXXXXXX or https://maps.app.goo.gl/XXXXXXXX).
  googleBusinessProfileUrl: "",
  // Shown until the profile link above is added.
  googleMapsSearchUrl:
    "https://www.google.com/maps/search/?api=1&query=Vishwa+Windows+window+repair+Powai+Mumbai",
  // Leave empty until the real working hours are confirmed. Empty = not shown.
  hours: "",

  primaryArea: "Powai, Mumbai",
  areaLine: "Powai • Hiranandani • Chandivali & Nearby",

  serviceAreas: [
    "Powai",
    "Hiranandani Gardens",
    "Chandivali",
    "IIT Powai",
    "Saki Vihar",
    "Nearby Areas",
  ],
} as const;

export const whatsappMessages = {
  default:
    "Hi, I have a window problem in Powai. I am sending a photo/video of the problem. Please help me understand what may be wrong and what I should do next.",
  area:
    "Hi, I want to check if you serve my area near Powai. I have a window problem and I will send a photo.",
} as const;

/** Build a wa.me link with a pre-filled message. */
export function whatsappLink(message: string = whatsappMessages.default) {
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const problems = [
  { title: "Window Won't Slide", desc: "Feels jammed or takes too much force to move?" },
  { title: "Window Is Stuck", desc: "Will not open or will not close properly?" },
  { title: "Roller Is Damaged", desc: "Window drags, makes noise or sits unevenly?" },
  { title: "Track Is Damaged", desc: "Track looks bent, dented or full of grit?" },
  { title: "Lock Is Not Working", desc: "Window does not lock or the latch slips?" },
  { title: "Handle Is Broken", desc: "Handle is loose, cracked or has come off?" },
  { title: "Glass Is Broken", desc: "Cracked, chipped or shattered glass panel?" },
  { title: "Sliding Door Not Moving", desc: "Heavy to push, or comes off the track?" },
] as const;

export const services = [
  {
    name: "Sliding Window Repair",
    desc: "Trouble opening, closing or sliding your window? Send a photo and we'll help identify the problem.",
  },
  {
    name: "Aluminium Window Repair",
    desc: "Aluminium frame, section or fitting giving trouble? Show us and we'll look at it.",
  },
  {
    name: "Window Roller Replacement",
    desc: "Window dragging or noisy? The rollers underneath are often the reason.",
  },
  {
    name: "Window Track Repair",
    desc: "Bent, worn or blocked tracks can stop a window from moving smoothly.",
  },
  {
    name: "Window Lock Repair",
    desc: "Lock not catching or feeling loose? Send a close-up photo of the lock.",
  },
  {
    name: "Handle Replacement",
    desc: "Broken or missing handle? A photo helps us match the right type.",
  },
  {
    name: "Window Glass Replacement",
    desc: "Cracked or broken glass panel? Show us the panel and the frame.",
  },
  {
    name: "Sliding Door Repair",
    desc: "Heavy, stuck or off-track sliding door? Send a short video if you can.",
  },
  {
    name: "Mosquito Net Repair / Installation",
    desc: "Torn net or a net that no longer slides? Show us the current setup.",
  },
  {
    name: "Aluminium Frame Repair",
    desc: "Loose, damaged or separated frame sections? A photo tells us a lot.",
  },
] as const;

export const problemOptions = [
  "Window stuck",
  "Won't slide",
  "Roller problem",
  "Track problem",
  "Lock problem",
  "Handle problem",
  "Broken glass",
  "Sliding door problem",
  "Other",
] as const;

export const faqs = [
  {
    q: "Do I need to know what is wrong with my window?",
    a: "No. That's exactly why we encourage you to send a photo. We'll help you understand the possible problem.",
  },
  {
    q: "Can I send a photo before booking?",
    a: "Yes. Send a photo or short video on WhatsApp so the team can understand the issue.",
  },
  {
    q: "Do you repair sliding windows?",
    a: "Yes — sliding window repair is one of the main things we work on. Send a photo of the window and the track.",
  },
  {
    q: "Do you repair aluminium windows?",
    a: "Yes — aluminium windows, frames and fittings. A photo helps us see the section and the fitting type.",
  },
  {
    q: "Do you replace broken glass?",
    a: "Yes. Please share a photo of the broken panel along with the frame around it.",
  },
  {
    q: "Do you come to the customer's home?",
    a: "Visits are arranged after we see the photo and understand the problem. Please confirm the visit and timing with the team on WhatsApp.",
  },
  {
    q: "What areas do you serve?",
    a: "Powai, Hiranandani Gardens, Chandivali, IIT Powai, Saki Vihar and nearby areas, subject to service availability.",
  },
  {
    q: "How much does repair cost?",
    a: "Repair cost depends on the problem, the parts required and the work involved. Send a photo first so the team can understand the issue.",
  },
] as const;
