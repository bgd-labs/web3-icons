import { transform } from "@svgr/core";
import fs from "fs";

import assets from "../../icons//assets-icons/assets-icons.json";

const REACT_COMPONENTS_PATH = "packages/react-web3-icons/src/components";
const REACT_UTILS_PATH = "packages/react-web3-icons/src/utils";

interface QueueItem {
  name: string;
  filePath: string;
  type: "full" | "mono";
  symbol: string;
}

const queue: QueueItem[] = [];

for (const asset of assets) {
  const { icons, symbol, name } = asset;

  queue.push({ name, filePath: icons.mono, type: "mono", symbol });
  queue.push({ name, filePath: icons.full, type: "full", symbol });

  if (icons.aToken) {
    queue.push({
      name,
      filePath: icons.aToken.mono,
      type: "mono",
      symbol: `a${symbol}`,
    });
    queue.push({
      name,
      filePath: icons.aToken.full,
      type: "full",
      symbol: `a${symbol}`,
    });
  }

  if (icons.stataToken) {
    queue.push({
      name,
      filePath: icons.stataToken.mono,
      type: "mono",
      symbol: `stata${symbol}`,
    });
    queue.push({
      name,
      filePath: icons.stataToken.full,
      type: "full",
      symbol: `stata${symbol}`,
    });
  }
}

const componentFiles: string[] = [];

Promise.all(
  queue.map(async (item) => {
    const { filePath, type, symbol } = item;
    const iconContent = fs.readFileSync(filePath, "utf-8");
    const componentName = `Icon${symbol.charAt(0).toUpperCase() + symbol.slice(1)}${type === "full" ? "Full" : "Mono"}`;

    const tsxCode = await transform(
      iconContent,
      {
        icon: "100%",
        typescript: true,
        svgo: false,
        expandProps: "end",
        exportType: "default",
        jsxRuntime: "automatic",
        plugins: ["@svgr/plugin-jsx", "@svgr/plugin-prettier"],
      },
      { componentName },
    );

    fs.writeFileSync(`${REACT_COMPONENTS_PATH}/${componentName}.tsx`, tsxCode);
    componentFiles.push(`./${componentName}.tsx`);
    console.log(
      `⚛️ Generated a new component: ${REACT_COMPONENTS_PATH}/${componentName}.tsx`,
    );
  }),
).then(() => {
  const fileContent = componentFiles
    .map(
      (file) =>
        `export { default as ${file.replace(".tsx", "").replace("./", "")} } from "${file.replace(".tsx", "")}";`,
    )
    .join("\n");

  fs.writeFileSync(`${REACT_COMPONENTS_PATH}/index.ts`, fileContent);
  console.log("✅ All React components generated");

  const assetsNames: Record<string, string> = {};
  assets.forEach((item) => (assetsNames[item.symbol] = item.name));
  fs.writeFileSync(
    `${REACT_UTILS_PATH}/assetsNames.ts`,
    `export const assetsNames: Record<string, string> = ${JSON.stringify(assetsNames)};`,
  );
  console.log("✅ All Assets name generated");
});
