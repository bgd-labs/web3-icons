import { getAssetIconNameAndPath } from "./getAssetInfo";
import { getBrandIconNameAndPath } from "./getBrandInfo";
import { getChainIconNameAndPath } from "./getChainInfo";
import { getWalletIconNameAndPath } from "./getWalletInfo";
import { IconComponentBaseProps } from "./types";

export const getIconData = ({
  symbol,
  chainId,
  walletKey,
  brandKey,
  assetTag,
  formatSymbol,
  mono,
}: Pick<
  IconComponentBaseProps,
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

export const getIconsPack = ({
  symbol,
  chainId,
  walletKey,
  brandKey,
}: Pick<
  IconComponentBaseProps,
  "symbol" | "chainId" | "walletKey" | "brandKey"
>) => {
  if (symbol) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    return require("../iconsPacks/assetsIconsPack").assetsIconsPack;
  }
  if (chainId) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    return require("../iconsPacks/chainsIconsPack").chainsIconsPack;
  }
  if (walletKey) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    return require("../iconsPacks/walletsIconsPack").walletsIconsPack;
  }
  if (brandKey) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    return require("../iconsPacks/brandsIconsPack").brandsIconsPack;
  }
  return {} as Record<string, string>;
};
