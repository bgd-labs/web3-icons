"use client";

import { WalletIcon as WI } from "@bgd-labs/react-web3-icons";
import { ExternalComponentBaseProps } from "@bgd-labs/react-web3-icons/dist/utils/index";

import { cn } from "@/utils/cn";

interface WalletIconProps extends ExternalComponentBaseProps {
  walletName: string;
}
/**
 * Renders a wallet icon specified by walletName.
 */
export const WalletIcon = ({
  walletName,
  className,
  ...props
}: WalletIconProps) => {
  return (
    <WI
      walletName={walletName}
      className={cn("size-[70px]", className)}
      loader={
        <div
          className={cn(
            "size-[70px] animate-pulse rounded-full bg-brand-300",
            className,
          )}
        />
      }
      {...props}
    />
  );
};
