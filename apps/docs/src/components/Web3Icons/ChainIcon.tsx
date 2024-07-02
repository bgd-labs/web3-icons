"use client";

import { DynamicIcon } from "@bgd-labs/react-web3-icons";
import {
  ChainType,
  getChainIconNameAndPath,
  IconVariant,
} from "@bgd-labs/react-web3-icons/dist/utils";

/**
 * Renders a chain icon specified by chain id.
 */
export const ChainIcon = ({
  ...props
}: Pick<ChainType, "chainId"> & { variant?: IconVariant }) => {
  const { iconName, iconPathToRepo } = getChainIconNameAndPath(props);
  return (
    <DynamicIcon
      iconPath={iconPathToRepo}
      iconName={iconName}
      dynamicComponent={() =>
        import("@bgd-labs/react-web3-icons/dist/components/chains/index.cjs")
      }
      loadingComponent={
        <div className="size-11 animate-pulse rounded-full bg-brand-300" />
      }
    />
  );
};
