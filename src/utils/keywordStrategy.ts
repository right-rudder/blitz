/**
 * Comprehensive Keywords Strategy for Blitz Aviation
 * Flight School targeting Salt Lake City, Ogden, and surrounding Utah areas
 */

// Primary Location Keywords
export const LOCATION_KEYWORDS = {
  primary: [
    "Ogden Utah",
    "Salt Lake City Utah",
    "Davis County Utah",
    "Weber County Utah",
  ],
  secondary: [
    "Bountiful Utah",
    "Layton Utah",
    "Clearfield Utah",
    "Roy Utah",
    "Farmington Utah",
    "Kaysville Utah",
    "Syracuse Utah",
    "West Haven Utah",
    "North Ogden Utah",
    "Pleasant View Utah",
  ],
  regional: [
    "Northern Utah",
    "Wasatch Front",
    "Greater Salt Lake Area",
    "Utah Valley",
    "Park City Utah",
    "Provo Utah",
  ],
};

// Core Flight Training Keywords
export const FLIGHT_TRAINING_KEYWORDS = {
  primary: [
    "flight training",
    "pilot training",
    "flight school",
    "aviation school",
    "learn to fly",
    "flying lessons",
  ],
  licenses: [
    "private pilot license",
    "PPL training",
    "instrument rating",
    "commercial pilot license",
    "CPL training",
    "certified flight instructor",
    "CFI training",
    "CFII training",
    "multi-engine rating",
    "ATP training",
  ],
  programs: [
    "accelerated flight training",
    "zero to hero program",
    "fast track pilot training",
    "intensive flight course",
    "aviation career training",
    "professional pilot training",
  ],
};

// Aircraft and Equipment Keywords
export const AIRCRAFT_KEYWORDS = [
  "Cessna 172 training",
  "Piper Cherokee training",
  "Beechcraft 55 Baron multi-engine",
  "Garmin G5 training",
  "modern avionics training",
  "IFR training aircraft",
  "flight simulator training",
];

// Service-Specific Keywords
export const SERVICE_KEYWORDS = {
  discovery: [
    "discovery flight",
    "introductory flight",
    "trial flight",
    "first flight experience",
    "scenic flight",
  ],
  rental: [
    "aircraft rental",
    "airplane rental",
    "plane rental",
    "Cessna rental",
    "wet rental aircraft",
  ],
  career: [
    "aviation career",
    "airline pilot training",
    "commercial aviation",
    "professional pilot",
    "flight instructor jobs",
  ],
};

// Long-Tail Keywords for Local SEO
export const LONG_TAIL_KEYWORDS = [
  "flight school near Salt Lake City",
  "learn to fly in Ogden Utah",
  "private pilot training Salt Lake City",
  "CFI training in Northern Utah",
  "aircraft rental Ogden airport",
  "discovery flight Salt Lake City",
  "accelerated pilot training Utah",
  "flight instructor certification Utah",
  "instrument rating training Ogden",
  "commercial pilot school Utah",
  "aviation career training Salt Lake",
  "Cessna 172 training Utah",
  "IFR training Salt Lake City",
  "multi-engine training Utah",
  "zero to hero pilot program Utah",
  "affordable flight training Utah",
  "professional pilot training Salt Lake",
  "flight school Davis County",
  "aviation training Weber County",
];

// Intent-Based Keywords
export const INTENT_KEYWORDS = {
  informational: [
    "how to become a pilot",
    "pilot training cost",
    "flight school requirements",
    "aviation career guide",
    "pilot license types",
    "flight training timeline",
  ],
  commercial: [
    "flight training programs",
    "pilot school enrollment",
    "aviation training courses",
    "flight instructor certification",
    "aircraft rental rates",
    "discovery flight booking",
  ],
  local: [
    "flight schools near me",
    "pilot training Utah",
    "aviation schools Salt Lake City",
    "flight instructors Ogden",
    "aircraft rental near me",
    "discovery flights Utah",
  ],
};

// Competition-Based Keywords
export const COMPETITIVE_KEYWORDS = [
  "best flight school Utah",
  "top aviation school Salt Lake City",
  "affordable flight training Utah",
  "fastest pilot training Utah",
  "professional flight school Ogden",
  "experienced flight instructors Utah",
  "quality aviation training Salt Lake",
];

/**
 * Generate location-specific keywords for a given city
 */
export function generateLocationKeywords(
  city: string,
  baseKeywords: string[],
): string[] {
  const locationVariations = [
    `${city} Utah`,
    `near ${city}`,
    `${city} area`,
    `${city} UT`,
  ];

  const keywords: string[] = [];

  baseKeywords.forEach((keyword) => {
    locationVariations.forEach((location) => {
      keywords.push(`${keyword} ${location}`);
      keywords.push(`${keyword} in ${location}`);
    });
  });

  return keywords;
}

/**
 * Create comprehensive keyword set for a specific page
 */
