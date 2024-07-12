import { githubIconsPath } from "../constants";
import { getWalletName } from "./getWalletName";
import { capitalize, IconVariant, WalletType } from "./index";
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
