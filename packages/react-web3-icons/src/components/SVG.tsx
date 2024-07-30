"use client";

import React, { ComponentProps } from "react";

/**
 * Wrapper for get svg image from svg code
 */
export const SVG = ({
  svgCode,
  ...props
}: {
  svgCode: string | undefined;
} & ComponentProps<"img">) => {
  return (
    <img
      src={svgCode ? `data:image/svg+xml;base64,${btoa(svgCode)}` : ""}
      alt={props.alt}
      {...props}
    />
  );
};
