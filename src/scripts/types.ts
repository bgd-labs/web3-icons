export interface WriteQueueItem {
  filePath: string;
  content: string;
}

export enum IconType {
  asset = "asset",
  chain = "chain",
  wallet = "wallet",
  brand = "brand",
}

export type IconMetaData = {
  type: IconType[];
  name?: string;
  aliases?: string[];
  // for chain
  chainName?: string;
  chainId?: number;
  // for asset
  symbol?: string;
  variations?: string[];
  // for wallet
  identityFlag?: string; // window.ethereum[identityFlag]
  walletName?: string;
  // for brand
  brandName?: string;
};

export type IconStyle = {
  mono: string;
  full: string;
};

export type IconWithMetaType = IconStyle & {
  meta: IconMetaData;
};

export enum IconFormat {
  aToken = "aToken",
  stataToken = "stataToken",
  stkToken = "stkToken",
}

export enum TokenTag {
  aToken = "a",
  stataToken = "stata",
  stkToken = "stk",
}

export type IconInfoIcons = IconStyle & {
  [IconFormat.aToken]?: IconStyle;
  [IconFormat.stataToken]?: IconStyle;
  [IconFormat.stkToken]?: IconStyle;
};

export type IconInfo = IconMetaData & {
  icons: IconInfoIcons;
};

export type ChainType = {
  name: string;
  chainId: number;
};

export type WalletType = {
  name: string;
  identityFlag?: string;
};
