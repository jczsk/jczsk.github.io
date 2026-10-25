import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://jczsk.github.io',
  base: '/', 
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),  // 👈 必须补上这一段
  ],
});
