export interface WriteQueueItem {
  filePath: string;
  content: string;
}

export type IconMetaData = {
  symbol?: string;
  name?: string;
  symbolAliases?: string[];
  variations?: string[];
};

export type IconType = {
  mono: string;
  full: string;
};

export type IconWithMetaType = IconType & {
  meta: IconMetaData;
};

export type IconInfoIcons = IconType & {
  aToken?: IconType;
  stataToken?: IconType;
};

export type IconInfo = {
  icons: IconInfoIcons;
  symbol?: string;
  name?: string;
  symbolAliases?: string[];
  variations?: string[];
};
