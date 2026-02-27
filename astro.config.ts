// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import icon from "astro-icon";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/social-media-contents/1": "/social-media-contents",
  },
  vite: {
    plugins: [tailwindcss()],
  },
  site: import.meta.env.PROD
    ? "https://faisalm-portfolio.pages.dev"
    : "http://localhost:4321",
  image: {
    domains: ["5p4c3.sgp1.cdn.digitaloceanspaces.com", "ik.imagekit.io"],
  },
  integrations: [react(), icon(), mdx()],
});
