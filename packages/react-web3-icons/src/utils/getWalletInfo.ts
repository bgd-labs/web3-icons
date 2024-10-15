import { githubIconsPath } from "../constants";
import { wallets } from "../helpers";
import { IconComponentBaseProps, IconVariant } from "./types";

export const getWalletName = (iconKey: string) => {
  return wallets[iconKey.replace(/\s/g, "").toLowerCase()]?.name ?? "Unknown";
};
export const getWalletIconNameAndPath = ({
  walletKey,
  mono,
}: Pick<IconComponentBaseProps, "walletKey" | "mono">) => {
  const name = getWalletName(walletKey?.toString() ?? "");
  return {
    iconPathToRepo: `${githubIconsPath}/icons/${mono ? IconVariant.Mono : IconVariant.Full}/${name.replace(/\s/g, "").toLowerCase()}.svg`,
    iconKey: name.replace(/\s/g, "").toLowerCase(),
  };
};
