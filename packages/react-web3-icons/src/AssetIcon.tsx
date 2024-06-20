"use client";

import React, { Suspense } from "react";

import { AssetIconProps, TokenVariant } from "./types";
import { formatSymbolForIcon } from "./utils";
import { capitalize } from "./utils/capitalize";

/**
 * Renders a tokenIcon specified by symbol.
 */
export const AssetIcon = ({
  symbol,
  variant = TokenVariant.Full,
  tokenTag,
  formatSymbol,
}: AssetIconProps) => {
  const formattedSymbol = formatSymbol
    ? formatSymbol(symbol)
    : formatSymbolForIcon({ symbol });

  try {
    const Icon = React.lazy(
      () =>
        import(
          `./components/Icon${tokenTag ? tokenTag : ""}${tokenTag ? formattedSymbol : capitalize(formattedSymbol)}${capitalize(variant)}`
        ),
    );
    return (
      // TODO: need think about fallback
      <Suspense fallback={<div />}>
        <Icon />
      </Suspense>
    );
  } catch (e) {
    const UnknownIcon = React.lazy(
      () => import(`./components/IconUnknown${capitalize(variant)}`),
    );
    return (
      // TODO: need think about fallback
      <Suspense fallback={<div />}>
        <UnknownIcon />
      </Suspense>
    );
  }
};
