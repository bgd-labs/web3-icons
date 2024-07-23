import { transform } from "@svgr/core";
import fs from "fs";

import allIcons from "../../icons/icons.json";
import { IconType } from "./types.ts";

const REACT_COMPONENTS_PATH = "packages/react-web3-icons/src/components/chains";
const REACT_UTILS_PATH = "packages/react-web3-icons/src/utils";

const chains = allIcons.filter((icon) => icon.type.includes(IconType.chain));

interface QueueItem {
  name: string;
  filePath: string;
  type: "full" | "mono";
  chainId: number;
}

const queue: QueueItem[] = [];
for (const chain of chains) {
  const { chainId, icons } = chain;
  const name = chain?.chainName
    ? chain.chainName
    : chain?.name
      ? chain.name
      : "Unknown";
  queue.push({ name, filePath: icons.mono, chainId, type: "mono" });
  queue.push({ name, filePath: icons.full, chainId, type: "full" });
}

const componentFiles: string[] = [];
Promise.all(
  queue.map(async (item) => {
    const { filePath, name, type } = item;
    const iconContent = fs.readFileSync(filePath, "utf-8");
    const componentName = `Icon${(name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()).replace(/\s/g, "")}${type === "full" ? "Full" : "Mono"}`;
    const tsxCode = await transform(
      iconContent,
      {
        plugins: ["@svgr/plugin-jsx", "@svgr/plugin-prettier"],
        icon: "100%",
        typescript: true,
        svgo: false,
        expandProps: "end",
        jsxRuntime: "classic",
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

  const chainsNames: Record<string, string> = {};
  chains.forEach(
    (item) =>
      (chainsNames[item.chainId] = item?.chainName
        ? item.chainName
        : item?.name
          ? item.name
          : "Unknown"),
  );
  fs.writeFileSync(
    `${REACT_UTILS_PATH}/chainsNames.ts`,
    `export const chainsNames: Record<number, string> = ${JSON.stringify(chainsNames)};`,
  );
  console.log("✅ All chains names are generated");
});
