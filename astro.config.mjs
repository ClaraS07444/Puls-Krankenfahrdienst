// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.puls-krankenfahrdienst.de",
  trailingSlash: "always",
  integrations: [sitemap()],
  build: {
    // Small stylesheet: inlining removes the render-blocking request.
    inlineStylesheets: "always",
  },
});
