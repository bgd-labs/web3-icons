"use client";

import { Web3DynamicIcon } from "@bgd-labs/react-web3-icons";
import {
  AssetIconProps,
  ChainType,
  ComponentsFallback,
  getAssetIconNameAndPath,
  getChainIconNameAndPath,
  getWalletIconNameAndPath,
  WalletType,
  Web3IconType,
} from "@bgd-labs/react-web3-icons/dist/utils";
import { ComponentProps } from "react";

import { cn } from "@/utils/cn";

interface Web3IconProps {
  className?: ComponentProps<"div">["className"];
  asset?: AssetIconProps;
  chain?: Pick<ChainType, "chainId" | "variant">;
  wallet?: Pick<WalletType, "name" | "variant">;
}

/**
 * Renders an asset or chain or wallet icon specified by icon type and props.
 */
export const Web3Icon = ({ className, ...props }: Web3IconProps) => {
  let iconPath = undefined;
  let componentsFallback: ComponentsFallback | undefined = undefined;
  if (props[Web3IconType.asset]) {
    const assetInfo = getAssetIconNameAndPath(props[Web3IconType.asset]);
    iconPath = assetInfo.iconPathToRepo;
    componentsFallback = {
      name: assetInfo.iconName,
      path: () =>
        import("@bgd-labs/react-web3-icons/dist/components/index.cjs"),
    };
  } else if (props[Web3IconType.chain]) {
    const chainInfo = getChainIconNameAndPath(props[Web3IconType.chain]);
    iconPath = chainInfo.iconPathToRepo;
    componentsFallback = {
      name: chainInfo.iconName,
      path: () =>
        import("@bgd-labs/react-web3-icons/dist/components/chains/index.cjs"),
    };
  } else if (props[Web3IconType.wallet]) {
    const walletInfo = getWalletIconNameAndPath(props[Web3IconType.wallet]);
    iconPath = walletInfo.iconPathToRepo;
    componentsFallback = {
      name: walletInfo.iconName,
      path: () =>
        import("@bgd-labs/react-web3-icons/dist/components/wallets/index.cjs"),
    };
  }

  if (!iconPath || !componentsFallback) {
    return (
      <div
        className={cn(
          "size-[70px] animate-pulse rounded-full bg-brand-300",
          className,
        )}
      />
    );
  }

  return (
    <Web3DynamicIcon
      className={cn("size-[70px]", className)}
      src={iconPath}
      componentsFallback={componentsFallback}
      loader={
        <div
          className={cn(
            "size-[70px] animate-pulse rounded-full bg-brand-300",
            className,
          )}
        />
      }
    />
  );
};
