import fs from "fs";
import { optimize } from "svgo";

import { IconInfo, IconType } from "../scripts/types.ts";

const REACT_ICONS_PACKS_PATH = "packages/react-web3-icons/src/iconsPacks";

// ----------------------------------------
// Helper functions
// ----------------------------------------
export const getPrefix = (fileName: string) => fileName.split(/[_.]/)[0];

export const readJsonFile = (filePath: string, schema: any) => {
  const content = fs.readFileSync(filePath, { encoding: "utf8" });
  const jsonData = JSON.parse(content);
  const parsedData = schema.safeParse(jsonData);
  if (!parsedData.success) {
    throw new Error(`Invalid JSON structure in ${filePath}.`);
  }
  return parsedData.data;
};

export const svgoOptimizeWithPlugins = (
  svgContent: string,
  prefixName: string,
) => {
  const optimizationResult = optimize(svgContent, {
    plugins: [
      {
        name: "preset-default",
        params: {
          overrides: {
            removeViewBox: false,
            cleanupIds: false,
            collapseGroups: false,
          },
        },
      },
      {
        name: "prefixIds",
        params: {
          prefix: prefixName,
        },
      },
      "removeDimensions",
      {
        name: "addAttributesToSVGElement",
        params: {
          attributes: [
            {
              width: "32",
            },
            {
              height: "32",
            },
          ],
        },
      },
      {
        name: "sortAttrs",
        params: {
          xmlnsOrder: "front",
        },
      },
    ],
  });

  return optimizationResult.data;
};

export const optimizeIconWithTemplate = (
  icon: string,
  template: string,
  iconName: string,
) => {
  const svgContentsMatch = icon.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
  const svgContents = svgContentsMatch ? svgContentsMatch[1] : "";
  const preparedIcon = `<g style="transform: scale(0.8125); transform-origin: 50% 50%;">${svgContents}</g>`;
  const finalSvg = template.replace("<template />", preparedIcon);
  return svgoOptimizeWithPlugins(finalSvg, iconName);
};

export const processIconFile = (filePath: string, name: string) => {
  let svgContent = fs.readFileSync(filePath, { encoding: "utf8" });
  return {
    replaceColorWithCurrent: function () {
      svgContent = svgContent.replace(/#[0-9a-fA-F]{6}/g, "currentColor");
      return this;
    },
    optimizeSVGContent: function () {
      svgContent = svgoOptimizeWithPlugins(svgContent, name);
      return this;
    },
    getSVGContent: function () {
      return svgContent;
    },
  };
};

export const generateIconsPack = (type: IconType, data: IconInfo[]) => {
  const iconsPack: Record<string, string> = {};

  data.forEach((item) => {
    const name =
      type === IconType.chain && item?.chainName
        ? item.chainName
        : type === IconType.wallet && item.walletName
          ? item.walletName
          : item.name
            ? item.name
            : "Unknown";

    const lowercasedName = name.replace(/\s/g, "").toLowerCase();

    iconsPack[lowercasedName] = fs.readFileSync(item.icons.full).toString();
    iconsPack[`${lowercasedName}_mono`] = fs
      .readFileSync(item.icons.mono)
      .toString();
  });

  const packName =
    type === IconType.chain
      ? "chainsIconsPack"
      : type === IconType.wallet
        ? "walletsIconsPack"
        : "assetsIconsPack";

  fs.writeFileSync(
    `${REACT_ICONS_PACKS_PATH}/${packName}.ts`,
    `export const ${packName}: Record<string, string> = ${JSON.stringify(iconsPack)};`,
  );
};
// ----------------------------------------
