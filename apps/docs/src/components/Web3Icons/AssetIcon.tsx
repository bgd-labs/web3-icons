"use client";

import { DynamicIcon } from "@bgd-labs/react-web3-icons";
import {
  AssetIconProps,
  getAssetIconNameAndPath,
} from "@bgd-labs/react-web3-icons/dist/utils";

/**
 * Renders an asset icon specified by symbol.
 */
export const AssetIcon = ({ ...props }: AssetIconProps) => {
  const { iconPathToRepo, iconName } = getAssetIconNameAndPath(props);
  return (
    <DynamicIcon
      iconPath={iconPathToRepo}
      iconName={iconName}
      dynamicComponent={() =>
        import("@bgd-labs/react-web3-icons/dist/components/index.cjs")
      }
      loadingComponent={
        <div className="size-11 animate-pulse rounded-full bg-brand-300" />
      }
    />
  );
};
