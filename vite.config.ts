import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
function componentTagger() {
  return {
    name: "component-tagger",
    transform(code: string, id: string): { code: string; map: null } | null {
      if (id.endsWith(".tsx") || id.endsWith(".jsx")) {
      return {
        code: code.replace(
        /export default function (\w+)/,
        (match: string, p1: string) => `export default function ${p1} /* tagged */`
        ),
        map: null,
      };
      }
      return null;
    },
  };
}

