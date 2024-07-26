"use client";

import React from "react";

import { assetsIconsPack } from "../iconsPacks/assetsIconsPack";
import {
  AssetIconProps,
  getAssetIconNameAndPath,
  IconComponentBaseProps,
} from "../utils";
import { StaticIcon } from "./StaticIcon";

/**
 * Get asset icon from icons pack by symbol
 */
export const StaticAssetIcon = ({
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
    <StaticIcon
      iconKey={iconKey}
      githubSrc={iconPathToRepo}
      mono={mono}
      loader={loader}
      iconsPack={assetsIconsPack}
      {...props}
    />
  );
};
