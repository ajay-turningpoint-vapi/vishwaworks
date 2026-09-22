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
  address: "Shop no S/159/160 IIT MARKET, Near IIT Mumbai College, Jyotiba Phule Nagar, Powai, Mumbai 400076",
  // Paste the Google Business Profile short link here once the listing is live
  // (looks like https://g.page/r/XXXXXXXX or https://maps.app.goo.gl/XXXXXXXX).
  googleBusinessProfileUrl: "",
  // Shown until the profile link above is added.
  googleMapsSearchUrl:
    "https://www.google.com/maps/search/?api=1&query=Vishwa+Windows+window+repair+Powai+Mumbai",
  // Leave empty until the real working hours are confirmed. Empty = not shown.
  hours: "",

  primaryArea: "Mumbai",
  areaLine: "Serving Premium High-Rises in Powai, Bandra, Worli & South Mumbai",

  serviceAreas: [
    "Powai & Hiranandani",
    "Chandivali & Saki Vihar",
    "Bandra & Juhu",
    "Worli & Prabhadevi",
    "South Mumbai & Cuffe Parade",
    "Andheri West & East",
    "Vikhroli & Ghatkopar",
    "Kanjurmarg & Bhandup",
    "Mulund & Nahur",
    "Goregaon & Malad",
    "Santacruz & Khar",
    "Dadar & Mahim",
    "Chembur & Sion",
    "BKC & Kurla",
    "Colaba & Fort",
    "Premium Mumbai Complexes",
  ],
} as const;

export const whatsappMessages = {
  default:
    "Hi, I have a window problem in Mumbai. I am sending a photo/video of the problem. Please help me understand what may be wrong and what I should do next.",
  area:
    "Hi, I want to check if you serve my area in Mumbai. I have a window problem and I will send a photo.",
} as const;

/** Build a wa.me link with a pre-filled message. */
export function whatsappLink(message: string = whatsappMessages.default) {
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const problems = [
  { title: "Sliding Door Not Moving", desc: "Lifting a heavy 80kg balcony door just to walk through it? You'll ruin your back before you ruin the door." },
  { title: "Window Won't Slide", desc: "Forcing it everyday? One wrong push and the glass could shatter." },
  { title: "Window Is Stuck", desc: "Trapped in a stuffy room? Or worse, unable to lock it securely at night?" },
  { title: "Roller Is Damaged", desc: "That screeching noise isn't just annoying, it's destroying the track underneath." },
  { title: "Track Is Damaged", desc: "Bent or dented? Your expensive AC cooling is probably leaking out through the gaps." },
  { title: "Lock Is Not Working", desc: "A faulty latch means anyone can slide it open from the outside." },
  { title: "Handle Is Broken", desc: "Cutting your fingers or breaking your nails trying to slide a heavy panel?" },
  { title: "Glass Is Broken", desc: "A massive safety hazard waiting to fall. Specially dangerous with kids around." },
] as const;

export const serviceCategories = [
  {
    category: "Core Window & Door Repairs",
    items: [
      { name: "Sliding Glass Door Repair", desc: "Heavy balcony door stuck or off-track? Send a short video and we'll identify the problem." },
      { name: "Sliding Window Repair", desc: "Trouble opening, closing or sliding your window? Send a photo for a quick diagnosis." },
      { name: "Roller & Track Repair", desc: "Restore effortless sliding and fix jammed or damaged tracks." },
      { name: "Lock & Handle Replacement", desc: "Smooth & secure operation. A photo helps us match the right type." },
      { name: "Window Glass Replacement", desc: "Cracked or broken glass panel? Show us the panel and the frame." },
      { name: "Window Alignment & Maintenance", desc: "Perfect alignment for smooth operation and complete servicing for better performance." },
    ]
  },
  {
    category: "Specialty Upgrades & Installations",
    items: [
      { name: "Soundproof Window Upgrades", desc: "Improve noise insulation. Sleep peacefully without traffic or monsoon noise." },
      { name: "Domal & Slim Domal Windows", desc: "Professional repair, servicing and modification for premium Domal windows." },
      { name: "Pigeon & Mosquito Safety Nets", desc: "Reliable balcony & window protection. Pleated, sliding, or fixed installations." },
      { name: "Rubber, Gasket & Silicone Sealing", desc: "Prevent gaps, leakage & drafts. Better sealing and monsoon protection." },
      { name: "Aluminium Partition & Shutter Repair", desc: "Fix loose, jammed or damaged shutters and aluminium frames." },
      { name: "Custom Window Modification", desc: "Upgrade old windows as required with custom sizing and modern hardware." },
    ]
  }
] as const;

export const problemOptions = [
  "Sliding door problem",
  "Window stuck",
  "Won't slide",
  "Roller / Track problem",
  "Lock / Handle broken",
  "Broken glass",
  "Need Soundproofing",
  "Need Pigeon/Mosquito Net",
  "Other",
] as const;

export const faqs = [
  {
    q: "Will you try to up-sell me an expensive replacement?",
    a: "No. Our entire business model is built on repair-first. 90% of windows can be fixed with new rollers or tracks for a fraction of the cost. We only recommend replacement if the frame is completely destroyed.",
  },
  {
    q: "Do I need to know the technical name of the broken part?",
    a: "Not at all. That's exactly why we encourage you to send a photo. Just point your camera at the problem, and our technicians will figure it out.",
  },
  {
    q: "What if you come over and can't fix it?",
    a: "Then you don't pay. Our 'No Fix, No Fee' guarantee means you have absolutely zero risk. If we can't figure out the problem or fix your window, you don't pay a single rupee for the visit.",
  },
  {
    q: "Are there any hidden visiting charges?",
    a: "No hidden fees. Once we see your photo on WhatsApp, we'll give you a clear idea of the potential costs. If a paid inspection is needed for a complex issue, we will tell you upfront before we ever leave the workshop.",
  },
  {
    q: "How fast can you fix my window?",
    a: "Most sliding window repairs (like roller or track replacement) take less than 45 minutes once we arrive. We deliberately limit how many residential visits we take on each day so every repair gets proper attention, so we recommend messaging us early.",
  },
  {
    q: "Do you serve my specific area?",
    a: "We currently serve premium residential complexes across Mumbai, including Powai, Bandra, Worli, Cuffe Parade, Juhu and nearby posh localities.",
  },
] as const;
