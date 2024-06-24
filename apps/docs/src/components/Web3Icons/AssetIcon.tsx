"use client";

import { DynamicIcon } from "@bgd-labs/react-web3-icons";
import {
  AssetIconProps,
  getAssetIconPath,
} from "@bgd-labs/react-web3-icons/dist/utils";

/**
 * Renders an asset icon specified by symbol.
 */
export const AssetIcon = ({ ...props }: AssetIconProps) => {
  const iconPath = getAssetIconPath(props);
  return (
    <DynamicIcon
      iconPath={iconPath}
      dynamicComponent={() =>
        import("@bgd-labs/react-web3-icons/dist/components/index.cjs")
      }
      loadingComponent={
        <div className="size-11 animate-pulse rounded-full bg-brand-300" />
      }
    />
  );
};
