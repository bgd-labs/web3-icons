export enum TokenTag {
  AToken = "A",
  StataToken = "Stata",
}

export enum TokenVariant {
  Full = "full",
  Mono = "mono",
}

export interface AssetIconProps {
  symbol: string;
  variant?: TokenVariant;
  tokenTag?: TokenTag;
  marketPrefix?: string;
}