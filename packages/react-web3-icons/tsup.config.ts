import { Options } from "tsup";

const config: Options = {
  entry: [
    "src/index.ts",
    "src/components/*.tsx",
    "src/components/chains/*.tsx",
    "src/utils/index.ts",
  ],
  sourcemap: true,
  clean: true,
  bundle: true,
  format: ["iife", "cjs", "esm"],
  dts: {
    compilerOptions: {
      target: "es2020",
      module: "esnext",
      strict: true,
      esModuleInterop: true,
      resolveJsonModule: true,
      moduleResolution: "node",
      allowImportingTsExtensions: true,
      jsx: "react",
      strictNullChecks: false,
    },
  },
  // otherwise .env is ordered wrongly
  // https://github.com/evanw/esbuild/issues/399
  splitting: false,
};

export default config;
