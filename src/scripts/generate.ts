import fs from "fs";
import path from "path";
import { z } from "zod";

import { generateTokenIcon } from "../utils/generateTokenIcon.ts";
import {
  getPrefix,
  processIconFile,
  readJsonFile,
} from "../utils/helperFunctions.ts";
import {
  IconInfo,
  IconInfoIcons,
  IconWithMetaType,
  WriteQueueItem,
} from "./types.ts";

const ICONS_FOLDER = "src/assets/assets-icons";
const OUTPUT_FOLDER = "icons/assets-icons";
const MONO_SUFFIX = "_mono";
const FULL_SUFFIX = "_full";

const IconMetaSchema = z.object({
  name: z.string(),
  symbol: z.string(),
  symbolAliases: z.array(z.string()),
  variations: z.array(z.string()),
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
  const { name, variations } = meta;

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

  const monoContent = processIconFile(path.join(ICONS_FOLDER, mono))
    .replaceColorWithCurrent()
    .optimizeSVGContent()
    .getSVGContent();

  const monoFilePath = path.join(
    OUTPUT_FOLDER,
    "mono",
    `${meta.symbol.toLowerCase()}.svg`,
  );
  iconInfo.icons.mono = monoFilePath;

  writeQueue.push({
    filePath: monoFilePath,
    content: monoContent,
  });

  const fullContent = processIconFile(path.join(ICONS_FOLDER, full))
    .optimizeSVGContent()
    .getSVGContent();

  const fullFilePath = path.join(
    OUTPUT_FOLDER,
    "full",
    `${meta.symbol.toLowerCase()}.svg`,
  );
  iconInfo.icons.full = fullFilePath;

  writeQueue.push({
    filePath: fullFilePath,
    content: fullContent,
  });

  if (variations.includes("aToken")) {
    const aTokenMono = generateTokenIcon(monoContent, "mono", "aToken");
    const aTokenFull = generateTokenIcon(fullContent, "full", "aToken");

    const aTokenMonoFilePath = path.join(
      OUTPUT_FOLDER,
      "mono",
      `a${meta.symbol.toLowerCase()}.svg`,
    );
    const aTokenFullFilePath = path.join(
      OUTPUT_FOLDER,
      "full",
      `a${meta.symbol.toLowerCase()}.svg`,
    );
    iconInfo.icons.aToken = {
      mono: aTokenMonoFilePath,
      full: aTokenFullFilePath,
    };

    writeQueue.push(
      {
        filePath: aTokenMonoFilePath,
        content: aTokenMono,
      },
      {
        filePath: aTokenFullFilePath,
        content: aTokenFull,
      },
    );
  }

  if (variations.includes("stataToken")) {
    const stataTokenMono = generateTokenIcon(monoContent, "mono", "stataToken");
    const stataTokenFull = generateTokenIcon(fullContent, "full", "stataToken");

    const stataTokenMonoFilePath = path.join(
      OUTPUT_FOLDER,
      "mono",
      `stata${meta.symbol.toLowerCase()}.svg`,
    );
    const stataTokenFullFilePath = path.join(
      OUTPUT_FOLDER,
      "full",
      `stata${meta.symbol.toLowerCase()}.svg`,
    );

    iconInfo.icons.stataToken = {
      mono: stataTokenMonoFilePath,
      full: stataTokenFullFilePath,
    };

    writeQueue.push(
      {
        filePath: stataTokenMonoFilePath,
        content: stataTokenMono,
      },
      {
        filePath: stataTokenFullFilePath,
        content: stataTokenFull,
      },
    );
  }

  writeQueue.forEach((item) => {
    const dir = path.dirname(item.filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(item.filePath, item.content);
  });
  iconsInfoFile.push(iconInfo);
  console.log(`✅ Icon ${name} (${meta.symbol}) processed.`);
}

const iconsJsonPath = path.join(OUTPUT_FOLDER, "assets-icons.json");
const iconsJsonContent = JSON.stringify(iconsInfoFile, null, 2);
fs.writeFileSync(iconsJsonPath, iconsJsonContent);
console.log(`📋 Icons metadata file generated at ${iconsJsonPath}.`);
