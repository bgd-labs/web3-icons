import { ChainIcon as CI } from "@bgd-labs/react-web3-icons";
import { ExternalComponentBaseProps } from "@bgd-labs/react-web3-icons/dist/utils";

import { cn } from "@/utils/cn";

interface ChainIconProps extends ExternalComponentBaseProps {
  chainId: number;
}
/**
 * Renders a chain icon specified by chainId.
 */
export const ChainIcon = ({ chainId, className, ...props }: ChainIconProps) => {
  return (
    <CI
      chainId={chainId}
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
