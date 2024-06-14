export enum TokenTag {
  AToken = "A",
  StataToken = "Stata",
}

export interface AssetIconProps {
  symbol: string;
  variant?: "full" | "mono";
  tokenTag?: TokenTag;
  marketPrefix?: string;
}