export function createPageKeywords(
  pageType: "home" | "program" | "location" | "blog" | "about",
  specificTerms: string[] = [],
  location?: string,
): string {
  let keywords: string[] = [];

  // Add core flight training keywords
  keywords.push(...FLIGHT_TRAINING_KEYWORDS.primary);

  switch (pageType) {
    case "home":
      keywords.push(...FLIGHT_TRAINING_KEYWORDS.licenses);
      keywords.push(...LOCATION_KEYWORDS.primary);
      keywords.push(...SERVICE_KEYWORDS.discovery);
      keywords.push(...LONG_TAIL_KEYWORDS.slice(0, 10));
      break;

    case "program":
      keywords.push(...FLIGHT_TRAINING_KEYWORDS.programs);
      keywords.push(...AIRCRAFT_KEYWORDS);
      keywords.push(...specificTerms);
      break;

    case "location":
      if (location) {
        keywords.push(
          ...generateLocationKeywords(
            location,
            FLIGHT_TRAINING_KEYWORDS.primary,
          ),
        );
      }
      keywords.push(...LONG_TAIL_KEYWORDS);
      break;

    case "blog":
      keywords.push(...INTENT_KEYWORDS.informational);
      keywords.push(...specificTerms);
      break;

    case "about":
      keywords.push(...SERVICE_KEYWORDS.career);
      keywords.push(...COMPETITIVE_KEYWORDS);
      break;
  }

  // Add location context for all pages
  keywords.push(...LOCATION_KEYWORDS.primary);
  keywords.push(...specificTerms);

  // Remove duplicates and return as comma-separated string
  return [...new Set(keywords)].join(", ");
}

/**
 * SEO-optimized keywords for specific services
 */
export const SERVICE_SPECIFIC_KEYWORDS = {
  privatePilot: createPageKeywords("program", [
    "private pilot license Utah",
    "PPL training Salt Lake City",
    "beginner pilot training",
    "student pilot course",
    "recreational pilot license",
  ]),

  instrumentRating: createPageKeywords("program", [
    "instrument rating Utah",
    "IFR training Salt Lake City",
    "instrument flight training",
    "weather flying training",
    "precision approach training",
  ]),

  commercialPilot: createPageKeywords("program", [
    "commercial pilot license Utah",
    "CPL training Salt Lake City",
    "professional pilot training",
    "career pilot course",
    "airline pilot preparation",
  ]),

  cfi: createPageKeywords("program", [
    "CFI training Utah",
    "flight instructor certification",
    "teaching endorsement",
    "aviation instructor course",
    "CFI checkride prep",
  ]),

  multiEngine: createPageKeywords("program", [
    "multi-engine rating Utah",
    "twin engine training",
    "MEL certification",
    "complex aircraft training",
    "multi-engine commercial",
  ]),

  accelerated: createPageKeywords("program", [
    "accelerated flight training Utah",
    "intensive pilot course",
    "fast track aviation training",
    "rapid pilot certification",
    "immersive flight school",
  ]),

  discoveryFlight: createPageKeywords("home", [
    "discovery flight Utah",
    "intro flight Salt Lake City",
    "trial flight lesson",
    "first time flying",
    "scenic flight tour",
    "beginner flight experience",
  ]),

  aircraftRental: createPageKeywords("about", [
    "aircraft rental Utah",
    "airplane rental Salt Lake City",
    "Cessna rental Ogden",
    "flight training aircraft rental",
    "hourly aircraft rental",
  ]),
};

/**
 * Advanced keyword targeting for blog content
 */
export const BLOG_KEYWORDS = {
  training: [
    "pilot training tips",
    "flight training guide",
    "aviation education",
    "student pilot advice",
    "learning to fly",
    "pilot certification process",
  ],
  career: [
    "aviation career path",
    "becoming an airline pilot",
    "commercial aviation jobs",
    "flight instructor career",
    "aviation industry opportunities",
  ],
  technical: [
    "aircraft systems training",
    "aviation weather knowledge",
    "flight planning procedures",
    "radio communication training",
    "navigation techniques",
  ],
};

/**
 * Generate meta keywords for any page
 */
export function generateMetaKeywords(
  primaryKeywords: string[],
  location: string = "Utah",
  additionalKeywords: string[] = [],
): string {
  const keywords = [
    ...primaryKeywords,
    ...additionalKeywords,
    `flight training ${location}`,
    `aviation school ${location}`,
    "Blitz Aviation",
  ];

  return [...new Set(keywords)].join(", ");
}

export default {
  LOCATION_KEYWORDS,
  FLIGHT_TRAINING_KEYWORDS,
  AIRCRAFT_KEYWORDS,
  SERVICE_KEYWORDS,
  LONG_TAIL_KEYWORDS,
  INTENT_KEYWORDS,
  COMPETITIVE_KEYWORDS,
  SERVICE_SPECIFIC_KEYWORDS,
  BLOG_KEYWORDS,
  generateLocationKeywords,
  createPageKeywords,
  generateMetaKeywords,
};
