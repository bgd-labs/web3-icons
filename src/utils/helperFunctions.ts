import fs from "fs";
import { optimize } from "svgo";

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
// ----------------------------------------
