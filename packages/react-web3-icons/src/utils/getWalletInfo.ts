import { githubIconsPath } from "../constants";
import { IconVariant, WalletType } from "./types";
import { wallets } from "./walletsNames";
export const getWalletName = ({
  walletName,
}: Pick<WalletType, "walletName">) => {
  return (
    wallets[walletName.replace(/\s/g, "").toLowerCase()]?.name ?? "Unknown"
  );
};
export const getWalletIconNameAndPath = ({
  walletName,
  mono,
}: Pick<WalletType, "walletName"> & { mono?: boolean }) => {
  const name = getWalletName({ walletName });
  return {
    iconPathToRepo: `${githubIconsPath}/icons/${mono ? IconVariant.Mono : IconVariant.Full}/${name.replace(/\s/g, "").toLowerCase()}.svg`,
    iconKey: name.replace(/\s/g, "").toLowerCase(),
  };
};
