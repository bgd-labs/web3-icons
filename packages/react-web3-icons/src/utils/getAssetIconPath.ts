import { githubIconsPath } from "../constants";
import { formatSymbolForIcon } from "./formatSymbolForIcon";
import { AssetIconProps } from "./types";
export const getAssetIconPath = ({
  formatSymbol,
  symbol,
  tokenTag,
  variant,
}: AssetIconProps) => {
  const formattedSymbol = formatSymbol
    ? formatSymbol(symbol)
    : formatSymbolForIcon({ symbol });
  return `${githubIconsPath}/icons/${variant}/${tokenTag ? tokenTag.toLowerCase() : ""}${formattedSymbol}.svg`;
};
