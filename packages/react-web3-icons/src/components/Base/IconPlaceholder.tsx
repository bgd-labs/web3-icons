import React, { DetailedHTMLProps, HTMLAttributes } from "react";

type IconPlaceholderProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  value: string;
};

export const IconPlaceholder = ({
  value,
  className,
  ...divProps
}: IconPlaceholderProps) => {
  const classes = [
    "flex",
    "justify-center",
    "items-center",
    "size-[32px]",
    "rounded-full",
    "bg-black",
    "text-white",
    className,
  ].filter((cl) => cl !== undefined);
  return (
    <span {...divProps} className={classes.join(" ")}>
      {value}
    </span>
  );
};
