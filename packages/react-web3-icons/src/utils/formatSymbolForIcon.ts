/**
 * Maps onchain symbols to different symbols.
 * This is useful when you want to explode symbols via _ to render multiple symbols or when the symbol has a bridge prefix or suffix.
 */
const SYMBOLS_MAP: Record<string, string> = {
  miMATIC: "MAI",
  BTCB: "BTC",
  "BTC.b": "BTC",
  fUSDT: "USDT",
  "G-UNI": "GUNI",
  "UNI-V2": "UNI",
  // harmony
  "1DAI": "DAI",
  "1USDC": "USDC",
  "1USDT": "USDT",
  "1AAVE": "AAVE",
  "1ETH": "ETH",
  "1WBTC": "WBTC",
  // old aave amm market symbols
  BPTBALWETH: "BPT_BAL_WETH",
  BPTWBTCWETH: "BPT_WBTC_WETH",
  UNIAAVEWETH: "UNI_AAVE_WETH",
  UNIBATWETH: "UNI_BAT_WETH",
  UNICRVWETH: "UNI_CRV_WETH",
  UNIDAIUSDC: "UNI_DAI_USDC",
  UNIDAIWETH: "UNI_DAI_WETH",
  UNILINKWETH: "UNI_LINK_WETH",
  UNIMKRWETH: "UNI_MKR_WETH",
  UNIRENWETH: "UNI_REN_WETH",
  UNISNXWETH: "UNI_SNX_WETH",
  UNIUNIWETH: "UNI_UNI_WETH",
  UNIUSDCWETH: "UNI_USDC_WETH",
  UNIWBTCUSDC: "UNI_WBTC_USDC",
  UNIWBTCWETH: "UNI_WBTC_WETH",
  UNIYFIWETH: "UNI_YFI_WETH",
} as const;

/**
 * Removes the marketPrefix from a symbol
 * @param symbol
 * @param prefix
 */
export function unPrefixSymbol(symbol: string, prefix: string) {
  return symbol
    .toUpperCase()
    .replace(RegExp(`^(${prefix[0]}?${prefix.slice(1)})`), "");
}

/**
 * Format symbol for get icon
 * @param symbol
 * @param marketPrefix
 * @param symbolsMap
 */
export function formatSymbolForIcon({
  symbol,
  marketPrefix,
  symbolsMap,
}: {
  symbol: string;
  marketPrefix?: string;
  symbolsMap?: Record<string, string>;
}) {
  if (/\.e/.test(symbol)) return symbol.replace(".e", "").toLowerCase();
  if (/m\./.test(symbol)) return symbol.replace("m.", "").toLowerCase();
  if (marketPrefix)
    return unPrefixSymbol(
      (symbolsMap || SYMBOLS_MAP)[symbol] || symbol,
      marketPrefix,
    ).toLowerCase();
  return ((symbolsMap || SYMBOLS_MAP)[symbol] || symbol).toLowerCase();
}
