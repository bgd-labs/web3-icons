"use client";

import React from "react";

import { getIconData, IconComponentProps } from "../utils";
import { DynamicIcon } from "./DynamicIcon";
import { StaticIcon } from "./StaticIcon";

export const Web3Icon = ({
  symbol,
  chainId,
  walletKey,
  brandKey,
  assetTag,
  formatSymbol,
  iconsPack,
  mono,
  ...props
}: IconComponentProps & { iconsPack?: Record<string, string> }) => {
  const { iconKey, iconPathToRepo } = getIconData({
    symbol,
    chainId,
    walletKey,
    brandKey,
    assetTag,
    formatSymbol,
    mono,
  });

  if (iconsPack) {
    return (
      <StaticIcon
        iconKey={iconKey}
        iconsPack={iconsPack}
        githubSrc={iconPathToRepo}
        {...props}
      />
    );
  }
  return (
    <DynamicIcon iconKey={iconKey} githubSrc={iconPathToRepo} {...props} />
  );
};
