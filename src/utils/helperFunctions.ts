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

export const processIconFile = (filePath: string) => {
  let svgContent = fs.readFileSync(filePath, { encoding: "utf8" });

  return {
    replaceColorWithCurrent: function () {
      svgContent = svgContent.replace(/#[0-9a-fA-F]{6}/g, "currentColor");
      return this;
    },
    optimizeSVGContent: function () {
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
        ],
      });
      svgContent = optimizationResult.data;
      return this;
    },
    getSVGContent: function () {
      return svgContent;
    },
  };
};

// ----------------------------------------
