import { assetsNames } from "./assetsNames";
import { formatSymbolForIcon } from "./formatSymbolForIcon";
import { AssetIconProps } from "./types";
export const getAssetName = ({
  symbol,
  formatSymbol,
}: Pick<AssetIconProps, "symbol" | "formatSymbol">) => {
  const formattedSymbol = formatSymbol
    ? formatSymbol(symbol)
    : formatSymbolForIcon({ symbol });
  return assetsNames[formattedSymbol] ?? "Unknown";
};
