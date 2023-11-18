import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/book-it-coworking-frontend/",
  plugins: [react(), tsconfigPaths(), svgr({ include: "**/*.svg?react" })],
  build: {
    outDir: "build",
  },
  esbuild: {
    loader: "tsx",
    include: [
      "src/**/*.jsx",
      "src/**/*.tsx",
      "node_modules/**/*.jsx",
      "node_modules/**/*.tsx",

      "src/**/*.js",
      "node_modules/**/*.js",

      "src/**/*.ts",
      "node_modules/**/*.ts",
    ],
  },
});
