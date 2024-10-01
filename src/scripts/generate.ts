import fs from "fs";
import path from "path";
import { z } from "zod";

import { generateTokenIcon } from "../utils/generateTokenIcon.ts";
import {
  generateIconsPack,
  getPrefix,
  processIconFile,
  readJsonFile,
  stakeAssetsSeparateIcons,
} from "../utils/helperFunctions.ts";
import {
  IconFormat,
  IconInfo,
  IconInfoIcons,
  IconType,
  IconWithMetaType,
  TokenTag,
  WalletType,
  WriteQueueItem,
} from "./types.ts";

const isAddress = (address: string): boolean => {
  if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
    return false;
  } else if (/^(0x|0X)?[0-9a-f]{40}$/.test(address.toLowerCase())) {
    return true;
  }
  return false;
};

const ICONS_FOLDER = "src/assets";
const OUTPUT_FOLDER = "icons";
const MONO_SUFFIX = "_mono";
const FULL_SUFFIX = "_full";
const REACT_UTILS_PATH = "packages/react-web3-icons/src/utils";

const IconMetaSchema = z.object({
  type: z.array(z.string()),
  symbol: z.string().or(z.undefined()),
  chainId: z.number().or(z.undefined()),
  identityFlag: z.string().or(z.undefined()),

  name: z.string().or(z.undefined()),
  chainName: z.string().or(z.undefined()),
  walletName: z.string().or(z.undefined()),
  brandName: z.string().or(z.undefined()),

  aliases: z.array(z.string()).or(z.undefined()),
  variations: z.array(z.string()).or(z.undefined()),
});

const files = fs
  .readdirSync(ICONS_FOLDER)
  .filter((file) => file.endsWith(".svg") || file.endsWith(".json"));

const groupedFiles: Record<string, IconWithMetaType> = {};
const uniquePrefixes = new Set(files.map(getPrefix));
uniquePrefixes.forEach((prefix) => {
  const jsonFilePath = path.join(ICONS_FOLDER, `${prefix}.json`);
  if (!fs.existsSync(jsonFilePath)) {
    console.error(
      `🟡 Warn: The metadata file ${prefix}.json is missing. Please ensure the file exists to generate icons correctly.`,
    );
    return;
  }
  const metaData = readJsonFile(jsonFilePath, IconMetaSchema);
  const prefixFiles = files.filter((file) => getPrefix(file) === prefix);
  const mono = prefixFiles.find((file) => file.includes(MONO_SUFFIX)) || null;
  const full = prefixFiles.find((file) => file.includes(FULL_SUFFIX)) || null;
  groupedFiles[prefix] = { meta: metaData, mono, full };
});

const iconsArray = Object.keys(groupedFiles).map((key) => ({
  ...groupedFiles[key],
}));

