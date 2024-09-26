"use client";

import React from "react";

import { brandsIconsPack } from "../iconsPacks/brandsIconsPack";
import { getBrandIconNameAndPath, IconComponentBaseProps } from "../utils";
import { StaticIcon } from "./StaticIcon";

/**
 * Get brand icon from icons pack by brand name or pool address
 */
export const StaticBrandIcon = ({
  addressOrName,
  mono,
  loader,
  ...props
}: { addressOrName: string } & IconComponentBaseProps) => {
  const { iconKey, iconPathToRepo } = getBrandIconNameAndPath({
    key: addressOrName,
    mono,
  });
  return (
    <StaticIcon
      iconKey={iconKey}
      githubSrc={iconPathToRepo}
      mono={mono}
      loader={loader}
      iconsPack={brandsIconsPack}
      {...props}
    />
  );
};
