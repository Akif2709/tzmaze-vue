/// <reference types="vitest" />

import { defineConfig } from "vitest/config";
import Vue from "@vitejs/plugin-vue";
import { resolve } from "path";
const r = (p: string) => resolve(__dirname, p);

export default defineConfig({
  plugins: [Vue()],
  test: {
    globals: true,
    environment: "happy-dom",
    coverage: {
      reporter: ["text", "html"],
    },
  },
  root: ".",
  resolve: {
    alias: {
      "@": r("./src"),
    },
  },
});
