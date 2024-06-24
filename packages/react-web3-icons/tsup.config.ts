import { defineConfig } from "tsup";

export default defineConfig([
  {
    format: ["cjs", "esm"],
    entry: [
      "./src/index.ts",
      "./src/utils/index.ts",
      "./src/components/index.ts",
      "./src/components/chains/index.ts",
    ],
    treeshake: true,
    sourcemap: true,
    minify: false,
    clean: true,
    dts: true,
  },
]);
