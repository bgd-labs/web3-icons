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

  if (typeof formattedSymbol !== "string") {
    return assetsNames[formattedSymbol.iconSymbol] ?? "Unknown";
  } else {
    return assetsNames[formattedSymbol] ?? "Unknown";
  }
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

  if (typeof formattedSymbol !== "string") {
    const symbol = formattedSymbol.iconSymbol;
    const tag = assetTag ? assetTag : formattedSymbol.tokenTag;
    return {
      iconPathToRepo: `${githubIconsPath}/icons/${mono ? IconVariant.Mono : IconVariant.Full}/${tag.toLowerCase()}${symbol}.svg`,
      iconKey: `${tag}${symbol}`,
    };
  } else {
    return {
      iconPathToRepo: `${githubIconsPath}/icons/${mono ? IconVariant.Mono : IconVariant.Full}/${assetTag ? assetTag.toLowerCase() : ""}${formattedSymbol}.svg`,
      iconKey: `${assetTag ? assetTag : ""}${formattedSymbol}`,
    };
  }
};
