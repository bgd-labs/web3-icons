import { ToWords } from "to-words";

import { capitalize } from "./capitalize";

const toWords = new ToWords();

export const symbolToComponentName = (symbol: string) => {
  const [firstNumChars] = extractBeginningNumber(symbol)!;
  let normalizedSymbol = "";

  if (firstNumChars.length) {
    const num = parseInt(firstNumChars, 10);
    const remainingSubStr = symbol.slice(firstNumChars.length);
    normalizedSymbol = `${toWords.convert(num)}${capitalize(remainingSubStr)}`;
  } else {
    normalizedSymbol = capitalize(symbol);
  }

  return `${normalizedSymbol}Icon.tsx`;
};

function extractBeginningNumber(str: string) {
  return str.match(/^\d*/);
}
