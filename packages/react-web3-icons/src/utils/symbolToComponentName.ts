import { normalizeSymbol } from "../../../../src/utils/componentGenerationHelpers";

export const symbolToComponentName = (symbol: string) => {
  return `${normalizeSymbol(symbol)}Icon`;
};
