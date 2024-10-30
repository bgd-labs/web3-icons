import { defineConfig } from "tsup";

export default defineConfig([
  {
    format: ["cjs", "esm"],
    entry: [
      "./src/index.ts",
      "./src/utils/index.ts",
      "./src/helpers/index.ts",
      "./src/constants.ts",
      "./src/icons/full/index.ts",
      "./src/icons/mono/index.ts",
      "./src/iconsPacks/assetsIconsPack.ts",
      "./src/iconsPacks/chainsIconsPack.ts",
      "./src/iconsPacks/walletsIconsPack.ts",
      "./src/iconsPacks/brandsIconsPack.ts",
      "./src/components/icons/full/index.ts",
      "./src/components/icons/mono/index.ts",
    ],
    treeshake: true,
    sourcemap: true,
    minify: true,
    clean: true,
    dts: true,
  },
]);
