import React, { DetailedHTMLProps, HTMLAttributes } from "react";

type IconPlaceholderProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  value: string;
  width?: number | string;
  height?: number | string;
};

export const IconPlaceholder = ({
  value,
  width = 32,
  height = 32,
  style,
  ...divProps
}: IconPlaceholderProps) => {
  return (
    <span
      {...divProps}
      style={{
        width,
        height,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
        color: "#fff",
        ...style,
      }}
    >
      {value}
    </span>
  );
};
