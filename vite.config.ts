import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import portfolioConfig from "./portfolio.config.json";

const repoName =
  (portfolioConfig.deployment?.repository || "").split("/").pop() || "";
const base = repoName ? `/${repoName}/` : "/";

// https://vitejs.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
});
