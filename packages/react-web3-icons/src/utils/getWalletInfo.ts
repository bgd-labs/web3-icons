import { githubIconsPath } from "../constants";
import { capitalize } from "./capitalize";
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
  variant,
}: Pick<WalletType, "walletName" | "variant">) => {
  const name = getWalletName({ walletName });
  return {
    iconPathToRepo: `${githubIconsPath}/icons/${variant}/${name.replace(/\s/g, "").toLowerCase()}.svg`,
    iconName: `${capitalize(name.replace(/\s/g, "").toLowerCase())}${capitalize(variant ?? IconVariant.Full)}`,
  };
};
