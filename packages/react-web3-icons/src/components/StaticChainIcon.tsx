"use client";

import React from "react";

import { chainsIconsPack } from "../iconsPacks/chainsIconsPack";
import { getChainIconNameAndPath, IconComponentBaseProps } from "../utils";
import { StaticIcon } from "./StaticIcon";

/**
 * Get chain icon from icons pack by chain id
 */
export const StaticChainIcon = ({
  chainId,
  mono,
  loader,
  ...props
}: {
  chainId: number;
} & IconComponentBaseProps) => {
  const { iconKey, iconPathToRepo } = getChainIconNameAndPath({
    chainId,
    mono,
  });
  return (
    <StaticIcon
      iconKey={iconKey}
      githubSrc={iconPathToRepo}
      mono={mono}
      loader={loader}
      iconsPack={chainsIconsPack}
      {...props}
    />
  );
};
