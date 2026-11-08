// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://puls-krankenfahrdienst.pages.dev",
  trailingSlash: "always",
  integrations: [sitemap()],
  build: {
    // Small stylesheet: inlining removes the render-blocking request.
    inlineStylesheets: "always",
  },
});
