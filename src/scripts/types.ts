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
  // for chain
  chainName?: string;
  chainId?: number;
  // for asset
  symbol?: string;
  symbolAliases?: string[];
  variations?: string[];
  // for wallet
  identityFlag?: string; // window.ethereum[identityFlag]
  walletName?: string;
  // for brand
  brandName?: string;
  addressAliases?: string[];
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
