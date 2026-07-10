// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site : "https://leonzhenghc.git.io.com",
  base: "/devportfolio/",
  vite: {
    plugins: [tailwindcss()],
  },
});
