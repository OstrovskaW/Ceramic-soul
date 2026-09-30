import { dirname, resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rolldownOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),
        catalog: "catalog.html",
        blog: "blog.html",
        about: "about.html",
      },
    },
  },
});
