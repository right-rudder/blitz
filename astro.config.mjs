// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://blitzaviation.com/",
  integrations: [mdx(), sitemap(), react()],

  vite: {
    plugins: [tailwindcss()],
  },

  redirects: {
    "/acclerated-programs": "/programs/accelerated-programs",
    "/contact": "/#contactUs",
    "/rates": "/",
    "/planes-%26-instructors": "/about/our-team",
    "/about/our-story": "/about",
  },
});
