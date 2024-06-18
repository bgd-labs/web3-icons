import fs from "fs";
import path from "path";

const templatesDir = path.join(process.cwd(), "src/assets/templates");
const unknownIcon = fs.readFileSync(
  path.join(templatesDir, "unknown.svg"),
  "utf8",
);

/**
 * Generate original icon with template
 * @param icon
 * @param type
 * @param dirName
 */
export const generateTokenIcon = (
  icon: string,
  type: string,
  dirName: string,
) => {
  if (type === "mono") {
    const template = fs.readFileSync(
      path.join(templatesDir, `${dirName}/mono.svg`),
      "utf8",
    );

    const svgContentsMatch = icon.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
    const svgContents = svgContentsMatch ? svgContentsMatch[1] : "";
    const preparedIcon = `<g style="transform: scale(0.8125); transform-origin: 50% 50%;">${svgContents}</g>`;

    return template.replace("<template />", preparedIcon);
  }

  if (type === "full") {
    const template = fs.readFileSync(
      path.join(templatesDir, `${dirName}/full.svg`),
      "utf8",
    );

    const svgContentsMatch = icon.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
    const svgContents = svgContentsMatch ? svgContentsMatch[1] : "";
    const preparedIcon = `<g style="transform: scale(0.8125); transform-origin: 50% 50%;">${svgContents}</g>`;

    return template.replace("<template />", preparedIcon);
  }

  return unknownIcon;
};
