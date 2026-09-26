export type AreaDetail = {
  name: string;
  slug: string;
  path: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  commonIssues: string[];
  whatsappMessage: string;
  locationKey: string;
};

export const areasList: AreaDetail[] = [
  {
    name: "Powai & Hiranandani",
    slug: "window-repair-powai-hiranandani",
    path: "/window-repair-powai-hiranandani",
    title: "Window Repair Powai & Hiranandani | Sliding & Aluminium Door Fix",
    description: "Expert sliding window and balcony door repair in Powai & Hiranandani Mumbai. We fix jammed tracks, broken rollers, locks & glass with same-day doorstep service.",
    h1: "WINDOW & SLIDING DOOR REPAIR IN POWAI & HIRANANDANI",
    intro: "Stuck or noisy sliding windows in Hiranandani Gardens or Powai high-rises? Send us a quick photo or video on WhatsApp for an upfront estimate and fast on-site repair.",
    commonIssues: [
      "Jammed heavy balcony sliding doors in high-rise towers",
      "Worn-out nylon rollers grinding on aluminium tracks",
      "Faulty latch locks and loose handles failing to seal",
      "Monsoon water seepage and whistling wind noise through gaps"
    ],
    whatsappMessage: "Hi, I live in Powai / Hiranandani and have a window/sliding door problem. I am sending a photo/video. Please give me an estimate.",
    locationKey: "area_powai_hiranandani"
  },
  {
    name: "Chandivali & Saki Vihar",
    slug: "window-repair-chandivali-saki-vihar",
    path: "/window-repair-chandivali-saki-vihar",
    title: "Window Repair Chandivali & Saki Vihar | Sliding Window Service",
    description: "Reliable aluminium sliding window & door repair across Chandivali, Saki Vihar & Nahar Amrit Shakti. Bearing replacement, track alignment & lock repairs.",
    h1: "SLIDING WINDOW & DOOR REPAIR IN CHANDIVALI & SAKI VIHAR",
    intro: "Serving Nahar Amrit Shakti, Raheja Vihar, and Chandivali societies. We restore jammed sliding panels and heavy glass balcony doors to smooth operation.",
    commonIssues: [
      "Sliding windows stuck or requiring heavy effort to push",
      "Corroded bearings due to dust and moisture",
      "Broken window glass pane replacement",
      "Mosquito mesh and pigeon net installation & repairs"
    ],
    whatsappMessage: "Hi, I need window repair service in Chandivali / Saki Vihar. Sending a photo of the issue.",
    locationKey: "area_chandivali"
  },
  {
    name: "Bandra & Juhu",
    slug: "window-repair-bandra-juhu",
    path: "/window-repair-bandra-juhu",
    title: "Sliding Window Repair Bandra & Juhu | Aluminium & Glass Door Repair",
    description: "Doorstep sliding window & balcony door repairs in Bandra West, Bandra East, Khar & Juhu. Rust-resistant marine-grade rollers and track realignment.",
    h1: "PREMIUM WINDOW & SLIDING DOOR REPAIR IN BANDRA & JUHU",
    intro: "Coastal air in Bandra & Juhu quickly corrodes cheap window rollers and tracks. We install high-grade, rust-resistant heavy-duty bearings for smooth, quiet sliding.",
    commonIssues: [
      "Sea-breeze corrosion causing rusted roller wheels",
      "Heavy French window and acoustic glass door jamming",
      "Broken multipoint locks and premium window handles",
      "Rubber gasket replacement to block coastal monsoon leaks"
    ],
    whatsappMessage: "Hi, I need window repair in Bandra / Juhu. I'm sharing a photo of my window problem.",
    locationKey: "area_bandra_juhu"
  },
  {
    name: "Worli & Prabhadevi",
    slug: "window-repair-worli-prabhadevi",
    path: "/window-repair-worli-prabhadevi",
    title: "Window Repair Worli & Prabhadevi | High-Rise Sliding Window Specialists",
    description: "Specialist sliding window and balcony glass door repair for luxury high-rises in Worli, Lower Parel & Prabhadevi. Quiet, mess-free doorstep service.",
    h1: "HIGH-RISE WINDOW REPAIR IN WORLI & PRABHADEVI",
    intro: "Experienced in servicing premium high-rise apartments and sea-facing towers in Worli and Prabhadevi. We fix heavy sliding systems safely without disturbing your home.",
    commonIssues: [
      "High-rise wind pressure making heavy sliding panels shudder",
      "Domal and slim-profile sliding door roller failures",
      "Soundproofing gasket wear causing street noise intrusion",
      "Child safety window locks and restrictor installation"
    ],
    whatsappMessage: "Hi, I need sliding window repair in Worli / Prabhadevi. Sharing photos of the problem.",
    locationKey: "area_worli_prabhadevi"
  },
  {
    name: "South Mumbai & Cuffe Parade",
    slug: "window-repair-south-mumbai-cuffe-parade",
    path: "/window-repair-south-mumbai-cuffe-parade",
    title: "Window Repair South Mumbai | Cuffe Parade, Marine Lines, Malabar Hill",
    description: "Expert sliding window and aluminium door repair in South Mumbai, Cuffe Parade, Malabar Hill & Marine Drive. Fast, respectful technician visits.",
    h1: "SLIDING WINDOW & DOOR REPAIR IN SOUTH MUMBAI",
    intro: "Serving heritage homes and luxury sea-view residences across South Mumbai. We provide custom hardware replacement that matches your existing frames perfectly.",
    commonIssues: [
      "Heavy vintage and modern sliding glass systems off-track",
      "Brass and aluminium latch repair and replacement",
      "Acoustic sealing to minimize traffic and city noise",
      "Emergency cracked window glass pane replacement"
    ],
    whatsappMessage: "Hi, I have a window repair requirement in South Mumbai. Sending a photo for a quote.",
    locationKey: "area_south_mumbai"
  },
  {
    name: "Andheri West & East",
    slug: "window-repair-andheri-west-east",
    path: "/window-repair-andheri-west-east",
    title: "Sliding Window Repair Andheri West & East | Fast Doorstep Service",
    description: "Same-day aluminium sliding window and door repairs in Andheri West (Lokhandwala, Oshiwara) and Andheri East (MIDC, Marol, JB Nagar, Chakala).",
    h1: "SLIDING WINDOW & BALCONY DOOR REPAIR IN ANDHERI",
    intro: "From Lokhandwala and Versova to Chakala and Marol, we fix jammed sliding windows, off-track balcony doors, and worn-out wheels within 45 minutes.",
    commonIssues: [
      "Balcony sliding door off-track and scraping the floor",
      "Broken window handles and stuck safety locks",
      "Damaged aluminium bottom channels and bent guide tracks",
      "Pigeon protection nets and pleated mosquito screens"
    ],
    whatsappMessage: "Hi, I need window repair in Andheri. Sending photo and location details.",
    locationKey: "area_andheri"
  },
  {
    name: "Vikhroli & Ghatkopar",
    slug: "window-repair-vikhroli-ghatkopar",
    path: "/window-repair-vikhroli-ghatkopar",
    title: "Window Repair Vikhroli & Ghatkopar | Sliding Window Roller Replacement",
    description: "Doorstep sliding window repair in Ghatkopar East/West & Vikhroli (Godrej The Trees, Parksite). Quick roller, lock & track replacement.",
    h1: "WINDOW & SLIDING DOOR REPAIR IN VIKHROLI & GHATKOPAR",
    intro: "Serving Godrej The Trees, Pant Nagar, Ghatkopar and surrounding societies. We eliminate screeching noise and hard-to-push window panels fast.",
    commonIssues: [
      "Loud screeching noise when opening balcony windows",
      "Uneven gap at the top allowing dust and insects inside",
      "Loose or broken locking mechanisms on aluminium frames",
      "Track realignment and heavy-duty bearing upgrades"
    ],
    whatsappMessage: "Hi, I have a window problem in Ghatkopar / Vikhroli. Sending photo.",
    locationKey: "area_vikhroli_ghatkopar"
  },
  {
    name: "Kanjurmarg & Bhandup",
    slug: "window-repair-kanjurmarg-bhandup",
    path: "/window-repair-kanjurmarg-bhandup",
    title: "Window Repair Kanjurmarg & Bhandup | Sliding Window Fixes",
    description: "Sliding window repair service across Kanjurmarg West, Kanjur East & Bhandup. Serving Runwal Forests, Lodha, Dreams Complex and nearby high-rises.",
    h1: "WINDOW REPAIR IN KANJURMARG & BHANDUP",
    intro: "Serving Runwal Forests, Lodha Aurum, Dreams Complex and all nearby residential societies with fast, dependable on-site hardware repairs.",
    commonIssues: [
      "Stuck high-rise sliding windows exposed to heavy winds",
      "Broken plastic or metal roller wheels inside the frame",
      "Aluminium lock replacement and handle tightening",
      "Complete track cleaning, adjustment and lubrication"
    ],
    whatsappMessage: "Hi, I live in Kanjurmarg / Bhandup and need my window repaired. Here is a photo.",
    locationKey: "area_kanjurmarg_bhandup"
  },
  {
    name: "Mulund & Nahur",
    slug: "window-repair-mulund-nahur",
    path: "/window-repair-mulund-nahur",
    title: "Window Repair Mulund & Nahur | Sliding Aluminium Window Service",
    description: "Expert sliding window and balcony door repairs in Mulund West, Mulund East & Nahur. Roller replacement, bent track repair, lock fixes.",
    h1: "SLIDING WINDOW REPAIR IN MULUND & NAHUR",
    intro: "Serving residential complexes in Mulund and Nahur. We arrive equipped with replacement parts to fix your window in a single quick visit.",
    commonIssues: [
      "Windows hard to slide or jumping out of the bottom track",
      "Shattered or cracked window glass needing urgent replacement",
      "Faulty latch locks leaving windows unlocked",
      "Sealing gaps to stop monsoon rain leaks"
    ],
    whatsappMessage: "Hi, I need window repair in Mulund / Nahur. Sending photos of the issue.",
    locationKey: "area_mulund_nahur"
  },
  {
    name: "Goregaon & Malad",
    slug: "window-repair-goregaon-malad",
    path: "/window-repair-goregaon-malad",
    title: "Window Repair Goregaon & Malad | Sliding Door & Window Technicians",
    description: "Doorstep sliding window and door repair in Goregaon West/East, Malad West/East, Mindspace & Bangur Nagar. No fix no fee guarantee.",
    h1: "SLIDING WINDOW & DOOR REPAIR IN GOREGAON & MALAD",
    intro: "Serving Gokuldham, Oberoi Woods, Mindspace, and residential complexes across Goregaon and Malad with professional window hardware servicing.",
    commonIssues: [
      "Heavy 3-track sliding balcony doors jammed or dragging",
      "Cracked roller wheels causing damage to the bottom rail",
      "Loose handles and missing end-caps on aluminium sashes",
      "Noise isolation and acoustic window brush seal replacement"
    ],
    whatsappMessage: "Hi, I need window repair service in Goregaon / Malad. Sending photos on WhatsApp.",
    locationKey: "area_goregaon_malad"
  },
  {
    name: "Santacruz & Khar",
    slug: "window-repair-santacruz-khar",
    path: "/window-repair-santacruz-khar",
    title: "Window Repair Santacruz & Khar | Aluminium Sliding Window Fix",
    description: "Prompt window repair in Santacruz West, Santacruz East & Khar. Specialist sliding door rollers, tracks, locks & safety nets.",
    h1: "PREMIUM WINDOW REPAIR IN SANTACRUZ & KHAR",
    intro: "Providing smooth sliding window repairs for apartments and bungalows across Khar and Santacruz. Quality parts with 6 months warranty.",
    commonIssues: [
      "Jammed bedroom and balcony sliding windows",
      "Worn out bearings causing scraping friction on tracks",
      "Damaged sliding locks and child-safety restrictors",
      "Balcony pigeon safety nets and invisible grill mesh"
    ],
    whatsappMessage: "Hi, I have a window problem in Santacruz / Khar. Sharing a photo.",
    locationKey: "area_santacruz_khar"
  },
  {
    name: "Dadar & Mahim",
    slug: "window-repair-dadar-mahim",
    path: "/window-repair-dadar-mahim",
    title: "Window Repair Dadar & Mahim | Sliding Window & Door Service",
    description: "Doorstep aluminium sliding window repairs in Dadar East/West, Shivaji Park, Matunga & Mahim. Same day diagnosis and repair.",
    h1: "SLIDING WINDOW REPAIR IN DADAR & MAHIM",
    intro: "Serving Shivaji Park, Hindu Colony, Matunga, Dadar and Mahim with reliable, honest window restoration without costly frame replacement.",
    commonIssues: [
      "Old sliding windows with worn-out bottom rollers",
      "Bent aluminium rails causing panels to stick midway",
      "Window handles snapped or locking latches loose",
      "Glass pane replacement and silicone weatherproofing"
    ],
    whatsappMessage: "Hi, I need window repair in Dadar / Mahim. Sending photo on WhatsApp.",
    locationKey: "area_dadar_mahim"
  },
  {
    name: "Chembur & Sion",
    slug: "window-repair-chembur-sion",
    path: "/window-repair-chembur-sion",
    title: "Window Repair Chembur & Sion | Sliding Window Roller Replacement",
    description: "Fast sliding window and door repairs in Chembur, Sion, Diamond Garden & Tilak Nagar. Top quality rollers, tracks and locks.",
    h1: "SLIDING WINDOW REPAIR IN CHEMBUR & SION",
    intro: "Serving high-rises and societies across Chembur and Sion. We fix screeching, heavy, or jammed windows on the spot with zero mess.",
    commonIssues: [
      "Stiff sliding panels needing two hands to open",
      "Corroded tracks from dust and rainwater pooling",
      "Broken window glass replacement with safe cleanup",
      "Mosquito mesh replacement on existing window frames"
    ],
    whatsappMessage: "Hi, I live in Chembur / Sion and have a window repair enquiry. Sending photo.",
    locationKey: "area_chembur_sion"
  },
  {
    name: "BKC & Kurla",
    slug: "window-repair-bkc-kurla",
    path: "/window-repair-bkc-kurla",
    title: "Window Repair BKC & Kurla | Commercial & Residential Window Fix",
    description: "Window and sliding glass door repair in Bandra Kurla Complex (BKC), Kalina & Kurla West. Fast on-site service for homes and offices.",
    h1: "WINDOW & GLASS DOOR REPAIR IN BKC & KURLA",
    intro: "Providing rapid sliding window, acoustic glass and door repairs for residential apartments and commercial properties around BKC and Kalina.",
    commonIssues: [
      "Heavy glass sliding doors off alignment",
      "Soundproofing upgrades to block road & airport noise",
      "Commercial aluminium partition and sliding window maintenance",
      "Roller bearing replacements and security lock fittings"
    ],
    whatsappMessage: "Hi, I have a window/door repair issue in BKC / Kurla. Sending photo for quotation.",
    locationKey: "area_bkc_kurla"
  },
  {
    name: "Colaba & Fort",
    slug: "window-repair-colaba-fort",
    path: "/window-repair-colaba-fort",
    title: "Window Repair Colaba & Fort | South Mumbai Sliding Window Specialists",
    description: "Doorstep sliding window and door repair in Colaba, Fort, Nariman Point & Churchgate. Preserving existing frames with precision hardware upgrades.",
    h1: "SLIDING WINDOW REPAIR IN COLABA & FORT",
    intro: "Specializing in maintaining and repairing sliding windows and French doors in heritage and modern buildings across Colaba and Fort.",
    commonIssues: [
      "Coastal salt-air corrosion causing frozen window rollers",
      "Heavy aluminium sash alignment and friction reduction",
      "Lock replacements and security latches",
      "Weather-stripping and noise reduction seals"
    ],
    whatsappMessage: "Hi, I have a window repair requirement in Colaba / Fort. Sending photo.",
    locationKey: "area_colaba_fort"
  },
  {
    name: "Premium Mumbai Complexes",
    slug: "window-repair-mumbai",
    path: "/window-repair-mumbai",
    title: "Sliding Window Repair Mumbai | Premium Doorstep Service Across Mumbai",
    description: "Mumbai's #1 sliding window & glass door repair service. We fix jammed windows, broken rollers, tracks, locks & glass across all Mumbai societies.",
    h1: "SLIDING WINDOW & DOOR REPAIR ACROSS MUMBAI",
    intro: "Covering premium high-rises and residential societies throughout Mumbai. Don't replace your entire frame — our technicians restore 90% of stuck windows in under 45 minutes.",
    commonIssues: [
      "Jammed or stuck sliding windows and balcony doors",
      "Screeching or broken roller wheels destroying bottom tracks",
      "Broken window glass and cracked panels",
      "Lock and handle repairs with child safety options"
    ],
    whatsappMessage: "Hi, I am in Mumbai and need sliding window repair. Sending a photo of the problem.",
    locationKey: "area_mumbai_all"
  }
];

export function getAreaBySlug(slug: string): AreaDetail | undefined {
  return areasList.find((a) => a.slug === slug || a.path === `/${slug}` || a.path === slug);
}

export function getAreaByName(name: string): AreaDetail | undefined {
  return areasList.find((a) => a.name.toLowerCase() === name.toLowerCase());
}
