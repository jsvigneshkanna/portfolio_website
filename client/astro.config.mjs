import { defineConfig } from "astro/config";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import sanity from "astro-sanity";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), mdx()],
});
