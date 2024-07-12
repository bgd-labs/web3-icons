import { transform } from "@svgr/core";
import fs from "fs";

import allIcons from "../../icons/icons.json";
import { IconType, WalletType } from "./types.ts";

const REACT_COMPONENTS_PATH =
  "packages/react-web3-icons/src/components/wallets";
const REACT_UTILS_PATH = "packages/react-web3-icons/src/utils";

const wallets = allIcons.filter((icon) => icon.type.includes(IconType.wallet));

interface QueueItem {
  name: string;
  filePath: string;
  type: "full" | "mono";
  identityFlag: string;
}

const queue: QueueItem[] = [];
for (const wallet of wallets) {
  const { identityFlag, icons } = wallet;
  const name = wallet?.name ? wallet.name : "Unknown";
  queue.push({ name, filePath: icons.mono, identityFlag, type: "mono" });
  queue.push({ name, filePath: icons.full, identityFlag, type: "full" });
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

  const walletsData: Record<
    string,
    Pick<WalletType, "name" | "identityFlag">
  > = {};
  wallets.forEach(
    (item) =>
      (walletsData[item.name.replace(/\s/g, "").toLowerCase()] = {
        name: item?.name ? item.name : "Unknown",
        identityFlag: item.identityFlag,
      }),
  );
  fs.writeFileSync(
    `${REACT_UTILS_PATH}/walletsNames.ts`,
    `export const wallets: Record<string, { name: string; identityFlag: string }> = ${JSON.stringify(walletsData)};`,
  );
  console.log("✅ All wallets data generated");
});
