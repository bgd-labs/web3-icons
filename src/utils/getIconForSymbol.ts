const SYMBOL_SYMBOL_MAP = {
  miMATIC: 'MAI',
  BTCB: 'BTC',
  'BTC.b': 'BTC',
  fUSDT: 'USDT',
} as const;

export function getIconForSymbol(symbol) {
  if (/\.e/.test(symbol)) return symbol.replace('.e', '');
  if (/m\./.test(symbol)) return symbol.replace('m.', '');
  return SYMBOL_SYMBOL_MAP[symbol] || symbol;
}