import { ToWords } from "to-words";

import { capitalize } from "./capitalize";

const toWords = new ToWords();

export const symbolToComponentName = (symbol: string) => {
  const normalizedSymbol = symbol
    .split(/(\d)/)
    .map((char) => {
      if (isNumeric(char)) {
        return capitalize(toWords.convert(parseInt(char, 10)));
      }
      return capitalize(char);
    })
    .join("");

  return `${normalizedSymbol}Icon.tsx`;
};

function isNumeric(char: string) {
  return /^\d$/.test(char);
}
