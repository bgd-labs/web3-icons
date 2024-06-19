import { AssetIconProps } from "../types";
import { assetsNames } from "./assetsNames";
import { formatSymbolForIcon } from "./formatSymbolForIcon";
export const getAssetName = ({
  symbol,
  formatSymbol,
}: Pick<AssetIconProps, "symbol" | "formatSymbol">) => {
  const formattedSymbol = formatSymbol
    ? formatSymbol(symbol)
    : formatSymbolForIcon({ symbol });
  return assetsNames[formattedSymbol] ?? "Unknown";
};
