import { IconMetaData } from "../../../../src/scripts/types";

export enum Web3IconType {
  wallet = "wallet",
  chain = "chain",
  asset = "asset",
}

export type IconInfo<T> = {
  type: Web3IconType;
  info: T;
};

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
  AToken = "A",
  StataToken = "Stata",
}

export enum IconVariant {
  Full = "full",
  Mono = "mono",
}

export interface AssetIconProps {
  symbol: string;
  variant?: IconVariant;
  tokenTag?: AssetTag;
  formatSymbol?: (symbol: string) => string;
}

export type ChainType = {
  name: string;
  chainId: number;
  variant?: IconVariant;
};

export type WalletType = {
  name: string;
  identityFlag?: string;
  variant?: IconVariant;
};

export type ComponentsFallback = {
  path: () => Promise<any>;
  name: string;
};
