import * as fs from "fs";
import template from "lodash.template";
import * as path from "path";
import { ToWords } from "to-words";

const toWords = new ToWords();

const PACKAGE_SOURCE = "packages/react-web3-icons/src";
const FULL_DIST_FOLDER = path.resolve(PACKAGE_SOURCE, "components/icons/full");
const MONO_DIST_FOLDER = path.resolve(PACKAGE_SOURCE, "components/icons/mono");
const FULL_ICONS_FOLDER = path.resolve(PACKAGE_SOURCE, "icons/full/build");
const MONO_ICONS_FOLDER = path.resolve(PACKAGE_SOURCE, "icons/mono/build");

const fullIconFiles = fs.readdirSync(FULL_ICONS_FOLDER);
const monoIconFiles = fs.readdirSync(MONO_ICONS_FOLDER);

createFolder(FULL_DIST_FOLDER);
createFolder(MONO_DIST_FOLDER);

fullIconFiles
  .filter(isIconFile)
  .forEach((fileName) => generate(fileName, "full", FULL_DIST_FOLDER));
monoIconFiles
  .filter(isIconFile)
  .forEach((fileName) => generate(fileName, "mono", MONO_DIST_FOLDER));

function generate(iconFileName: string, mode: "full" | "mono", dist: string) {
  const render = template(
    `
// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { <%= iconDataName %> } from "../../../icons/<%= mode %>/build/<%= fileName %>";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const <%= componentName %> = (props: IconComponentBaseProps) => {
  return <SVG svgCode={<%= iconDataName %>.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  <%= componentName %>.displayName = '<%= componentName %>';
}

export default <%= componentName %>;
  `.trim(),
  );

  const iconFileNameWithoutExtension = iconFileName.slice(0, -3);
  const [, iconName] = iconFileNameWithoutExtension.split(".")[0].split("-");

  const normalizedIconName = normalizeIconName(iconName);
  const componentName = `${normalizedIconName}Icon`;
  const fileContent = fs
    .readFileSync(path.resolve(FULL_ICONS_FOLDER, iconFileName))
    .toString();
  const [, iconDataName] = fileContent.match(/^export const (\w*): \{/m);

  const component = render({
    mode,
    iconDataName,
    fileName: iconFileNameWithoutExtension,
    componentName,
  });

  fs.writeFileSync(path.resolve(dist, `${componentName}.tsx`), component);
}

function createFolder(path: string) {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path, { recursive: true });
  }
}

function isIconFile(fileName: string) {
  return fileName.endsWith(".icon.ts");
}

function normalizeIconName(rawName: string) {
  const [firstNumChars] = extractBeginningNumber(rawName);

  if (firstNumChars.length) {
    const num = parseInt(firstNumChars, 10);
    const remainingSubStr = rawName.slice(firstNumChars.length);
    return `${toWords.convert(num)}${capitalize(remainingSubStr)}`;
  }

  return capitalize(rawName);
}

function extractBeginningNumber(str: string) {
  return str.match(/^\d*/);
}

function capitalize(word: string) {
  return word[0].toUpperCase() + word.slice(1);
}
