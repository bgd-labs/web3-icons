"use client";

import React from "react";

import { getBrandIconNameAndPath, IconComponentBaseProps } from "../utils";
import { DynamicIcon } from "./DynamicIcon/DynamicIcon";

/**
 * Get brand icon dynamically by brand name or pool address
 */
export const BrandIcon = ({
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
    <DynamicIcon
      iconKey={iconKey}
      githubSrc={iconPathToRepo}
      mono={mono}
      loader={loader}
      {...props}
    />
  );
};
