import { githubIconsPath } from "../constants";
import { assetsNames } from "./assetsNames";
import { capitalize } from "./capitalize";
import { formatSymbolForIcon } from "./formatSymbolForIcon";
import { AssetIconProps, IconVariant } from "./types";
export const getAssetName = ({
  symbol,
  formatSymbol,
}: Pick<AssetIconProps, "symbol" | "formatSymbol">) => {
  const formattedSymbol = formatSymbol
    ? formatSymbol(symbol)
    : formatSymbolForIcon({ symbol });
  return assetsNames[formattedSymbol] ?? "Unknown";
};
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
