/**
 * CENTRAL BUSINESS CONFIGURATION
 * Change these values in one place — every button, link and text updates.
 */

export const business = {
  // Business details
  name: "Vishwa Works",
  founder: "Sumit Vishwakarma",
  tagline: "Show Us The Problem.",
  siteUrl: "https://vishwaworks.vercel.app",
  googleAnalyticsId: "G-SGTEKGVKG5",

  whatsappNumber: "919004515924",
  // Phone number used for the CALL NOW buttons
  phone: "+91 90045 15924",
  phoneHref: "tel:+919004515924",

  // Leave address empty until it is verified. Empty = not shown.
  address: "Shop no S/159/160 IIT MARKET, Near IIT Mumbai College, Jyotiba Phule Nagar, Powai, Mumbai 400076",
  // Paste the Google Business Profile short link here once the listing is live
  // (looks like https://g.page/r/XXXXXXXX or https://maps.app.goo.gl/XXXXXXXX).
  googleBusinessProfileUrl: "https://share.google/27mPvbYlLW7SoJ3rP",
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
  { title: "Sliding Glass Door Not Moving", desc: "Lifting a heavy balcony door with both hands just to walk out? Ruining your back every day.", icon: "🚪" },
  { title: "Window Won't Slide Or Jammed", desc: "Stuck halfway? Pushing with all your strength and worrying the glass panel might shatter.", icon: "🪟" },
  { title: "Crushed Rollers & Screeching Sound", desc: "Horrible grinding noise every time you touch it. Flattened wheels are cutting into the track.", icon: "⚙️" },
  { title: "Bent Track Or Window Jumping Off", desc: "Track is dented, warped, or full of grime. Window wobbles and jumps off the channel.", icon: "📏" },
  { title: "Broken Lock, Latch Or Handle", desc: "Can't lock it securely at night? Or broken handles cutting your fingers every time you pull.", icon: "🔒" },
  { title: "Cracked Or Broken Window Glass", desc: "Dangerous safety hazard waiting to fall, especially in high-rise winds and around kids.", icon: "💥" },
  { title: "Monsoon Rain Leakage & Drafts", desc: "Water pooling on the sill during heavy Mumbai rains, or expensive AC cooling escaping.", icon: "🌧️" },
  { title: "Loud Street Traffic & Rattling Noise", desc: "Traffic horns and construction noise keeping you awake. Single glass window rattles in the wind.", icon: "📢" },
  { title: "Torn Mosquito Net Or Bird Menace", desc: "Mosquitoes entering your home every evening, or pigeons nesting on your balcony tracks.", icon: "🦟" },
  { title: "Kitchen Exhaust Duct Or Ventilator", desc: "Chimney duct won't fit through the glass, or bathroom ventilator louvers need repair.", icon: "🍳" },
  { title: "Heavy Domal Sliding Door Issues", desc: "Heavy luxury Domal panel tilted, dragging on the marble frame, or extremely stiff to slide.", icon: "🏢" },
  { title: "Need Brand New Custom Windows", desc: "Old wooden/iron frames are rusted. Want brand new Jindal aluminium sliding windows custom fitted.", icon: "🔨" },
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
  },
  {
    category: "New Window Fabrication & Installation",
    items: [
      { name: "Brand New Aluminium Sliding Windows", desc: "Custom designed, fabricated & installed from our Powai workshop. High-grade Jindal aluminium, smooth-glide rollers, and premium powder-coated finishes." },
      { name: "New Domal & Slim Profile Systems", desc: "Heavy-duty luxury Domal sliding systems for high-rises and large balcony openings. Maximum wind resistance and acoustic sound isolation." },
      { name: "Custom French Windows & Balcony Enclosures", desc: "Transform your balcony or living space with full-height floor-to-ceiling glass, custom partitions, and sliding folding systems." },
      { name: "Double-Glazed Soundproof Window Installation", desc: "Brand new acoustic double-glazed (DGU) window systems engineered to eliminate 80%+ of Mumbai traffic and street noise." },
    ]
  }
] as const;

export const problemOptions = [
  "Need Brand New Windows / Installation",
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
    q: "A local mistri told me I must replace the whole window for ₹20,000. Is that true?",
    a: "95% of the time, NO. When your window gets stuck or screechy, the aluminium frame inside your wall is completely fine! Only the cheap bottom nylon wheels have crushed, or dirt has clogged the track. Replacing just the wheels and bearings in 45 minutes restores 1-finger glide and saves you ₹15,000+ in cold hard cash.",
  },
  {
    q: "How much will my repair cost? Are there any hidden fees?",
    a: "Zero hidden fees. Costs depend on whether it's a standard bedroom window or a heavy 70kg balcony sliding door. When you send a 5-second video on WhatsApp, our technicians see the exact roller size and give you an upfront, fixed price before visiting. What we quote is what you pay.",
  },
  {
    q: "What if you come to my house and cannot fix the problem?",
    a: "You pay ₹0. Zero. Nada. We operate on a strict 'No Fix, No Fee' guarantee. If our technicians cannot get your sliding window or door to glide smoothly, you do not owe us a single rupee for the visit. All the risk is on us.",
  },
  {
    q: "I don't know what's broken or what technical words to use. How do I get help?",
    a: "You don't need any technical words at all. Forget terms like 'tandem rollers' or 'interlock'. Just point your phone, take a 5-second video or photo of the problem, and send it to our WhatsApp. We will diagnose it and tell you exactly what's wrong within 5 minutes.",
  },
  {
    q: "Will the repair make a mess, break tiles, or leave cement dust in my home?",
    a: "Zero civil mess. We are precision hardware restoration specialists, not wall-breakers. We lift the sliding shutter, replace the worn-out rollers, service the track, and put it right back. The entire job takes 45 minutes with no broken tiles, no cement, and no dust on your furniture.",
  },
  {
    q: "Which areas in Mumbai do you cover, and how quickly can you visit?",
    a: "We provide 100% doorstep service anywhere in Mumbai — Powai, Bandra, Andheri, Worli, South Mumbai, Chembur, Ghatkopar, Goregaon, Malad, Mulund, and surrounding suburbs. Because our service vans carry heavy-duty replacement parts, we offer same-day doorstep visits. Message us early to lock in today's slot.",
  },
  {
    q: "What if I actually need brand new windows or soundproof glass?",
    a: "We do that too! If you are renovating or your old wooden/iron frames are completely rusted, we custom-fabricate brand new Jindal Aluminium, luxury Domal sliding systems, and acoustic soundproof DGU glass directly from our Powai workshop.",
  },
] as const;
