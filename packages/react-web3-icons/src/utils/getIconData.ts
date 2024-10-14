import { getAssetIconNameAndPath } from "./getAssetInfo";
import { getBrandIconNameAndPath } from "./getBrandInfo";
import { getChainIconNameAndPath } from "./getChainInfo";
import { getWalletIconNameAndPath } from "./getWalletInfo";
import { IconComponentBaseProps } from "./types";

export const getIconData = ({
  iconKey,
  iconType,
  assetTag,
  formatSymbol,
  mono,
}: Pick<
  IconComponentBaseProps,
  "iconKey" | "iconType" | "assetTag" | "formatSymbol" | "mono"
>) => {
  switch (iconType) {
    case "asset":
      return getAssetIconNameAndPath({
        iconKey,
        formatSymbol,
        assetTag,
        mono,
      });
    case "chain":
      return getChainIconNameAndPath({
        iconKey,
        mono,
      });
    case "wallet":
      return getWalletIconNameAndPath({
        iconKey,
        mono,
      });
    case "brand":
      return getBrandIconNameAndPath({
        iconKey,
        mono,
      });
    default:
      return {
        iconKey: "",
        iconPathToRepo: "",
      };
  }
};
