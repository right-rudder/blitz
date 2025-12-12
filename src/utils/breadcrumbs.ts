// Breadcrumb utility functions for Blitz Aviation website

export interface Breadcrumb {
  name: string;
  url: string;
}

// Predefined breadcrumb configurations for specific pages
export const customBreadcrumbConfigs: Record<string, Breadcrumb[]> = {
  // Blog posts
  "/blog": [
    { name: "Home", url: "/" },
    { name: "Aviation Blog", url: "/blog" },
  ],

  // Programs
  "/programs": [
    { name: "Home", url: "/" },
    { name: "Training Programs", url: "/programs" },
  ],

  "/the-blitz-program": [
    { name: "Home", url: "/" },
    { name: "Training Programs", url: "/programs" },
    { name: "Zero to Hero Program", url: "/the-blitz-program" },
  ],

  // About pages
  "/about": [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
  ],

  "/about/our-team": [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Our Team", url: "/about/our-team" },
  ],

  "/about/our-fleet": [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Our Fleet", url: "/about/our-fleet" },
  ],

  "/about/join-the-team": [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Join Our Team", url: "/about/join-the-team" },
  ],

  // Discovery flight and enrollment
  "/discovery-flight": [
    { name: "Home", url: "/" },
    { name: "Discovery Flight", url: "/discovery-flight" },
  ],

  "/enrollment-form": [
    { name: "Home", url: "/" },
    { name: "Enrollment", url: "/enrollment-form" },
  ],
};

// Function to get breadcrumbs for a specific path
export function getBreadcrumbsForPath(
  pathname: string,
): Breadcrumb[] | undefined {
  return customBreadcrumbConfigs[pathname];
}

// Function to create breadcrumbs for blog posts
export function createBlogPostBreadcrumbs(
  postSlug: string,
  postTitle: string,
): Breadcrumb[] {
  return [
    { name: "Home", url: "/" },
    { name: "Aviation Blog", url: "/blog" },
    { name: postTitle, url: `/blog/${postSlug}` },
  ];
}

// Function to create breadcrumbs for program pages
export function createProgramBreadcrumbs(
  programSlug: string,
  programTitle: string,
): Breadcrumb[] {
  return [
    { name: "Home", url: "/" },
    { name: "Training Programs", url: "/programs" },
    { name: programTitle, url: `/programs/${programSlug}` },
  ];
}

// Function to create breadcrumbs for location-specific pages
export function createLocationBreadcrumbs(
  locationSlug: string,
  cityName: string,
): Breadcrumb[] {
  return [
    { name: "Home", url: "/" },
    { name: "Flight Training", url: "/pilot-training" },
    { name: `${cityName}, UT`, url: `/pilot-training/${locationSlug}` },
  ];
}
