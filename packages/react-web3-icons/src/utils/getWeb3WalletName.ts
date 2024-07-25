import { wallets } from "./walletsNames";
/**
 * Function for getting installed browser wallet name.
 */
export const getWeb3WalletName = () => {
  const defaultBrowserWalletName = "Browser wallet";
  if (typeof window !== "undefined") {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    if (window.ethereum) {
      const userBrowserWallets = Object.values(wallets).filter(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        (wallet) => !!window.ethereum[wallet.identityFlag],
      );
      if (userBrowserWallets.length > 1 || userBrowserWallets.length === 0) {
        return defaultBrowserWalletName;
      } else {
        return userBrowserWallets[0]?.name ?? defaultBrowserWalletName;
      }
    } else {
      return defaultBrowserWalletName;
    }
  } else {
    return defaultBrowserWalletName;
  }
};
