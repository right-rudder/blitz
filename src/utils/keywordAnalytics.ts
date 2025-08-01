/**
 * Keyword Performance Tracking and Analytics
 * Monitors keyword effectiveness and provides insights for SEO optimization
 */

export interface KeywordMetrics {
  keyword: string;
  searchVolume: number;
  difficulty: number;
  relevance: number;
  localRelevance: number;
  competition: "low" | "medium" | "high";
  intent: "informational" | "commercial" | "navigational" | "transactional";
  priority: number;
}

// High-value keywords with performance metrics
export const KEYWORD_METRICS: KeywordMetrics[] = [
  // Primary Local Keywords
  {
    keyword: "flight training Ogden Utah",
    searchVolume: 480,
    difficulty: 35,
    relevance: 95,
    localRelevance: 100,
    competition: "medium",
    intent: "commercial",
    priority: 10,
  },
  {
    keyword: "pilot school Salt Lake City",
    searchVolume: 720,
    difficulty: 45,
    relevance: 90,
    localRelevance: 95,
    competition: "medium",
    intent: "commercial",
    priority: 9,
  },
  {
    keyword: "learn to fly Utah",
    searchVolume: 590,
    difficulty: 40,
    relevance: 85,
    localRelevance: 90,
    competition: "medium",
    intent: "commercial",
    priority: 8,
  },

  // Service-Specific Keywords
  {
    keyword: "private pilot license Utah",
    searchVolume: 320,
    difficulty: 38,
    relevance: 95,
    localRelevance: 85,
    competition: "medium",
    intent: "commercial",
    priority: 9,
  },
  {
    keyword: "CFI training Utah",
    searchVolume: 210,
    difficulty: 42,
    relevance: 90,
    localRelevance: 80,
    competition: "medium",
    intent: "commercial",
    priority: 8,
  },
  {
    keyword: "instrument rating training Utah",
    searchVolume: 180,
    difficulty: 40,
    relevance: 88,
    localRelevance: 75,
    competition: "medium",
    intent: "commercial",
    priority: 7,
  },

  // Long-tail High-Converting Keywords
  {
    keyword: "accelerated flight training Utah",
    searchVolume: 140,
    difficulty: 35,
    relevance: 85,
    localRelevance: 70,
    competition: "low",
    intent: "commercial",
    priority: 8,
  },
  {
    keyword: "discovery flight Salt Lake City",
    searchVolume: 90,
    difficulty: 30,
    relevance: 80,
    localRelevance: 85,
    competition: "low",
    intent: "commercial",
    priority: 7,
  },
  {
    keyword: "aircraft rental Ogden",
    searchVolume: 75,
    difficulty: 25,
    relevance: 75,
    localRelevance: 90,
    competition: "low",
    intent: "commercial",
    priority: 6,
  },

  // Informational Keywords
  {
    keyword: "how to become a pilot Utah",
    searchVolume: 260,
    difficulty: 30,
    relevance: 70,
    localRelevance: 60,
    competition: "low",
    intent: "informational",
    priority: 6,
  },
  {
    keyword: "pilot training cost Utah",
    searchVolume: 180,
    difficulty: 28,
    relevance: 75,
    localRelevance: 65,
    competition: "low",
    intent: "informational",
    priority: 5,
  },

  // Competitive Keywords
  {
    keyword: "best flight school Utah",
    searchVolume: 320,
    difficulty: 55,
    relevance: 85,
    localRelevance: 80,
    competition: "high",
    intent: "commercial",
    priority: 7,
  },
  {
    keyword: "top pilot training Salt Lake City",
    searchVolume: 150,
    difficulty: 50,
    relevance: 80,
    localRelevance: 75,
    competition: "high",
    intent: "commercial",
    priority: 6,
  },
];

// Seasonal keyword trends
export const SEASONAL_KEYWORDS = {
  spring: [
    "spring flight training Utah",
    "start pilot training spring",
    "aviation career spring start",
  ],
  summer: [
    "summer flight training programs",
    "aviation camp Utah",
    "intensive pilot training summer",
  ],
  fall: [
    "fall pilot training enrollment",
    "aviation school fall semester",
    "winter flight training prep",
  ],
  winter: [
    "winter flight training Utah",
    "indoor aviation training",
    "ground school winter",
  ],
};

