"use client";

import { DynamicIcon } from "@bgd-labs/react-web3-icons";
import {
  getWalletIconNameAndPath,
  WalletType,
} from "@bgd-labs/react-web3-icons/dist/utils";

/**
 * Renders a chain icon specified by chain id.
 */
export const WalletIcon = ({
  ...props
}: Pick<WalletType, "name" | "variant">) => {
  const { iconName, iconPathToRepo } = getWalletIconNameAndPath(props);
  return (
    <DynamicIcon
      iconPath={iconPathToRepo}
      iconName={iconName}
      dynamicComponent={() =>
        import("@bgd-labs/react-web3-icons/dist/components/wallets/index.cjs")
      }
      loadingComponent={
        <div className="size-11 animate-pulse rounded-full bg-brand-300" />
      }
    />
  );
};
