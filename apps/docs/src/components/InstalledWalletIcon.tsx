"use client";

import {
  getWeb3WalletName,
  IconVariant,
  Web3IconType,
} from "@bgd-labs/react-web3-icons/dist/utils";
import dynamic from "next/dynamic";

import { Web3Icon } from "@/components/Web3Icon";

const InstalledBrowserWalletWallet = () => {
  const walletName = getWeb3WalletName();
  return (
    <div>
      {walletName}
      <Web3Icon
        iconInfo={{
          type: Web3IconType.wallet,
          info: { name: walletName, variant: IconVariant.Full },
        }}
      />
    </div>
  );
};
export default dynamic(() => Promise.resolve(InstalledBrowserWalletWallet), {
  ssr: false,
});
