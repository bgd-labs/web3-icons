"use client";

import React from "react";

import {
  AssetIconProps,
  getAssetIconNameAndPath,
  IconComponentBaseProps,
} from "../utils";
import { DynamicV2Icon } from "./DynamicV2/DynamicV2";

/**
 * Get asset icon dynamically by symbol
 */
export const AssetIcon = ({
  symbol,
  mono,
  assetTag,
  formatSymbol,
  loader,
  ...props
}: AssetIconProps & IconComponentBaseProps) => {
  const { iconKey, iconPathToRepo } = getAssetIconNameAndPath({
    symbol,
    formatSymbol,
    assetTag,
    mono,
  });
  return (
    <DynamicV2Icon
      iconKey={iconKey}
      githubSrc={iconPathToRepo}
      mono={mono}
      loader={loader}
      fallback={loader}
      {...props}
    />
  );
};
