import fs from "fs";
import path from "path";

const templatesDir = path.join(process.cwd(), "src/assets/templates");
const unknownIcon = fs.readFileSync(
  path.join(templatesDir, "unknown.svg"),
  "utf8"
);

export const generateStataToken = (icon: string, type: string) => {
  if (type === "mono") {
    const template = fs.readFileSync(
      path.join(templatesDir, "stataToken/mono.svg"),
      "utf8"
    );

    const svgContentsMatch = icon.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
    const svgContents = svgContentsMatch ? svgContentsMatch[1] : "";

    const preparedIcon = `<g style="transform: scale(0.8125); transform-origin: 50% 50%;">${svgContents}</g>`;

    const generatedIcon = template.replace("<template />", preparedIcon);

    return generatedIcon;
  }
  if (type === "full") {
    const template = fs.readFileSync(
      path.join(templatesDir, "stataToken/full.svg"),
      "utf8"
    );

    const svgContentsMatch = icon.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
    const svgContents = svgContentsMatch ? svgContentsMatch[1] : "";

    const preparedIcon = `<g style="transform: scale(0.8125); transform-origin: 50% 50%;">${svgContents}</g>`;

    const generatedIcon = template.replace("<template />", preparedIcon);

    return generatedIcon;
  }

  return unknownIcon;
};
