import fs from "fs";
import path from "path";
import { z } from "zod";

import {
  getPrefix,
  processIconFile,
  readJsonFile,
} from "../utils/helperFunctions.ts";
import { ChainInfoType, ChainType, WriteQueueItem } from "./types.ts";

const CHAINS_FOLDER = "src/assets/chains-icons";
const OUTPUT_FOLDER = "icons/chains-icons";

const ChainMetaSchema = z.object({
  name: z.string(),
  chainId: z.number(),
});

const files = fs
  .readdirSync(CHAINS_FOLDER)
  .filter((file) => file.endsWith(".svg") || file.endsWith(".json"));

const groupedFiles: Record<string, ChainType> = {};
const uniquePrefixes = new Set(files.map(getPrefix));
uniquePrefixes.forEach((prefix) => {
  const jsonFilePath = path.join(CHAINS_FOLDER, `${prefix}.json`);
  if (!fs.existsSync(jsonFilePath)) {
    console.error(
      `🟡 Warn: The metadata file ${prefix}.json is missing. Please ensure the file exists to generate icons correctly.`,
    );
    return;
  }
  groupedFiles[prefix] = readJsonFile(jsonFilePath, ChainMetaSchema);
});

const chainsArray = Object.keys(groupedFiles).map((key) => ({
  ...groupedFiles[key],
}));

const chainsInfoFile: ChainInfoType[] = [];
for (const chain of chainsArray) {
  const { name, chainId } = chain;

  const iconInfo = {
    name,
    chainId,
    icon: "",
  };

  const writeQueue: WriteQueueItem[] = [];

  const content = processIconFile(
    path.join(CHAINS_FOLDER, `${name.replace(/\s/g, "").toLowerCase()}.svg`),
  )
    .optimizeSVGContent()
    .getSVGContent();

  const iconFilePath = path.join(
    OUTPUT_FOLDER,
    `${name.replace(/\s/g, "").toLowerCase()}.svg`,
  );
  iconInfo.icon = iconFilePath;

  writeQueue.push({
    filePath: iconFilePath,
    content: content,
  });

  writeQueue.forEach((item) => {
    const dir = path.dirname(item.filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(item.filePath, item.content);
  });
  chainsInfoFile.push(iconInfo);
  console.log(`✅ Chain ${name} (${chainId}) processed.`);
}

const chainsJsonPath = path.join(OUTPUT_FOLDER, "chains-icons.json");
const chainsJsonContent = JSON.stringify(chainsInfoFile, null, 2);
fs.writeFileSync(chainsJsonPath, chainsJsonContent);
console.log(`📋 Chains metadata file generated at ${chainsJsonPath}.`);
