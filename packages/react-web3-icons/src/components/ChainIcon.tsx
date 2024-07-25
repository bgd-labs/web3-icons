"use client";

import React from "react";

import { getChainIconNameAndPath, IconComponentBaseProps } from "../utils";
import { DynamicIcon } from "./DynamicIcon";

/**
 * Get chain icon dynamically by chain id
 */
export const ChainIcon = ({
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
    <DynamicIcon
      iconKey={iconKey}
      githubSrc={iconPathToRepo}
      mono={mono}
      loader={loader}
      {...props}
    />
  );
};
