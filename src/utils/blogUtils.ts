/**
 * Calculate reading time and word count for blog posts
 */

export interface ReadingStats {
  wordCount: number;
  readingTime: number; // in minutes
  readingTimeText: string;
}

/**
 * Calculate reading statistics for a given text
 * @param content - The content to analyze
 * @param wordsPerMinute - Average reading speed (default: 200 WPM)
 * @returns Reading statistics
 */
export function calculateReadingStats(
  content: string,
  wordsPerMinute: number = 200,
): ReadingStats {
  // Remove HTML tags and normalize whitespace
  const plainText = content
    .replace(/<[^>]*>/g, "") // Remove HTML tags
    .replace(/\s+/g, " ") // Normalize whitespace
    .trim();

  // Count words (split by whitespace and filter empty strings)
  const words = plainText.split(/\s+/).filter((word) => word.length > 0);
  const wordCount = words.length;

  // Calculate reading time
  const readingTimeMinutes = Math.ceil(wordCount / wordsPerMinute);

  // Create human-readable reading time text
  const readingTimeText =
    readingTimeMinutes === 1
      ? "1 minute read"
      : `${readingTimeMinutes} minutes read`;

  return {
    wordCount,
    readingTime: readingTimeMinutes,
    readingTimeText,
  };
}

/**
 * Extract categories and tags from blog post content
 * @param content - The blog post content
 * @param frontmatter - The frontmatter data
 * @returns Categories and tags
 */
export function extractContentMetadata(content: string, frontmatter: any) {
  const categories = new Set<string>();
  const tags = new Set<string>();

  // Add explicit tags and categories from frontmatter
  if (frontmatter.tags) {
    frontmatter.tags.forEach((tag: string) => tags.add(tag));
  }

  if (frontmatter.category) {
    categories.add(frontmatter.category);
  }

  // Extract implied categories from content
  const contentLower = content.toLowerCase();

  // Flight training categories
  if (contentLower.includes("private pilot") || contentLower.includes("ppl")) {
    categories.add("Private Pilot License");
    tags.add("PPL");
  }

  if (
    contentLower.includes("instrument rating") ||
    contentLower.includes("ifr")
  ) {
    categories.add("Instrument Rating");
    tags.add("IFR");
  }

  if (
    contentLower.includes("commercial pilot") ||
    contentLower.includes("cpl")
  ) {
    categories.add("Commercial Pilot License");
    tags.add("CPL");
  }

  if (
    contentLower.includes("flight instructor") ||
    contentLower.includes("cfi")
  ) {
    categories.add("Flight Instructor");
    tags.add("CFI");
  }

  if (
    contentLower.includes("multi-engine") ||
    contentLower.includes("multi engine")
  ) {
    categories.add("Multi-Engine Rating");
    tags.add("Multi-Engine");
  }

  if (contentLower.includes("discovery flight")) {
    categories.add("Discovery Flight");
    tags.add("Discovery Flight");
  }

  // Aviation topics
  if (
    contentLower.includes("aviation career") ||
    contentLower.includes("pilot career")
  ) {
    tags.add("Aviation Career");
  }

  if (
    contentLower.includes("flight training") ||
    contentLower.includes("pilot training")
  ) {
    tags.add("Flight Training");
  }

  if (contentLower.includes("flight school")) {
    tags.add("Flight School");
  }

  if (contentLower.includes("student pilot")) {
    tags.add("Student Pilot");
  }

  // Default category if none found
  if (categories.size === 0) {
    categories.add("Flight Training");
  }

  return {
    categories: Array.from(categories),
    tags: Array.from(tags),
  };
}

/**
 * Generate SEO-optimized keywords from blog post content
 * @param title - Blog post title
 * @param description - Blog post description
 * @param content - Blog post content
 * @returns Array of keywords
 */
export function generateSEOKeywords(
  title: string,
  description: string,
  content: string,
): string[] {
  const keywords = new Set<string>();

  // Extract keywords from title (high priority)
  const titleWords = title
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((word) => word.length > 2 && !isStopWord(word));
  titleWords.forEach((word) => keywords.add(word));

  // Extract keywords from description
  const descWords = description
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((word) => word.length > 2 && !isStopWord(word));
  descWords.slice(0, 10).forEach((word) => keywords.add(word)); // Limit to top 10

  // Extract aviation-specific terms
  const aviationTerms = [
    "flight training",
    "pilot license",
    "aviation",
    "aircraft",
    "cessna",
    "flight instructor",
    "ground school",
    "checkride",
    "solo flight",
    "cross country",
    "navigation",
    "weather",
    "airspace",
    "radio communication",
  ];

  const contentLower = content.toLowerCase();
  aviationTerms.forEach((term) => {
    if (contentLower.includes(term)) {
      keywords.add(term);
    }
  });

  return Array.from(keywords).slice(0, 20); // Limit to 20 keywords
}

/**
 * Check if a word is a stop word
 * @param word - Word to check
 * @returns True if it's a stop word
 */
function isStopWord(word: string): boolean {
  const stopWords = new Set([
    "the",
    "a",
    "an",
    "and",
    "or",
    "but",
    "in",
    "on",
    "at",
    "to",
    "for",
    "of",
    "with",
    "by",
    "from",
    "up",
    "about",
    "into",
    "through",
    "during",
    "before",
    "after",
    "above",
    "below",
    "between",
    "among",
    "since",
    "without",
    "under",
    "within",
    "this",
    "that",
    "these",
    "those",
    "is",
    "are",
    "was",
    "were",
    "be",
    "been",
    "being",
    "have",
    "has",
    "had",
    "do",
    "does",
    "did",
    "will",
    "would",
    "could",
    "should",
    "may",
    "might",
    "must",
    "can",
    "cannot",
  ]);

  return stopWords.has(word.toLowerCase());
}
