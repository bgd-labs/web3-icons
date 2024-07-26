import { defineConfig } from "tsup";

export default defineConfig([
  {
    format: ["cjs", "esm"],
    entry: [
      "./src/index.ts",
      "./src/utils/index.ts",
      "./src/icons/full/index.ts",
      "./src/icons/mono/index.ts",
      "./src/iconsPacks/assetsIconsPack.ts",
      "./src/iconsPacks/chainsIconsPack.ts",
      "./src/iconsPacks/walletsIconsPack.ts",
    ],
    treeshake: true,
    sourcemap: true,
    minify: false,
    clean: true,
    dts: true,
  },
]);
