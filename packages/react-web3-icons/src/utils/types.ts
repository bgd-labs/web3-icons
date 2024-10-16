import React, { ComponentProps } from "react";

export enum IconVariant {
  Full = "full",
  Mono = "mono",
}

export type BaseIconComponentProps = {
  iconKey: string;
  githubSrc: string;
};

export type IconComponentBaseProps = {
  mono?: boolean;
  loader?: React.JSX.Element;
} & ComponentProps<"img">;

export type IconComponentProps = {
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
} & IconComponentBaseProps;
