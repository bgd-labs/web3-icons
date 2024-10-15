import React, { ComponentProps } from "react";

export enum IconVariant {
  Full = "full",
  Mono = "mono",
}

export type IconComponentBaseProps = {
  // for asset
  symbol?: string;
  assetTag?: "a" | "stata" | "stk";
  formatSymbol?: (symbol: string) => string;
  // for chain
  chainId?: number;
  // for wallet
  walletKey?: string;
  // for brand
  brandKey?: string;
  // for all
  mono?: boolean;
  loader?: React.JSX.Element;
} & ComponentProps<"img">;
