export interface WriteQueueItem {
  filePath: string;
  content: string;
}

export enum IconType {
  asset = "asset",
  chain = "chain",
  wallet = "wallet",
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

export type IconInfo = {
  type: IconType[];
  // for asset
  icons: IconInfoIcons;
  symbol?: string;
  name?: string;
  symbolAliases?: string[];
  variations?: string[];
  // for chain
  chainName?: string;
  chainId?: number;
  // for wallet
  identityFlag?: string;
};

export type ChainType = {
  name: string;
  chainId: number;
};

export type WalletType = {
  name: string;
  identityFlag?: string;
};
