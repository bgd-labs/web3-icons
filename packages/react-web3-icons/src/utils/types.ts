import React, { ComponentProps } from "react";

import { IconMetaData } from "../../../../src/scripts/types";

export type IconStyle = {
  mono: string;
  full: string;
};

export type IconWithMetaType = IconStyle & {
  meta: IconMetaData;
};

export type IconInfoIcons = IconStyle & {
  aToken?: IconStyle;
  stataToken?: IconStyle;
};

export enum AssetTag {
  AToken = "a",
  StataToken = "stata",
}

export enum IconVariant {
  Full = "full",
  Mono = "mono",
}

export interface AssetIconProps {
  symbol: string;
  mono?: boolean;
  assetTag?: AssetTag;
  formatSymbol?: (symbol: string) => string;
}

export type ChainType = {
  name?: string;
  chainId: number;
};

export type WalletType = {
  walletName: string;
  identityFlag?: string;
};

export type IconComponentBaseProps = {
  mono?: boolean;
  loader?: React.JSX.Element;
} & ComponentProps<"img">;

export type ExternalComponentBaseProps = {
  mono?: boolean;
  className?: ComponentProps<"div">["className"];
};