// Keyword targeting by user intent
export const INTENT_BASED_TARGETING = {
  awareness: [
    "what is flight training",
    "aviation career information",
    "pilot job opportunities",
    "flight school comparison",
  ],
  consideration: [
    "flight training programs Utah",
    "pilot school reviews",
    "aviation training cost",
    "flight instructor qualifications",
  ],
  decision: [
    "enroll flight training",
    "book discovery flight",
    "start pilot training",
    "flight school near me",
  ],
  retention: [
    "advanced pilot training",
    "aircraft rental",
    "flight instructor jobs",
    "aviation career advancement",
  ],
};

/**
 * Calculate keyword priority score
 */
export function calculateKeywordScore(metrics: KeywordMetrics): number {
  const volumeScore = Math.min(metrics.searchVolume / 100, 10);
  const difficultyScore = (100 - metrics.difficulty) / 10;
  const relevanceScore = metrics.relevance / 10;
  const localScore = metrics.localRelevance / 10;

  return (volumeScore + difficultyScore + relevanceScore + localScore) / 4;
}

/**
 * Get top keywords by priority
 */
export function getTopKeywords(count: number = 10): KeywordMetrics[] {
  return KEYWORD_METRICS.sort((a, b) => b.priority - a.priority).slice(
    0,
    count,
  );
}

/**
 * Get keywords by intent
 */
export function getKeywordsByIntent(
  intent: KeywordMetrics["intent"],
): KeywordMetrics[] {
  return KEYWORD_METRICS.filter((keyword) => keyword.intent === intent);
}

/**
 * Get location-specific keyword suggestions
 */
export function getLocationKeywordSuggestions(city: string): string[] {
  const baseKeywords = [
    "flight training",
    "pilot school",
    "aviation training",
    "learn to fly",
    "discovery flight",
    "aircraft rental",
    "CFI training",
  ];

  return baseKeywords.map((keyword) => `${keyword} ${city} Utah`);
}

/**
 * Generate competitor analysis keywords
 */
export function getCompetitorKeywords(): string[] {
  return [
    "best flight school Utah vs Blitz Aviation",
    "Utah aviation training comparison",
    "flight school reviews Utah",
    "top pilot training programs Utah",
    "affordable flight training Utah",
    "professional flight instruction Utah",
  ];
}

/**
 * SEO content optimization suggestions
 */
export interface ContentOptimization {
  targetKeyword: string;
  keywordDensity: number;
  semanticKeywords: string[];
  titleSuggestion: string;
  metaDescription: string;
  headingStructure: string[];
}

export function generateContentOptimization(
  targetKeyword: string,
  pageType: string,
): ContentOptimization {
  const semanticKeywords = KEYWORD_METRICS.filter((k) =>
    k.keyword.includes(targetKeyword.split(" ")[0]),
  )
    .map((k) => k.keyword)
    .slice(0, 5);

  return {
    targetKeyword,
    keywordDensity: 1.5, // Recommended density
    semanticKeywords,
    titleSuggestion: `${targetKeyword} | Blitz Aviation Utah`,
    metaDescription: `Professional ${targetKeyword} at Blitz Aviation. Expert instruction, modern aircraft, and flexible scheduling in Utah. Start your aviation journey today!`,
    headingStructure: [
      `H1: ${targetKeyword}`,
      `H2: Why Choose Blitz Aviation for ${targetKeyword}?`,
      `H2: Our ${pageType} Programs`,
      `H2: Get Started Today`,
      `H3: Experienced Instructors`,
      `H3: Modern Fleet`,
      `H3: Flexible Scheduling`,
    ],
  };
}

export default {
  KEYWORD_METRICS,
  SEASONAL_KEYWORDS,
  INTENT_BASED_TARGETING,
  calculateKeywordScore,
  getTopKeywords,
  getKeywordsByIntent,
  getLocationKeywordSuggestions,
  getCompetitorKeywords,
  generateContentOptimization,
};
