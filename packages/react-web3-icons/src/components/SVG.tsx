"use client";

import loadable from "@loadable/component";
import React, { ComponentProps } from "react";

const Image = ({
  svgCode,
  ...props
}: { svgCode: string } & ComponentProps<"img">) => {
  return (
    <img
      {...props}
      draggable={false}
      onDragStart={(e) => e.preventDefault()}
      src={`data:image/svg+xml;base64,${btoa(svgCode)}`}
      style={{ outline: "none !important", pointerEvents: "none" }}
      alt={props.alt}
    />
  );
};

/**
 * Wrapper for get svg image from svg code
 */
export const SVG = ({
  svgCode,
  loader,
  ...props
}: {
  svgCode: string | undefined;
  loader?: React.JSX.Element;
} & ComponentProps<"img">) => {
  if (!svgCode) {
    const Icon = loadable(
      async () => {
        const svgCode = await import("../icons/full/build/icon-unknown.icon");
        return {
          default: () => (
            <Image svgCode={svgCode.iconUnknown.data} {...props} />
          ),
        };
      },
      {
        fallback: loader,
        ssr: true,
      },
    );
    return <Icon />;
  }
  return <Image svgCode={svgCode} {...props} />;
};
