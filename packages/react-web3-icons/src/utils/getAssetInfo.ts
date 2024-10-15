import { githubIconsPath } from "../constants";
import { assetsAliases, assetsNames } from "../helpers";
import { formatSymbolForIcon } from "./formatSymbolForIcon";
import { IconComponentBaseProps, IconVariant } from "./types";

export const getHumanReadableAssetSymbol = (symbol: string) => {
  const assetInfo = assetsAliases[symbol.toLowerCase()];
  if (assetInfo) {
    return `${assetInfo.tokenTag}${assetInfo.iconSymbol}`;
  }
  return symbol;
};
export const getAssetName = ({
  symbol,
  formatSymbol,
}: Pick<
  IconComponentBaseProps,
  "symbol" | "assetTag" | "formatSymbol" | "mono"
>) => {
  const formattedSymbol = formatSymbol
    ? formatSymbol(symbol?.toString() ?? "")
    : formatSymbolForIcon({ symbol: symbol?.toString() ?? "" });

  if (typeof formattedSymbol !== "string") {
    return assetsNames[formattedSymbol.iconSymbol] ?? "Unknown";
  } else {
    return assetsNames[formattedSymbol] ?? "Unknown";
  }
};

export const getAssetIconNameAndPath = ({
  symbol,
  assetTag,
  formatSymbol,
  mono,
}: Pick<
  IconComponentBaseProps,
  "symbol" | "assetTag" | "formatSymbol" | "mono"
>) => {
  const formattedSymbol = formatSymbol
    ? formatSymbol(symbol?.toString() ?? "")
    : formatSymbolForIcon({ symbol: symbol?.toString() ?? "" });

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
