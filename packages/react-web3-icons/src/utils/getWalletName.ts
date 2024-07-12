import { WalletType } from "./types";
import { wallets } from "./walletsNames";
export const getWalletName = ({ name }: Pick<WalletType, "name">) => {
  return wallets[name.replace(/\s/g, "").toLowerCase()].name ?? "Unknown";
};
