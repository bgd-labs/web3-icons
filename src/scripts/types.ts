/**
 * The `WalletIdentityFlag` is a property on an etherium provider
 */
export enum WalletIdentityFlag {
  Binance = "bbcSignTx",
  Bitpie = "isBitpie",
  BlockWallet = "isBlockWallet",
  Coinbase = "isToshi",
  CoinbaseExtension = "isCoinbaseWallet",
  Dcent = "isDcentWallet",
  Exodus = "isExodus",
  Frontier = "isFrontier",
  Frame = "isFrame",
  HuobiWallet = "isHbWallet",
  HyperPay = "isHyperPay",
  ImToken = "isImToken",
  Liquality = "isLiquality",
  MeetOne = "wallet",
  MyKey = "isMYKEY",
  OwnBit = "isOwnbit",
  Status = "isStatus",
  Trust = "isTrust",
  TokenPocket = "isTokenPocket",
  TP = "isTp",
  WalletIo = "isWalletIO",
  XDEFI = "isXDEFI",
  OneInch = "isOneInchIOSWallet",
  Tokenary = "isTokenary",
  Tally = "isTally",
  BraveWallet = "isBraveWallet",
  Rabby = "isRabby",
  MathWallet = "isMathWallet",
  GameStop = "isGamestop",
  BitKeep = "isBitKeep",
  Sequence = "isSequence",
  Core = "isAvalanche",
  Opera = "isOpera",
  Bitski = "isBitski",
  Enkrypt = "isEnkrypt",
  Phantom = "isPhantom",
  OKXWallet = "isOkxWallet",
  Zeal = "isZeal",
  Zerion = "isZerion",
  Rainbow = "isRainbow",
  SafePal = "isSafePal",
  DeFiWallet = "isDeficonnectProvider",
}

export enum WalletLabel {
  Binance = "Binance Smart Wallet",
  Bitpie = "Bitpie Wallet",
  Bitski = "Bitski Wallet",
  BlockWallet = "Block Wallet",
  Brave = "Brave",
  Coinbase = "Coinbase",
  Dcent = `D'CENT Wallet`,
  Exodus = "Exodus",
  Frame = "Frame",
  Frontier = "Frontier",
  HuobiWallet = "Huobi Wallet",
  HyperPay = "HyperPay",
  ImToken = "imToken",
  Liquality = "Liquality",
  MeetOne = "MeetOne",
  MyKey = "MyKey",
  Opera = "Opera",
  OwnBit = "OwnBit",
  Status = "Status",
  Trust = "Trust Wallet",
  TokenPocket = "TokenPocket",
  TP = "TP Wallet",
  WalletIo = "Wallet.io",
  XDEFI = "XDEFI Wallet",
  OneInch = "1inch",
  Tokenary = "Tokenary Wallet",
  Tally = "Tally Ho Wallet",
  Rabby = "Rabby",
  MathWallet = "MathWallet",
  GameStop = "GameStop Wallet",
  BitKeep = "BitKeep Wallet",
  Sequence = "Sequence",
  Core = "Core Wallet",
  Enkrypt = "Enkrypt",
  Zeal = "Zeal Wallet",
  Phantom = "Phantom",
  OKXWallet = "OKX Wallet",
  Zerion = "Zerion",
  Rainbow = "Rainbow",
  SafePal = "SafePal",
  DeFiWallet = "DeFi Wallet",
}

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
