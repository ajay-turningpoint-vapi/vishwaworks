/**
 * CENTRAL BUSINESS CONFIGURATION
 * Change these values in one place — every button, link and text updates.
 */

export const business = {
  // Business details
  name: "Vishwa Windows",
  founder: "Sumit Vishwakarma",
  tagline: "Show Us The Problem.",
  siteUrl: "https://vishwaworks.vercel.app",

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
  { title: "Sliding Door Not Moving", desc: "Lifting a heavy balcony door just to walk through it? You'll ruin your back." },
  { title: "Window Won't Slide", desc: "Forcing it everyday? One wrong push and the glass could shatter." },
  { title: "Window Is Stuck", desc: "Trapped in a stuffy room? Or worse, unable to lock it securely at night?" },
  { title: "Roller Is Damaged", desc: "That screeching noise isn't just annoying, it's destroying the track underneath." },
  { title: "Track Is Damaged", desc: "Bent tracks? Your expensive AC cooling is leaking out, and Powai dust is coming in." },
  { title: "Lock Is Not Working", desc: "A faulty latch means anyone can slide it open from the outside." },
  { title: "Handle Is Broken", desc: "Cutting your fingers or breaking your nails trying to slide a heavy panel?" },
  { title: "Glass Is Broken", desc: "A massive safety hazard waiting to fall. Specially dangerous with kids around." },
] as const;

export const serviceCategories = [
  {
    category: "Core Window & Door Repairs",
    items: [
      { name: "Sliding Glass Door Repair Mumbai", desc: "Heavy balcony door stuck or off-track? Our sliding door repair Mumbai experts will fix it fast." },
      { name: "Aluminium Sliding Window Repair", desc: "Trouble opening or closing? We fix jammed sliding windows instantly. Send a photo for a quick diagnosis." },
      { name: "Sliding Window Roller Replacement", desc: "We provide sliding window roller replacement and sliding window track repair to restore effortless sliding." },
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
    q: "Will you force me to buy expensive new windows?",
    a: "No. Many Mumbai contractors love selling new windows because they make huge margins. We do the opposite. 90% of the time, we can repair your stuck windows with new rollers or tracks for a fraction of the cost. We only recommend replacement if the frame is completely destroyed.",
  },
  {
    q: "I don't know what part is broken. Can I still contact you?",
    a: "Yes! That's exactly why we use WhatsApp. You don't need to be a window expert. Just point your phone camera at the problem, record a 5-second video, and send it to us. Our technicians will figure it out instantly.",
  },
  {
    q: "What if you come to my house and can't fix it?",
    a: "Then you don't pay. Our 'No Fix, No Fee' guarantee means you have absolutely zero risk. If our technicians can't solve the problem, you do not pay a single rupee for the visit.",
  },
  {
    q: "Will you hit me with hidden charges after the work is done?",
    a: "Absolutely not. Once we review your WhatsApp video, we give you a clear estimate. No sudden 'material costs' or hidden fees at the end of the job. You pay exactly what we agree on.",
  },
  {
    q: "How long does it take? Will it make a huge mess in my home?",
    a: "Most repairs take less than 45 minutes once we arrive. And because we specialize in hardware repairs, there is NO civil work, NO breaking walls, and NO cement dust left in your living room.",
  },
  {
    q: "Do you serve my area in Mumbai?",
    a: "We serve premium residential complexes across all of Mumbai, including Powai, Bandra, Worli, South Mumbai, Juhu, and nearby areas. Just drop your location on WhatsApp to confirm.",
  },
] as const;
