import fs from "fs";
import path from "path";

import { optimizeIconWithTemplate } from "./helperFunctions.ts";

const templatesDir = path.join(process.cwd(), "src/assets/templates");
const unknownIcon = fs.readFileSync(
  path.join(templatesDir, "unknown.svg"),
  "utf8",
);

/**
 * Generate original icon with template
 * @param icon
 * @param iconName
 * @param type
 * @param dirName
 */
export const generateTokenIcon = (
  icon: string,
  iconName: string,
  type: string,
  dirName: string,
) => {
  if (type === "mono") {
    const template = fs.readFileSync(
      path.join(templatesDir, `${dirName}/mono.svg`),
      "utf8",
    );
    return optimizeIconWithTemplate(icon, template, iconName);
  }
  if (type === "full") {
    const template = fs.readFileSync(
      path.join(templatesDir, `${dirName}/full.svg`),
      "utf8",
    );
    return optimizeIconWithTemplate(icon, template, iconName);
  }
  return unknownIcon;
};
