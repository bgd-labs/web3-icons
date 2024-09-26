"use client";

import { BrandIcon as BI } from "@bgd-labs/react-web3-icons";
import { ExternalComponentBaseProps } from "@bgd-labs/react-web3-icons/dist/utils/index";

import { cn } from "@/utils/cn";

interface BrandIconProps extends ExternalComponentBaseProps {
  addressOrName: string;
}
/**
 * Renders a wallet icon specified by walletName.
 */
export const BrandIcon = ({
  addressOrName,
  className,
  ...props
}: BrandIconProps) => {
  return (
    <BI
      addressOrName={addressOrName}
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
