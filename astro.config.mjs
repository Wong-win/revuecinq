import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.revuecinq.com",
  integrations: [sitemap()],
  trailingSlash: "always",
});
