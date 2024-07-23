import fs from "fs";
import path from "path";
import { optimize } from "svgo";

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

    const svgContentsMatch = icon.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
    const svgContents = svgContentsMatch ? svgContentsMatch[1] : "";
    const preparedIcon = `<g style="transform: scale(0.8125); transform-origin: 50% 50%;">${svgContents}</g>`;

    const finalSvg = template.replace("<template />", preparedIcon);

    return optimize(finalSvg, {
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
            prefix: iconName,
          },
        },
      ],
    }).data;
  }

  if (type === "full") {
    const template = fs.readFileSync(
      path.join(templatesDir, `${dirName}/full.svg`),
      "utf8",
    );

    const svgContentsMatch = icon.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
    const svgContents = svgContentsMatch ? svgContentsMatch[1] : "";
    const preparedIcon = `<g style="transform: scale(0.8125); transform-origin: 50% 50%;">${svgContents}</g>`;

    const finalSvg = template.replace("<template />", preparedIcon);

    return optimize(finalSvg, {
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
            prefix: iconName,
          },
        },
      ],
    }).data;
  }

  return unknownIcon;
};
