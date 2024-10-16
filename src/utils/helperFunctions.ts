import {
  AaveV2Avalanche,
  AaveV2EthereumAMM,
  AaveV2Fuji,
  AaveV2Polygon,
  AaveV3Arbitrum,
  AaveV3ArbitrumSepolia,
  AaveV3Avalanche,
  AaveV3Base,
  AaveV3BaseSepolia,
  AaveV3BNB,
  AaveV3Ethereum,
  AaveV3EthereumEtherFi,
  AaveV3EthereumLido,
  AaveV3Fantom,
  AaveV3FantomTestnet,
  AaveV3Fuji,
  AaveV3Gnosis,
  AaveV3Harmony,
  AaveV3Metis,
  AaveV3Optimism,
  AaveV3OptimismSepolia,
  AaveV3Polygon,
  AaveV3Scroll,
  AaveV3ScrollSepolia,
  AaveV3Sepolia,
  AaveV3ZkSync,
} from "@bgd-labs/aave-address-book";
import fs from "fs";
import { optimize } from "svgo";
import { z } from "zod";

import {
  AssetAliases,
  IconInfo,
  IconType,
  TokenTag,
} from "../scripts/types.ts";

const REACT_ICONS_PACKS_PATH = "packages/react-web3-icons/src/iconsPacks";
export const stakeAssetsSeparateIcons = ["stkAAVE", "stkBPTV2", "stkGHO"];

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
          xmlnsOrder: "alphabetical",
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
    let name = "Unknown";
    if (type === IconType.chain && item?.chainName) {
      name = item.chainName;
    } else if (type === IconType.wallet && item.walletName) {
      name = item.walletName;
    } else if (type === IconType.brand && item.brandName) {
      name = item.brandName;
    } else {
      name = item.name;
    }

    const lowercasedName = name.replace(/\s/g, "").toLowerCase();

    iconsPack[lowercasedName] = fs.readFileSync(item.icons.full).toString();
    iconsPack[`${lowercasedName}_mono`] = fs
      .readFileSync(item.icons.mono)
      .toString();
  });

  let packName = "assetsIconsPack";
  switch (type) {
    case IconType.asset:
      packName = "assetsIconsPack";
      break;
    case IconType.chain:
      packName = "chainsIconsPack";
      break;
    case IconType.wallet:
      packName = "walletsIconsPack";
      break;
    case IconType.brand:
      packName = "brandsIconsPack";
      break;
  }

  fs.writeFileSync(
    `${REACT_ICONS_PACKS_PATH}/${packName}.ts`,
    `export const ${packName}: Record<string, string> = ${JSON.stringify(iconsPack)};`,
  );
};

export const getAssetTagBySymbol = (symbol: string) => {
  const symbolArray = symbol.split(/(?<![A-Z])(?=[A-Z])/);
  let tokenTag = "";
  if (
    symbolArray &&
    symbolArray.length &&
    !stakeAssetsSeparateIcons.includes(symbol)
  ) {
    const firstItem = symbolArray[0];
    switch (firstItem.toLowerCase()) {
      case TokenTag.aToken:
        tokenTag = TokenTag.aToken;
        break;
      case TokenTag.stataToken:
        tokenTag = TokenTag.stataToken;
        break;
      case "variable":
        tokenTag = TokenTag.aToken;
        break;
      case TokenTag.stkToken:
        tokenTag = TokenTag.stkToken;
        break;
    }
  }
  return tokenTag;
};

