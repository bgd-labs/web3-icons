"use client";

import { DynamicIcon } from "@bgd-labs/react-web3-icons";
import {
  ChainType,
  getChainIconPath,
} from "@bgd-labs/react-web3-icons/dist/utils";

/**
 * Renders a chain icon specified by chain id.
 */
export const ChainIcon = ({ ...props }: Pick<ChainType, "chainId">) => {
  const iconPath = getChainIconPath(props);
  return (
    <DynamicIcon
      iconPath={iconPath}
      dynamicComponent={() =>
        import("@bgd-labs/react-web3-icons/dist/components/chains/index.cjs")
      }
      loadingComponent={<div className="size-11 animate-pulse bg-brand-300" />}
    />
  );
};
