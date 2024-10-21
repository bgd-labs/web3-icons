"use client";

import React from "react";

import { getWalletIconNameAndPath, IconComponentBaseProps } from "../utils";
import { DynamicIcon } from "./DynamicIcon/DynamicIcon";

/**
 * Get wallet icon dynamically by wallet name
 */
export const WalletIcon = ({
  walletName,
  mono,
  loader,
  ...props
}: {
  walletName: string;
} & IconComponentBaseProps) => {
  const { iconKey, iconPathToRepo } = getWalletIconNameAndPath({
    walletName,
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
