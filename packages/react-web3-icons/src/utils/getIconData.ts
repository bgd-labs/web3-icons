import { getAssetIconNameAndPath } from "./getAssetInfo";
import { getBrandIconNameAndPath } from "./getBrandInfo";
import { getChainIconNameAndPath } from "./getChainInfo";
import { getWalletIconNameAndPath } from "./getWalletInfo";
import { IconComponentProps } from "./types";

export const getIconData = ({
  symbol,
  chainId,
  walletKey,
  brandKey,
  assetTag,
  formatSymbol,
  mono,
}: Pick<
  IconComponentProps,
  | "symbol"
  | "chainId"
  | "walletKey"
  | "brandKey"
  | "assetTag"
  | "formatSymbol"
  | "mono"
>) => {
  if (symbol) {
    return getAssetIconNameAndPath({
      symbol,
      formatSymbol,
      assetTag,
      mono,
    });
  }
  if (chainId) {
    return getChainIconNameAndPath({
      chainId,
      mono,
    });
  }
  if (walletKey) {
    return getWalletIconNameAndPath({
      walletKey,
      mono,
    });
  }
  if (brandKey) {
    return getBrandIconNameAndPath({
      brandKey,
      mono,
    });
  }
  return {
    iconKey: "",
    iconPathToRepo: "",
  };
};
