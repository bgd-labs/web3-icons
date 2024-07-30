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
} & ComponentProps<"svg">) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <image
        className={props.className}
        width={props.width}
        height={props.height}
        href={svgCode ? `data:image/svg+xml;base64,${btoa(svgCode)}` : ""}
      />
    </svg>
  );
};
