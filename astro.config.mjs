// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://blitzaviation.com/",
  integrations: [mdx(), sitemap(), react(), partytown()],

  vite: {
    plugins: [tailwindcss()],
  },

  redirects: {
    "/acclerated-programs": "/programs/accelerated-programs",
    "/contact": "/#contactUs",
    "/rates": "/",
    "/?olsPage=cart": "/",
    "/planes-%26-instructors": "/about/our-team",
  },
});
