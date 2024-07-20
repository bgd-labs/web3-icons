import { githubIconsPath } from "../constants";
import { capitalize } from "./capitalize";
import { IconVariant, WalletType } from "./types";
import { wallets } from "./walletsNames";
export const getWalletName = ({ name }: Pick<WalletType, "name">) => {
  return wallets[name.replace(/\s/g, "").toLowerCase()].name ?? "Unknown";
};
export const getWalletIconNameAndPath = ({
  name,
  variant,
}: Pick<WalletType, "name" | "variant">) => {
  const walletName = getWalletName({ name });
  return {
    iconPathToRepo: `${githubIconsPath}/icons/${variant}/${walletName.replace(/\s/g, "").toLowerCase()}.svg`,
    iconName: `${capitalize(walletName.replace(/\s/g, "").toLowerCase())}${capitalize(variant ?? IconVariant.Full)}`,
  };
};