// assets aliases from address book
const poolsSymbols: Record<string, string> = {
  // v2
  [`${AaveV2Avalanche.POOL}_${AaveV2Avalanche.CHAIN_ID}`]: "av",
  [`${AaveV2Polygon.POOL}_${AaveV2Polygon.CHAIN_ID}`]: "am",
  [`${AaveV2EthereumAMM.POOL}_${AaveV2EthereumAMM.CHAIN_ID}`]: "Amm",
  // v3
  [`${AaveV3Ethereum.POOL}_${AaveV3Ethereum.CHAIN_ID}`]: "Eth",
  [`${AaveV3EthereumLido.POOL}_${AaveV3EthereumLido.CHAIN_ID}`]: "Lido",
  [`${AaveV3EthereumEtherFi.POOL}_${AaveV3EthereumEtherFi.CHAIN_ID}`]:
    "EtherFi",
  [`${AaveV3Polygon.POOL}_${AaveV3Polygon.CHAIN_ID}`]: "Pol",
  [`${AaveV3Avalanche.POOL}_${AaveV3Avalanche.CHAIN_ID}`]: "Ava",
  [`${AaveV3Base.POOL}_${AaveV3Base.CHAIN_ID}`]: "Bas",
  [`${AaveV3Arbitrum.POOL}_${AaveV3Arbitrum.CHAIN_ID}`]: "Arb",
  [`${AaveV3BNB.POOL}_${AaveV3BNB.CHAIN_ID}`]: "Bnb",
  [`${AaveV3Harmony.POOL}_${AaveV3Harmony.CHAIN_ID}`]: "Har",
  [`${AaveV3Metis.POOL}_${AaveV3Metis.CHAIN_ID}`]: "Met",
  [`${AaveV3ZkSync.POOL}_${AaveV3ZkSync.CHAIN_ID}`]: "Zk",
  [`${AaveV3Gnosis.POOL}_${AaveV3Gnosis.CHAIN_ID}`]: "Gno",
  [`${AaveV3Optimism.POOL}_${AaveV3Optimism.CHAIN_ID}`]: "Opt",
  [`${AaveV3Scroll.POOL}_${AaveV3Scroll.CHAIN_ID}`]: "Scr",

  // v3 testnets
  [`${AaveV3ArbitrumSepolia.POOL}_${AaveV3ArbitrumSepolia.CHAIN_ID}`]: "Arb",
  [`${AaveV3Fuji.POOL}_${AaveV3Fuji.CHAIN_ID}`]: "Ava",
  [`${AaveV3BaseSepolia.POOL}_${AaveV3BaseSepolia.CHAIN_ID}`]: "Bas",
  [`${AaveV3Sepolia.POOL}_${AaveV3Sepolia.CHAIN_ID}`]: "Eth",
  [`${AaveV3OptimismSepolia.POOL}_${AaveV3OptimismSepolia.CHAIN_ID}`]: "Opt",
  [`${AaveV3ScrollSepolia.POOL}_${AaveV3ScrollSepolia.CHAIN_ID}`]: "Scr",
  // v2 testnets
  [`${AaveV2Fuji.POOL}_${AaveV2Fuji.CHAIN_ID}`]: "Ava",

  // need test
  [`${AaveV3Fantom.POOL}_${AaveV3Fantom.CHAIN_ID}`]: "Fan",
  [`${AaveV3FantomTestnet.POOL}_${AaveV3FantomTestnet.CHAIN_ID}`]: "Fan",
};

export const updateAliasesWithAddressBook = (
  assetsAliasesInitial: AssetAliases,
) => {
  const assetsAliases: AssetAliases = assetsAliasesInitial;

  const TokenListSchema = z.object({
    name: z.string(),
    logoURI: z.string(),
    keywords: z.array(z.string()),
    tags: z.object({
      underlying: z.object({
        name: z.string(),
        description: z.string(),
      }),
      aaveV2: z.object({
        name: z.string(),
        description: z.string(),
      }),
      aaveV3: z.object({
        name: z.string(),
        description: z.string(),
      }),
      aTokenV2: z.object({
        name: z.string(),
        description: z.string(),
      }),
      aTokenV3: z.object({
        name: z.string(),
        description: z.string(),
      }),
      stataToken: z.object({
        name: z.string(),
        description: z.string(),
      }),
      staticAT: z.object({
        name: z.string(),
        description: z.string(),
      }),
    }),
    tokens: z.array(
      z.object({
        chainId: z.number(),
        address: z.string(),
        name: z.string(),
        decimals: z.number(),
        symbol: z.string(),
        tags: z.array(z.string()),
        logoURI: z.string(),
        extensions: z
          .object({
            pool: z.string().or(z.undefined()),
          })
          .or(z.undefined()),
      }),
    ),
    version: z.object({
      major: z.number(),
      minor: z.number(),
      patch: z.number(),
    }),
    timestamp: z.string(),
  });

  const tokenlist = readJsonFile(
    "node_modules/@bgd-labs/aave-address-book/tokenlist.json",
    TokenListSchema,
  );

  tokenlist.tokens.forEach((item: any) => {
    const iconSymbol =
      item.symbol.split(
        poolsSymbols[`${item.extensions?.pool}_${item.chainId}`],
      )[
        item.symbol.split(
          poolsSymbols[`${item.extensions?.pool}_${item.chainId}`],
        ).length - 1
      ] ?? "";

    const iconSymbolArray = iconSymbol.split("_");
    const formattedIconSymbol =
      iconSymbolArray.length > 1
        ? iconSymbolArray[1].toLowerCase() === "inch"
          ? "1" + iconSymbolArray[1]
          : iconSymbolArray[1]
        : iconSymbol;

    const tokenTag = getAssetTagBySymbol(item.symbol);
    if (iconSymbolArray.length <= 2) {
      assetsAliases[item.symbol.toLowerCase()] = {
        iconSymbol: formattedIconSymbol.toLowerCase(),
        symbol: `${tokenTag}${formattedIconSymbol.toUpperCase()}`,
        tokenTag,
        ...assetsAliases[item.symbol.toLowerCase()],
      };
    }
  });

  return assetsAliases;
};
// ----------------------------------------
