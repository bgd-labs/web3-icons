import { normalizeSymbol } from "../../../../src/utils/componentGenerationHelpers";

export const symbolToComponentName = (symbol: string) => {
  const formattedIconKey = symbol.replace("stkStata", "stkstata");
  return `${normalizeSymbol(formattedIconKey)}Icon.tsx`;
};
