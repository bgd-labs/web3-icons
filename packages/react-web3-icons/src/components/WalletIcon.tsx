"use client";

import React from "react";

import { getWalletIconNameAndPath, IconComponentBaseProps } from "../utils";
import { DynamicV2Icon } from "./DynamicV2/DynamicV2";

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
