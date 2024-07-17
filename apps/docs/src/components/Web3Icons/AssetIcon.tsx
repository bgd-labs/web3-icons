"use client";
import { DynamicIcon } from "@bgd-labs/react-web3-icons";
import {
  AssetIconProps,
  getAssetIconPath,
} from "@bgd-labs/react-web3-icons/dist/utils";

import { IconLoader } from "@/components/Web3Icons/IconLoader";
/**
 * Renders an asset icon specified by symbol.
 */
export const AssetIcon = ({ ...props }: AssetIconProps) => {
  const iconPath = getAssetIconPath(props);
  return <DynamicIcon src={iconPath} loadingComponent={<IconLoader />} />;
};
