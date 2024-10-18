"use client";

import React from "react";

import { getBrandIconNameAndPath, IconComponentBaseProps } from "../utils";
import { DynamicV2Icon } from "./DynamicV2/DynamicV2";

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
