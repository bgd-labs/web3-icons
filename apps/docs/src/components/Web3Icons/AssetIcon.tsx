import { AssetIcon as AI } from "@bgd-labs/react-web3-icons";
import {
  AssetIconProps,
  ExternalComponentBaseProps,
} from "@bgd-labs/react-web3-icons/dist/utils";

import { cn } from "@/utils/cn";

/**
 * Renders an asset icon specified by symbol.
 */
export const AssetIcon = ({
  symbol,
  className,
  ...props
}: AssetIconProps & ExternalComponentBaseProps) => {
  return (
    <AI
      symbol={symbol}
      width={70}
      height={70}
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
