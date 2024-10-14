import React, { ComponentProps } from "react";

export enum IconVariant {
  Full = "full",
  Mono = "mono",
}

export type IconComponentBaseProps = {
  iconKey: number | string;
  iconType: "asset" | "chain" | "wallet" | "brand";
  assetTag?: "a" | "stata" | "stk";
  formatSymbol?: (symbol: string) => string;
  mono?: boolean;
  loader?: React.JSX.Element;
} & ComponentProps<"img">;
