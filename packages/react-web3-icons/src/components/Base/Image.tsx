import React, { ComponentProps } from "react";

export const Image = ({
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
