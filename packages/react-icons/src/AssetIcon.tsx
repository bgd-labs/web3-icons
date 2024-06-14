'use client'

import { formatSymbolForIcon } from "../../../src/utils/formatSymbolForIcon";
import * as icons from "./components";
import { AssetIconProps, TokenTag } from './types';

const capitalize = (word: string) =>
  word.charAt(0).toUpperCase() + word.slice(1);

/**
 * Renders a tokenIcon specified by symbol.
 */
const SingleAssetIcon = ({
  symbol,
  variant = "full",
  tokenTag,
}: AssetIconProps) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const UnknownIcon = icons[`IconUnknown${capitalize(variant)}`];
  const Icon =
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    icons[
      `Icon${tokenTag ? tokenTag : ""}${tokenTag ? symbol : capitalize(symbol)}${capitalize(variant)}`
    ];

  if (!Icon) return <UnknownIcon style={{ width: '100%', height: '100%' }} />;
  return <Icon style={{ width: '100%', height: '100%' }} />;
};

interface MultiAssetsIconProps {
  symbols: string[];
  badgeSymbol?: string;
  variant?: "full" | "mono";
  tokenTag?: TokenTag;
}

const MultiAssetsIcon = ({ symbols, badgeSymbol, variant, tokenTag }: MultiAssetsIconProps) => {
  if (!badgeSymbol)
    return (
      <div style={{ display: "inline-flex", position: "relative" }}>
        {symbols.map((symbol, ix) => (
          <div style={{ marginLeft: ix === 0 ? 0 : `calc(-1 * 0.5em)` }}>
            <SingleAssetIcon key={symbol} symbol={symbol} variant={variant} tokenTag={tokenTag} />
          </div>
        ))}
      </div>
    );
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          width: '1.5em',
          height: '1.5em',
          marginLeft: '-0.5em',
          marginBottom: '-1em',
          position: "relative",
          zIndex: 2,
          borderRadius: '50%',
          border: '1px solid black'
        }}
      >
        <SingleAssetIcon symbol={badgeSymbol} variant={variant} tokenTag={tokenTag}  />
      </div>

      <div style={{ display: "flex", alignItems: "center", position: 'relative', zIndex: 1 }}>
        {symbols.map((symbol, ix) => (
          <div
            key={symbol}
            style={{
              borderRadius: '50%',
              border: '1px solid black',
              marginLeft: ix === 0 ? 0 : "calc(-1 * 0.5em)"
          }}
          >
            <SingleAssetIcon symbol={symbol} variant={variant} tokenTag={tokenTag}  />
          </div>
        ))}
      </div>
    </div>
  );
};

export function AssetIcon({
  symbol,
  marketPrefix,
  ...rest
}: AssetIconProps) {
  const symbolChunks = formatSymbolForIcon(symbol, marketPrefix).split("_");

  if (symbolChunks.length > 1) {
    const [badge, ...symbols] = symbolChunks;
    return <MultiAssetsIcon {...rest} symbols={symbols} badgeSymbol={badge} />;
  }

  return <SingleAssetIcon symbol={symbolChunks[0]} {...rest} />;
}
