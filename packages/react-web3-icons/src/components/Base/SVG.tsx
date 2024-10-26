"use client";

import React, { ComponentProps } from "react";

import { Image } from "./Image";
import { UnknownIcon } from "./UnknownIcon";

type SVGProps = {
  svgCode?: string;
} & ComponentProps<"img">;

/**
 * Wrapper for get svg image from svg code
 */
export const SVG = ({ svgCode, ...props }: SVGProps) => {
  if (!svgCode) {
    return <UnknownIcon />;
  }
  return <Image svgCode={svgCode} {...props} />;
};
