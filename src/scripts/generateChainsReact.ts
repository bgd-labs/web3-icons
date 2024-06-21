import { transform } from "@svgr/core";
import fs from "fs";

import chains from "../../icons//chains-icons/chains-icons.json";

const REACT_COMPONENTS_PATH = "packages/react-web3-icons/src/components/chains";
const REACT_UTILS_PATH = "packages/react-web3-icons/src/utils";

interface QueueItem {
  name: string;
  filePath: string;
  chainId: number;
}

const queue: QueueItem[] = [];
for (const chain of chains) {
  const { name, chainId, icon } = chain;
  queue.push({ name, chainId, filePath: icon });
}

const componentFiles: string[] = [];
Promise.all(
  queue.map(async (item) => {
    const { filePath, name } = item;
    const iconContent = fs.readFileSync(filePath, "utf-8");
    const componentName = `Icon${(name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()).replace(/\s/g, "")}`;
    const tsxCode = await transform(
      iconContent,
      {
        icon: "100%",
        typescript: true,
        svgo: false,
        expandProps: "end",
        exportType: "default",
        jsxRuntime: "classic",
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

  const chainsNames: Record<string, string> = {};
  chains.forEach((item) => (chainsNames[item.chainId] = item.name));
  fs.writeFileSync(
    `${REACT_UTILS_PATH}/chainsNames.ts`,
    `export const chainsNames: Record<number, string> = ${JSON.stringify(chainsNames)};`,
  );
  console.log("✅ All Assets name generated");
});
