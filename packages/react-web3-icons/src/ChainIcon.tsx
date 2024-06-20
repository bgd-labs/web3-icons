"use client";

import { ChainType } from "./types";
import { getChainName } from "./utils";
import { capitalize } from "./utils/capitalize";

/**
 * Renders a chain icon specified by chainId.
 */
export const ChainIcon = ({ chainId }: Pick<ChainType, "chainId">) => {
  const chainName = getChainName({ chainId });
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const Icon = require(
      `./components/chains/Icon${capitalize(chainName.replace(/\s/g, "").toLowerCase())}`,
    )?.default;
    return <Icon />;
  } catch (e) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const UnknownIcon = require(`./components/IconUnknownFull`).default;
    return <UnknownIcon />;
  }
};
