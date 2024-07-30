import { githubIconsPath } from "../constants";
import { assetsNames } from "./assetsNames";
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
  assetTag,
  mono,
}: AssetIconProps) => {
  const formattedSymbol = formatSymbol
    ? formatSymbol(symbol)
    : formatSymbolForIcon({ symbol });
  return {
    iconPathToRepo: `${githubIconsPath}/icons/${mono ? IconVariant.Mono : IconVariant.Full}/${assetTag ? assetTag.toLowerCase() : ""}${formattedSymbol}.svg`,
    iconKey: `${assetTag ? assetTag : ""}${formattedSymbol}`,
  };
};
