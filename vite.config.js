import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/portfolio-client/", // Make sure this matches your repo name EXACTLY
  plugins: [react()],
});
