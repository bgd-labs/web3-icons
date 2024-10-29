import fs from "fs";
import { ToWords } from "to-words";

const toWords = new ToWords();

export const isIconFile = (fileName: string) => {
  return fileName.endsWith(".icon.ts");
};

export const createFolder = (path: string) => {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path, { recursive: true });
  }
};

export const capitalize = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const iconFileNameToComponentName = (iconFileName: string) => {
  const symbol = extractSymbol(iconFileName);
  const iconName = normalizeSymbol(symbol);

  return `${iconName}Icon`;
};

/*
 * The idea behind this function is to normalize icon names that start with a number
 * E.g. 1inch asset name.
 * This function should transform 1inch into oneInch using `to-words` npm package
 * */
export const normalizeSymbol = (rawName: string) => {
  return rawName
    .split(/(\d+)/)
    .map((char) => {
      if (isNumeric(char)) {
        return capitalize(toWords.convert(parseInt(char, 10)));
      }
      return capitalize(char);
    })
    .join("");
};

/**
 * Expecting icon file name format - icon-<$ symbol $>.icon.ts
 */
export const extractSymbol = (iconFileName: string) => {
  const prefixWithSymbol = iconFileName.split(".")[0];
  return prefixWithSymbol.split("-")[1];
};

/*
 * Receive path to a svg icon file returns name of exported variable
 *  */
export const extractExport = (path: string) => {
  const fileContent = fs.readFileSync(path).toString();
  const [, exportName] = fileContent.match(/^export const (\w*): \{/m);

  return exportName;
};

function isNumeric(char: string) {
  return /^\d$/.test(char);
}
