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
  { title: "Sliding Glass Door Not Moving", desc: "Lifting a heavy balcony door just to walk through it? You'll ruin your back." },
  { title: "Window Won't Slide or Stuck", desc: "Forcing it everyday? One wrong push and the glass could shatter." },
  { title: "Window Slider Is Jammed", desc: "Trapped in a stuffy room? Or worse, unable to lock it securely at night?" },
  { title: "Rollers & Wheels Damaged", desc: "That screeching noise isn't just annoying, it's destroying the bottom track underneath." },
  { title: "Sliding Track Is Damaged", desc: "Bent tracks? Your expensive AC cooling is leaking out, and Mumbai dust is coming in." },
  { title: "Lock & Latch Not Working", desc: "A faulty or stuck latch means anyone can slide it open from the outside." },
  { title: "Handle Is Broken", desc: "Cutting your fingers or breaking your nails trying to slide a heavy panel?" },
  { title: "Window Glass Is Broken", desc: "A massive safety hazard waiting to fall. Specially dangerous with kids around." },
] as const;

export const serviceCategories = [
  {
    category: "Core Window & Door Repairs",
    items: [
      { name: "Sliding Glass Door Repair Mumbai", desc: "Looking for sliding glass door repair near me? Heavy balcony door stuck, off-track, or dragging? We fix it fast." },
      { name: "Aluminium Sliding Window Repair", desc: "Trouble opening or closing? We fix jammed sliding windows and window sliders instantly. Send a photo for quick diagnosis." },
      { name: "Sliding Window Roller & Wheels Replacement", desc: "We provide sliding window wheels replacement, new rollers for sliding glass doors, and track repair to restore effortless sliding." },
      { name: "Lock & Latch Replacement", desc: "Replace sliding glass door locks, aluminium latches and handles for smooth & secure operation." },
      { name: "Window Glass Replacement", desc: "Cracked or broken sliding door glass repair and window glass pane replacement with safe cleanup." },
      { name: "Window Alignment & Maintenance", desc: "Perfect alignment for smooth operation, track degreasing, and complete servicing for effortless glide." },
    ]
  },
  {
    category: "Specialty Upgrades & Installations",
    items: [
      { name: "Soundproof Window Upgrades", desc: "Improve noise insulation with acoustic double glass. Sleep peacefully without traffic or monsoon noise." },
      { name: "Domal & Slim Domal Windows", desc: "Professional repair, heavy bearing replacement, and servicing for premium Domal sliding doors & windows." },
      { name: "Pigeon & Mosquito Safety Nets", desc: "Reliable balcony & window protection. Pleated sliding screens, insect mesh, or fixed nylon bird nets." },
      { name: "Rubber, Gasket & Silicone Sealing", desc: "Stop water leakage, drafts & black dust. High-durability EPDM rubber seals and monsoon waterproofing." },
      { name: "Aluminium Partition & Shutter Repair", desc: "Fix loose, jammed or damaged commercial office partitions, floor springs, and aluminium frames." },
      { name: "Custom Window Modification", desc: "Upgrade old windows with custom sizing, extra mosquito tracks, and modern security hardware." },
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
    q: "What is the cost to replace rollers and wheels on a sliding glass door or window?",
    a: "The cost depends on the size of the panel (e.g. heavy balcony glass door vs. standard bedroom window) and the type of bearing required (heavy-duty nylon, stainless steel, or Domal tandem rollers). When you send a 5-second video on WhatsApp, we identify the exact roller type and give you an upfront, fixed price before visiting. No hidden charges.",
  },
  {
    q: "How do you fix a jammed sliding window or stuck sliding glass door?",
    a: "90% of jammed sliding windows are caused by broken roller bearings, misaligned sashes, or debris flattened into the bottom track channel. Our technicians lift the sash, remove the broken wheels, clean and realign the track, install precision heavy-duty rollers, and lubricate the system for effortless one-finger sliding — all completed in 45 minutes on-site.",
  },
  {
    q: "Will you force me to buy expensive new windows?",
    a: "No. Many contractors push homeowners to replace the entire window frame (costing ₹15,000+). We do the exact opposite. We specialize in hardware restoration — replacing only the worn-out rollers, tracks, locks, or glass for a fraction of the cost.",
  },
  {
    q: "I don't know what part is broken. Can I still contact you?",
    a: "Yes! That's exactly why we use WhatsApp. You don't need to be a window expert. Just point your phone camera at the problem, record a 5-second video, and send it to us. Our technicians will diagnose it instantly.",
  },
  {
    q: "What if you come to my house and can't fix it?",
    a: "Then you don't pay. Our 'No Fix, No Fee' guarantee means you have absolutely zero risk. If our technicians can't solve the problem, you do not pay a single rupee for the visit.",
  },
  {
    q: "How long does the repair take? Will it make a mess in my home?",
    a: "Most sliding window and door repairs take less than 45 minutes. Because we work directly on the sash and track hardware, there is NO civil work, NO breaking walls, and NO cement dust left in your home.",
  },
  {
    q: "Do you provide sliding window and door repair near me across Mumbai?",
    a: "Yes! We provide on-site doorstep repairs across all Mumbai residential societies and high-rises including Powai, Bandra, Andheri, Worli, South Mumbai, Ghatkopar, Chandivali, Chembur, Mulund, Goregaon, and nearby areas.",
  },
] as const;
