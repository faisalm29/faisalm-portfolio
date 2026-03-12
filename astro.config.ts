// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import icon from "astro-icon";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  redirects: {
    "/social-media-contents/1": "/social-media-contents",
    "/fundraising-campaigns/1": "/fundraising-campaigns",
    "/articles/1": "/articles",
    "/press-releases/1": "/press-releases",
  },
  vite: {
    plugins: [tailwindcss()],
  },
  site: import.meta.env.PROD
    ? "https://faisalm-portfolio.pages.dev"
    : "http://localhost:4321",
  image: {
    domains: [
      "5p4c3.sgp1.cdn.digitaloceanspaces.com",
      "ik.imagekit.io",
      "space.adaide.co.id",
      "donasi.insanbumimandiri.org",
      "lh7-us.googleusercontent.com",
      "blog.insanbumimandiri.org",
      "lh4.googleusercontent.com",
      "lh5.googleusercontent.com",
      "lh3.googleusercontent.com",
      "lh6.googleusercontent.com",
    ],
  },
  integrations: [react(), icon(), mdx()],
});
