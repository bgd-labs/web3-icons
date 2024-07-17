"use client";
import { DynamicIcon } from "@bgd-labs/react-web3-icons";
import {
  getWalletIconPath,
  WalletType,
} from "@bgd-labs/react-web3-icons/dist/utils";

import { IconLoader } from "@/components/Web3Icons/IconLoader";
/**
 * Renders a wallet icon specified by chain id.
 */
export const WalletIcon = ({
  ...props
}: Pick<WalletType, "name" | "variant">) => {
  const iconPath = getWalletIconPath(props);
  return <DynamicIcon src={iconPath} loadingComponent={<IconLoader />} />;
};
