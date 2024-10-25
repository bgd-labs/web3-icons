import * as fs from "fs";
import * as path from "path";

import { renderComponent } from "../templates/component.ts";
import { renderEntry } from "../templates/entry.ts";
import {
  createFolder,
  extractExport,
  iconFileNameToComponentName,
  isIconFile,
} from "../utils/componentGenerationHelpers.ts";
import { IconStyle } from "./types.ts";

const PACKAGE_SOURCE = "packages/react-web3-icons/src";

const FULL_ICONS_SRC = path.resolve(PACKAGE_SOURCE, "icons/full/build");
const FULL_DIST_FOLDER = path.resolve(PACKAGE_SOURCE, "components/icons/full");

const MONO_ICONS_SRC = path.resolve(PACKAGE_SOURCE, "icons/mono/build");
const MONO_DIST_FOLDER = path.resolve(PACKAGE_SOURCE, "components/icons/mono");

const fullIconFiles = fs.readdirSync(FULL_ICONS_SRC).filter(isIconFile);
const monoIconFiles = fs.readdirSync(MONO_ICONS_SRC).filter(isIconFile);

createFolder(FULL_DIST_FOLDER);
fullIconFiles.forEach(
  generateComponent("full", FULL_ICONS_SRC, FULL_DIST_FOLDER),
);
generateEntry(fullIconFiles, FULL_DIST_FOLDER);

createFolder(MONO_DIST_FOLDER);
monoIconFiles.forEach(
  generateComponent("mono", MONO_ICONS_SRC, MONO_DIST_FOLDER),
);
generateEntry(monoIconFiles, MONO_DIST_FOLDER);

function generateComponent(mode: keyof IconStyle, src: string, dist: string) {
  return (iconFileName: string) => {
    const iconFileNameWithoutExtension = iconFileName.slice(0, -3);
    const componentName = iconFileNameToComponentName(iconFileName);
    const iconDataName = extractExport(path.resolve(src, iconFileName));

    const component = renderComponent({
      mode,
      iconDataName,
      fileName: iconFileNameWithoutExtension,
      componentName,
    });

    fs.writeFileSync(path.resolve(dist, `${componentName}.tsx`), component);
    console.log(`✅ ${componentName} is generated`);
  };
}

function generateEntry(iconFileNames: string[], dist: string) {
  const entry = iconFileNames
    .sort()
    .map((iconFileName) => {
      const componentName = iconFileNameToComponentName(iconFileName);
      return `export { default as ${componentName} } from './${componentName}';`;
    })
    .join("\n");

  fs.writeFileSync(path.resolve(dist, "index.ts"), renderEntry({ entry }));
  console.log(`✅ index.ts is generated`);
}
