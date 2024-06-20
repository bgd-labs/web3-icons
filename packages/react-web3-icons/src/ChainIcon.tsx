"use client";

import React, { Suspense } from "react";

import { ChainType } from "./types";
import { getChainName } from "./utils";
import { capitalize } from "./utils/capitalize";

/**
 * Renders a chain icon specified by chainId.
 */
export const ChainIcon = ({ chainId }: Pick<ChainType, "chainId">) => {
  const chainName = getChainName({ chainId });
  try {
    const Icon = React.lazy(
      () =>
        import(
          `./components/chains/Icon${capitalize(chainName.replace(/\s/g, "").toLowerCase())}`
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
      () => import(`./components/IconUnknownFull`),
    );
    return (
      // TODO: need think about fallback
      <Suspense fallback={<div />}>
        <UnknownIcon />
      </Suspense>
    );
  }
};
