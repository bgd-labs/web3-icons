"use client";
import { DynamicIcon } from "@bgd-labs/react-web3-icons";
import {
  ChainType,
  getChainIconPath,
} from "@bgd-labs/react-web3-icons/dist/utils";

import { IconLoader } from "@/components/Web3Icons/IconLoader";
/**
 * Renders a chain icon specified by chain id.
 */
export const ChainIcon = ({
  ...props
}: Pick<ChainType, "chainId" | "variant">) => {
  const iconPath = getChainIconPath(props);
  return <DynamicIcon src={iconPath} loadingComponent={<IconLoader />} />;
};
