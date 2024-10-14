"use client";

import { DynamicIcon } from "@bgd-labs/react-web3-icons";
import { getWeb3WalletName } from "@bgd-labs/react-web3-icons/dist/utils";
import dynamic from "next/dynamic";

import { IconLoader } from "@/components/IconCard";

const InstalledBrowserWalletWallet = () => {
  const walletName = getWeb3WalletName();
  return (
    <div>
      {walletName}
      <DynamicIcon
        className="size-[70px]"
        iconType="wallet"
        iconKey={walletName}
        loader={<IconLoader />}
      />
    </div>
  );
};
export default dynamic(() => Promise.resolve(InstalledBrowserWalletWallet), {
  ssr: false,
});
