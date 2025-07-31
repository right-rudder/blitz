/**
 * Flight School Keywords Optimization Utility
 * Comprehensive keyword strategy implementation for Blitz Aviation
 */

// Enhanced primary keywords for each page type
export const PAGE_KEYWORDS = {
  home: [
    "flight training Ogden Utah",
    "pilot school Salt Lake City",
    "learn to fly Utah",
    "aviation training Northern Utah",
    "flight school Weber County",
    "private pilot license Utah",
    "discovery flight Ogden",
    "aircraft rental Utah",
    "professional pilot training",
    "accelerated flight training Utah",
  ],

  privatePilot: [
    "private pilot license Utah",
    "PPL training Salt Lake City",
    "student pilot course Ogden",
    "beginner flight training Utah",
    "recreational pilot license",
    "private pilot certification Utah",
    "learn to fly private pilot",
    "flight training for beginners",
    "private pilot ground school",
    "Utah private pilot course",
  ],

  instrumentRating: [
    "instrument rating Utah",
    "IFR training Salt Lake City",
    "instrument flight training Ogden",
    "weather flying training Utah",
    "precision approach training",
    "instrument pilot certification",
    "IFR checkride preparation",
    "instrument rating course Utah",
    "advanced pilot training",
    "instrument flight rules training",
  ],

  commercialPilot: [
    "commercial pilot license Utah",
    "CPL training Salt Lake City",
    "professional pilot training Ogden",
    "career pilot course Utah",
    "airline pilot preparation",
    "commercial aviation training",
    "professional pilot certification",
    "aviation career training Utah",
    "commercial pilot course",
    "airline pilot training Utah",
  ],

  cfi: [
    "CFI training Utah",
    "flight instructor certification",
    "certified flight instructor course",
    "teaching endorsement Utah",
    "aviation instructor training",
    "CFI checkride preparation",
    "flight instructor school Utah",
    "becoming a flight instructor",
    "CFI certificate Utah",
    "flight training instructor course",
  ],

  multiEngine: [
    "multi-engine rating Utah",
    "twin engine training Salt Lake",
    "MEL certification Ogden",
    "complex aircraft training Utah",
    "multi-engine commercial pilot",
    "twin engine qualification",
    "advanced aircraft training",
    "multi-engine land rating",
    "complex aircraft endorsement",
    "twin engine flight training",
  ],

  accelerated: [
    "accelerated flight training Utah",
    "intensive pilot course",
    "fast track aviation training",
    "rapid pilot certification",
    "immersive flight school",
    "quick pilot training Utah",
    "expedited flight training",
    "intensive aviation course",
    "fast pilot license Utah",
    "rapid aviation training",
  ],

  discoveryFlight: [
    "discovery flight Utah",
    "intro flight Salt Lake City",
    "trial flight lesson Ogden",
    "first time flying experience",
    "scenic flight tour Utah",
    "beginner flight experience",
    "introductory flying lesson",
    "trial pilot experience",
    "first flight lesson Utah",
    "aviation experience flight",
  ],

  aircraftRental: [
    "aircraft rental Utah",
    "airplane rental Salt Lake City",
    "Cessna rental Ogden",
    "flight training aircraft rental",
    "hourly aircraft rental Utah",
    "plane rental Northern Utah",
    "aviation rental services",
    "aircraft hire Utah",
    "airplane charter Utah",
    "flight aircraft rental",
  ],
};

