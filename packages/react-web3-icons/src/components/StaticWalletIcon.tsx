"use client";

import React from "react";

import { walletsIconsPack } from "../iconsPacks/walletsIconsPack";
import { getWalletIconNameAndPath, IconComponentBaseProps } from "../utils";
import { StaticIcon } from "./StaticIcon";

/**
 * Get wallet icon from icons pack by wallet name
 */
export const StaticWalletIcon = ({
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
    <StaticIcon
      iconKey={iconKey}
      githubSrc={iconPathToRepo}
      mono={mono}
      loader={loader}
      iconsPack={walletsIconsPack}
      {...props}
    />
  );
};
