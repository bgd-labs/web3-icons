"use client";

import React from "react";

import { getChainIconNameAndPath, IconComponentBaseProps } from "../utils";
import { DynamicV2Icon } from "./DynamicV2/DynamicV2";

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