// Location-specific keyword combinations
export const LOCATION_COMBINATIONS = {
  "Salt Lake City": [
    "flight training Salt Lake City",
    "pilot school Salt Lake City",
    "aviation training Salt Lake City",
    "learn to fly Salt Lake City",
    "flight lessons Salt Lake City",
    "flying school Salt Lake City",
    "aircraft rental Salt Lake City",
    "discovery flight Salt Lake City",
    "CFI training Salt Lake City",
    "instrument rating Salt Lake City",
  ],

  Ogden: [
    "flight training Ogden Utah",
    "pilot school Ogden",
    "aviation training Ogden",
    "learn to fly Ogden",
    "flight lessons Ogden Utah",
    "flying school Ogden",
    "aircraft rental Ogden",
    "discovery flight Ogden",
    "CFI training Ogden",
    "flight instructor Ogden",
  ],

  "Davis County": [
    "flight training Davis County",
    "pilot school Davis County Utah",
    "aviation training Davis County",
    "flight lessons Davis County",
    "flying school Davis County",
    "aircraft rental Davis County",
    "discovery flight Davis County",
    "CFI training Davis County Utah",
  ],

  "Weber County": [
    "flight training Weber County",
    "pilot school Weber County Utah",
    "aviation training Weber County",
    "flight lessons Weber County",
    "flying school Weber County",
    "aircraft rental Weber County",
    "discovery flight Weber County",
  ],

  "Northern Utah": [
    "flight training Northern Utah",
    "pilot school Northern Utah",
    "aviation training Northern Utah",
    "flight lessons Northern Utah",
    "flying school Northern Utah",
    "aircraft rental Northern Utah",
    "discovery flight Northern Utah",
  ],
};

// Service area keywords for broader reach
export const SERVICE_AREA_KEYWORDS = [
  "flight training Wasatch Front",
  "pilot school Utah Valley",
  "aviation training Park City area",
  "flight lessons Provo area",
  "flying school Bountiful",
  "aircraft rental Layton",
  "discovery flight Clearfield",
  "CFI training Roy Utah",
  "flight training Farmington",
  "pilot school Kaysville area",
];

// Competitive advantage keywords
export const COMPETITIVE_KEYWORDS = [
  "best flight school Utah",
  "top pilot training Salt Lake City",
  "affordable flight training Utah",
  "professional flight instruction Ogden",
  "quality aviation training Utah",
  "experienced flight instructors Utah",
  "modern aircraft training Utah",
  "flexible flight training schedules",
  "comprehensive pilot training Utah",
  "trusted flight school Utah",
];

// Intent-based keyword clusters
export const INTENT_CLUSTERS = {
  informational: [
    "how to become a pilot Utah",
    "pilot training requirements Utah",
    "flight school cost Utah",
    "aviation career opportunities",
    "pilot license types Utah",
    "flight training timeline",
    "becoming an airline pilot",
    "aviation industry jobs Utah",
  ],

  transactional: [
    "enroll flight training Utah",
    "book discovery flight",
    "start pilot training",
    "flight school enrollment",
    "aviation training registration",
    "pilot course signup",
    "flight lesson booking",
    "aircraft rental booking",
  ],

  local: [
    "flight schools near me",
    "pilot training near me",
    "aviation schools Utah",
    "flight instructors near me",
    "aircraft rental near me",
    "discovery flights near me",
    "flight training locations Utah",
  ],
};

/**
 * Generate comprehensive meta keywords for any page
 */
export function generateComprehensiveKeywords(
  pageType: keyof typeof PAGE_KEYWORDS,
  location?: string,
  additionalKeywords: string[] = [],
): string {
  const keywords: string[] = [];

  // Add page-specific keywords
  if (PAGE_KEYWORDS[pageType]) {
    keywords.push(...PAGE_KEYWORDS[pageType]);
  }

  // Add location-specific keywords
  if (location && location in LOCATION_COMBINATIONS) {
    const locationKeywords =
      LOCATION_COMBINATIONS[location as keyof typeof LOCATION_COMBINATIONS];
    keywords.push(...locationKeywords);
  }

  // Add service area keywords
  keywords.push(...SERVICE_AREA_KEYWORDS.slice(0, 5));

  // Add competitive keywords
  keywords.push(...COMPETITIVE_KEYWORDS.slice(0, 3));

  // Add intent-based keywords
  keywords.push(...INTENT_CLUSTERS.local.slice(0, 3));

  // Add any additional keywords
  keywords.push(...additionalKeywords);

  // Remove duplicates and return
  return [...new Set(keywords)].join(", ");
}

/**
 * Get optimized title for any page
 */
