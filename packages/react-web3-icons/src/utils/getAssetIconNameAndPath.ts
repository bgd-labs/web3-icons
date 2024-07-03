import { githubIconsPath } from "../constants";
import { capitalize } from "./capitalize";
import { formatSymbolForIcon } from "./formatSymbolForIcon";
import { AssetIconProps, IconVariant } from "./types";

export const getAssetIconNameAndPath = ({
  formatSymbol,
  symbol,
  tokenTag,
  variant,
}: AssetIconProps) => {
  const formattedSymbol = formatSymbol
    ? formatSymbol(symbol)
    : formatSymbolForIcon({ symbol });
  return {
    iconPathToRepo: `${githubIconsPath}/icons/${variant}/${tokenTag ? tokenTag.toLowerCase() : ""}${formattedSymbol}.svg`,
    iconName: `${tokenTag ? tokenTag : ""}${tokenTag ? formattedSymbol : capitalize(formattedSymbol)}${capitalize(variant ?? IconVariant.Full)}`,
  };
};
