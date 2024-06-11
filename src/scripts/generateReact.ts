import { transform } from "@svgr/core";
import fs from "fs";
import assets from "../../icons/icons.json";

const REACT_COMPONENTS_PATH = "packages/react-icons/src/components";

// const iconContent = fs.readFileSync("icons/full/statazrx.svg", "utf-8");
// const tsxCode = transform(
//   iconContent,
//   {
//     icon: true,
//     plugins: ["@svgr/plugin-jsx", "@svgr/plugin-prettier"],
//     typescript: true,
//   },
//   { componentName: "Component" }
// ).then((code) => {
//   console.log(code);
// });

interface QueueItem {
  filePath: string;
  type: "full" | "mono";
  symbol: string;
}

const queue: QueueItem[] = [];

for (const asset of assets) {
  const { icons, symbol } = asset;

  // Add mono and full icons for the base token
  queue.push({ filePath: icons.mono, type: "mono", symbol });
  queue.push({ filePath: icons.full, type: "full", symbol });

  // Check for aToken and add if exists
  if (icons.aToken) {
    queue.push({
      filePath: icons.aToken.mono,
      type: "mono",
      symbol: `a${symbol}`,
    });
    queue.push({
      filePath: icons.aToken.full,
      type: "full",
      symbol: `a${symbol}`,
    });
  }

  // Check for stataToken and add if exists
  if (icons.stataToken) {
    queue.push({
      filePath: icons.stataToken.mono,
      type: "mono",
      symbol: `stata${symbol}`,
    });
    queue.push({
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
        icon: true,
        plugins: ["@svgr/plugin-jsx", "@svgr/plugin-prettier"],
        typescript: true,
      },
      { componentName }
    );

    fs.writeFileSync(`${REACT_COMPONENTS_PATH}/${componentName}.tsx`, tsxCode);
    componentFiles.push(`./${componentName}.tsx`);
    console.log(
      `⚛️ Generated a new component: ${REACT_COMPONENTS_PATH}/${componentName}.tsx`
    );
  })
).then(() => {
  const fileContent = componentFiles
    .map((file) => `export * from "${file.replace(".tsx", "")}";`)
    .join("\n");

  fs.writeFileSync(`${REACT_COMPONENTS_PATH}/index.ts`, fileContent);

  console.log("✅ All React components generated");
});
