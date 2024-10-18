"use client";

import loadable from "@loadable/component";
import React, { ComponentProps } from "react";

type Props = {
  svgCode: string | undefined;
} & ComponentProps<"img">;

export const formatMonoSvgCode = ({
  svgCode,
  mono,
  ...props
}: { mono?: boolean } & Props) => {
  return mono && props.color && svgCode
    ? svgCode.replaceAll("currentColor", props.color)
    : svgCode;
};

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

const Icon = loadable(
  async (props: Omit<Props, "svgCode">) => {
    const svgCode = await import("../icons/full/build/icon-unknown.icon");
    return {
      default: () => <Image svgCode={svgCode.iconUnknown.data} {...props} />,
    };
  },
  {
    ssr: true,
  },
);

/**
 * Wrapper for get svg image from svg code
 */
export const SVG = ({
  svgCode,
  loader,
  ...props
}: { loader?: React.JSX.Element } & Props) => {
  if (!svgCode) {
    // TODO What's the purpose of loading predefined icon dynamically?
    return <Icon fallback={loader} />;
  }
  return <Image svgCode={svgCode} {...props} />;
};
