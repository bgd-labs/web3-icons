import { Options } from "tsup";

const config: Options = {
  entry: [
    "src/index.ts",
    "src/components/index.ts",
    "src/components/chains/index.ts",
    "src/utils/index.ts",
  ],
  sourcemap: true,
  clean: true,
  bundle: true,
  format: ["iife", "cjs", "esm"],
  dts: {
    compilerOptions: {
      moduleResolution: "node",
      allowSyntheticDefaultImports: true,
      strict: true,
    },
  },
  // otherwise .env is ordered wrongly
  // https://github.com/evanw/esbuild/issues/399
  splitting: false,
};

export default config;
