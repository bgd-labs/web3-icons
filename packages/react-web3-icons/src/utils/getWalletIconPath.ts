import { githubIconsPath } from "../constants";
import { getWalletName } from "./getWalletName";
import { WalletType } from "./index";
export const getWalletIconPath = ({
  name,
  variant,
}: Pick<WalletType, "name" | "variant">) => {
  const walletName = getWalletName({ name });
  return `${githubIconsPath}/icons/${variant}/${walletName.replace(/\s/g, "").toLowerCase()}.svg`;
};