const iconsInfoFile: IconInfo[] = [];
for (const icon of iconsArray) {
  const { meta, mono, full } = icon;
  const { variations } = meta;

  let name = "Unknown";
  if (meta.brandName) {
    name = meta.brandName;
  } else if (meta.chainName) {
    name = meta.chainName;
  } else if (meta.walletName) {
    name = meta.walletName;
  } else {
    name = meta.name ?? "Unknown";
  }

  const lowercasedName = name
    .split("(")
    .join("")
    .split(")")
    .join("")
    .replace(/\s/g, "")
    .toLowerCase();

  const iconInfo = {
    ...meta,
    icons: {} as IconInfoIcons,
  };
  if (!mono || !full) {
    console.error(
      `🟡 Warn: The icon ${name} is missing either mono or full version and was not added.`,
    );
    continue;
  }
  const writeQueue: WriteQueueItem[] = [];
  const monoContent = processIconFile(
    path.join(ICONS_FOLDER, mono),
    lowercasedName,
  )
    .replaceColorWithCurrent()
    .optimizeSVGContent()
    .getSVGContent();

  const fullContent = processIconFile(
    path.join(ICONS_FOLDER, full),
    lowercasedName,
  )
    .optimizeSVGContent()
    .getSVGContent();

  const generateIconsContents = (fileName: string, iconFormat?: IconFormat) => {
    if (iconFormat) {
      const tokenMono = generateTokenIcon(
        monoContent,
        fileName,
        "mono",
        iconFormat,
      );
      const tokenFull = generateTokenIcon(
        fullContent,
        fileName,
        "full",
        iconFormat,
      );
      const monoFilePath = path.join(OUTPUT_FOLDER, "mono", `${fileName}.svg`);
      const fullFilePath = path.join(OUTPUT_FOLDER, "full", `${fileName}.svg`);
      iconInfo.icons[iconFormat] = {
        ...iconInfo.icons[iconFormat],
        mono: monoFilePath,
        full: fullFilePath,
      };
      writeQueue.push(
        {
          filePath: monoFilePath,
          content: tokenMono,
        },
        {
          filePath: fullFilePath,
          content: tokenFull,
        },
      );
    } else {
      const monoFilePath = path.join(OUTPUT_FOLDER, "mono", `${fileName}.svg`);
      const fullFilePath = path.join(OUTPUT_FOLDER, "full", `${fileName}.svg`);
      iconInfo.icons = {
        ...iconInfo.icons,
        mono: monoFilePath,
        full: fullFilePath,
      };
      writeQueue.push(
        {
          filePath: monoFilePath,
          content: monoContent,
        },
        {
          filePath: fullFilePath,
          content: fullContent,
        },
      );
    }
  };

  if (
    meta.type.includes(IconType.wallet) ||
    meta.type.includes(IconType.chain) ||
    meta.type.includes(IconType.brand)
  ) {
    generateIconsContents(lowercasedName);
  }

  if (meta.type.includes(IconType.asset)) {
    generateIconsContents(meta.symbol.toLowerCase());
    if (variations) {
      if (variations.includes(IconFormat.aToken)) {
        generateIconsContents(
          `a${meta.symbol.toLowerCase()}`,
          IconFormat.aToken,
        );
      }
      if (variations.includes(IconFormat.stataToken)) {
        generateIconsContents(
          `stata${meta.symbol.toLowerCase()}`,
          IconFormat.stataToken,
        );
      }
      if (variations.includes(IconFormat.stkToken)) {
        generateIconsContents(
          `stk${meta.symbol.toLowerCase()}`,
          IconFormat.stkToken,
        );
      }
    }
  }

  writeQueue.forEach((item) => {
    const dir = path.dirname(item.filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(item.filePath, item.content);
  });
  iconsInfoFile.push(iconInfo);
  console.log(`✅ Icon ${name.replace(/\s/g, "").toLowerCase()} processed.`);
}

const iconsJsonPath = path.join(OUTPUT_FOLDER, "icons.json");
const iconsJsonContent = JSON.stringify(iconsInfoFile, null, 2);
fs.writeFileSync(iconsJsonPath, iconsJsonContent);
console.log(`📋 Icons metadata file generated at ${iconsJsonPath}.`);

// package utils generation
const assets = iconsInfoFile.filter((icon) =>
  icon.type.includes(IconType.asset),
);
const assetsNames: Record<string, string> = {};
assets.forEach((item) => (assetsNames[item.symbol] = item.name));
fs.writeFileSync(
  `${REACT_UTILS_PATH}/assetsNames.ts`,
  `export const assetsNames: Record<string, string> = ${JSON.stringify(assetsNames)};`,
);
console.log("✅ Assets names are generated");
const assetsAliases: Record<
  string,
  { iconSymbol: string; symbol: string; tokenTag: string }
> = {};
assets.forEach((item) => {
  item.aliases?.forEach((symbol) => {
    if (!isAddress(symbol)) {
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
      assetsAliases[symbol.toLowerCase()] = {
        iconSymbol: item.symbol,
        symbol: `${tokenTag}${item.symbol.toUpperCase()}`,
        tokenTag,
      };
    }
  });
});
fs.writeFileSync(
  `${REACT_UTILS_PATH}/assetsAliases.ts`,
  `export const assetsAliases: Record<string, { iconSymbol: string; symbol: string; tokenTag: string }> = ${JSON.stringify(assetsAliases)};`,
);
generateIconsPack(IconType.asset, assets);
console.log("✅ Assets aliases are generated");

const chains = iconsInfoFile.filter((icon) =>
  icon.type.includes(IconType.chain),
);
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
generateIconsPack(IconType.chain, chains);
console.log("✅ Chains names are generated");

const wallets = iconsInfoFile.filter((icon) =>
  icon.type.includes(IconType.wallet),
);
const walletsData: Record<
  string,
  Pick<WalletType, "name" | "identityFlag">
> = {};
wallets.forEach(
  (item) =>
    (walletsData[item.walletName.replace(/\s/g, "").toLowerCase()] = {
      name: item?.walletName ? item.walletName : "Unknown",
      identityFlag: item.identityFlag,
    }),
);
fs.writeFileSync(
  `${REACT_UTILS_PATH}/walletsNames.ts`,
  `export const wallets: Record<string, { name: string; identityFlag: string }> = ${JSON.stringify(walletsData)};`,
);
generateIconsPack(IconType.wallet, wallets);
console.log("✅ Wallets data generated");

const brands = iconsInfoFile.filter((icon) =>
  icon.type.includes(IconType.brand),
);
const brandsData: Record<string, string> = {};
brands.forEach((item) => {
  item.aliases?.forEach((address) => {
    if (isAddress(address)) {
      brandsData[address] = item?.brandName ? item.brandName : "Unknown";
    }
  });
});
fs.writeFileSync(
  `${REACT_UTILS_PATH}/brandsNames.ts`,
  `export const brands: Record<string, string> = ${JSON.stringify(brandsData)};`,
);
generateIconsPack(IconType.brand, brands);
console.log("✅ Brands data generated");