export function generateOptimizedTitle(
  pageType: string,
  location?: string,
  service?: string,
): string {
  const baseTitle = "Blitz Aviation";

  const titleMappings = {
    home: `Professional Flight Training in ${location || "Ogden"} & Salt Lake City, Utah | ${baseTitle}`,
    privatePilot: `Private Pilot License Training in ${location || "Utah"} | ${baseTitle}`,
    instrumentRating: `Instrument Rating Training in ${location || "Utah"} | ${baseTitle}`,
    commercialPilot: `Commercial Pilot License Training in ${location || "Utah"} | ${baseTitle}`,
    cfi: `CFI Training & Flight Instructor Certification in ${location || "Utah"} | ${baseTitle}`,
    multiEngine: `Multi-Engine Rating Training in ${location || "Utah"} | ${baseTitle}`,
    accelerated: `Accelerated Flight Training Programs in ${location || "Utah"} | ${baseTitle}`,
    discoveryFlight: `Discovery Flight Experience in ${location || "Ogden"}, Utah | ${baseTitle}`,
    aircraftRental: `Aircraft Rental Services in ${location || "Utah"} | ${baseTitle}`,
    location: `Flight Training near ${location}, Utah | ${baseTitle}`,
    about: `About ${baseTitle} - Professional Flight School in ${location || "Ogden"}, Utah`,
    contact: `Contact ${baseTitle} - Flight Training in ${location || "Ogden"}, Utah`,
    blog: `Aviation Blog & Flight Training Resources | ${baseTitle}`,
  };

  return (
    titleMappings[pageType as keyof typeof titleMappings] ||
    `${service || pageType} | ${baseTitle}`
  );
}

/**
 * Generate optimized meta description
 */
export function generateOptimizedDescription(
  pageType: string,
  location?: string,
  service?: string,
): string {
  const baseDesc = "Blitz Aviation offers professional flight training";
  const locationText = location
    ? `in ${location}, Utah`
    : "in Ogden and Salt Lake City, Utah";

  const descriptionMappings = {
    home: `${baseDesc} ${locationText}. Expert instruction, modern aircraft, and flexible scheduling for private pilot, instrument rating, and commercial pilot certifications. Book your discovery flight today!`,
    privatePilot: `Earn your Private Pilot License with ${baseDesc} ${locationText}. Comprehensive PPL course with experienced instructors and modern aircraft. Start your aviation journey today!`,
    instrumentRating: `Master instrument flying with professional IFR training ${locationText}. Expert instruction in weather flying and precision approaches. Advance your pilot skills safely.`,
    commercialPilot: `Launch your aviation career with commercial pilot training ${locationText}. Professional instruction for CPL certification with modern aircraft and flexible scheduling.`,
    cfi: `Become a Certified Flight Instructor with comprehensive CFI training ${locationText}. Expert instruction, checkride preparation, and career support for aviation educators.`,
    multiEngine: `Advance to multi-engine aircraft with professional MEL training ${locationText}. Twin-engine certification with experienced instructors and modern aircraft.`,
    accelerated: `Fast-track your pilot certifications with intensive training programs ${locationText}. Complete multiple ratings quickly with our accelerated flight courses.`,
    discoveryFlight: `Experience the thrill of flying with discovery flights ${locationText}. Perfect introduction to aviation with experienced instructors and scenic mountain views.`,
    aircraftRental: `Rent modern, well-maintained aircraft ${locationText}. Competitive rates for training and personal flying with Cessna 172s and Piper aircraft.`,
    location: `${baseDesc} near ${location}, Utah. Convenient location serving ${location} with expert instruction, modern aircraft, and flexible scheduling options.`,
    about: `Learn about ${baseDesc} ${locationText}. Our story, mission, and commitment to excellence in aviation education with experienced instructors.`,
    contact: `Contact ${baseDesc} ${locationText}. Get information about our flight training programs, scheduling, and enrollment. Start your aviation journey today!`,
    blog: `Aviation blog and flight training resources from ${baseDesc}. Expert tips, industry insights, and educational content for student and professional pilots.`,
  };

  return (
    descriptionMappings[pageType as keyof typeof descriptionMappings] ||
    `${baseDesc} ${locationText}. ${service || "Professional aviation education"} with expert instruction and modern aircraft.`
  );
}

export default {
  PAGE_KEYWORDS,
  LOCATION_COMBINATIONS,
  SERVICE_AREA_KEYWORDS,
  COMPETITIVE_KEYWORDS,
  INTENT_CLUSTERS,
  generateComprehensiveKeywords,
  generateOptimizedTitle,
  generateOptimizedDescription,
};
