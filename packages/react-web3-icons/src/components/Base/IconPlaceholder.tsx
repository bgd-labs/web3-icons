import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export type IconPlaceholderProps = DetailedHTMLProps<
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
  ]
    .filter((cl) => cl !== undefined)
    .join(" ");
  return (
    <span {...divProps} className={twMerge(classes)}>
      {value}
    </span>
  );
};
