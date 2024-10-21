"use client";

import React from "react";

import {
  AssetIconProps,
  getAssetIconNameAndPath,
  IconComponentBaseProps,
} from "../utils";
import { DynamicIcon } from "./DynamicIcon/DynamicIcon";

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
    <DynamicIcon
      iconKey={iconKey}
      githubSrc={iconPathToRepo}
      mono={mono}
      loader={loader}
      {...props}
    />
  );
};
