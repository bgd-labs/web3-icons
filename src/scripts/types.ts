export interface WriteQueueItem {
  filePath: string;
  content: string;
}

export enum IconType {
  asset = "asset",
  chain = "chain",
}

export type IconMetaData = {
  type: IconType[];
  chainName?: string;
  chainId?: number;
  symbol?: string;
  name?: string;
  symbolAliases?: string[];
  variations?: string[];
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
  icons: IconInfoIcons;
  symbol?: string;
  name?: string;
  symbolAliases?: string[];
  variations?: string[];
};

export type ChainType = {
  name: string;
  chainId: number;
};
