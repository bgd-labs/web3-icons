import React from "react";

import { getIconData, IconComponentProps } from "../utils";
import { IconPlaceholderProps } from "./Base/IconPlaceholder";
import { DynamicIcon } from "./DynamicIcon/DynamicIcon";
import { StaticIcon } from "./StaticIcon";

export type Web3IconProps = IconComponentProps & {
  iconsPack?: Record<string, string>;
  fallbackProps?: Omit<IconPlaceholderProps, "value">;
};

export const Web3Icon = ({
  symbol,
  chainId,
  walletKey,
  brandKey,
  assetTag,
  formatSymbol,
  iconsPack,
  mono,
  ...props
}: Web3IconProps) => {
  const { iconKey, iconPathToRepo } = getIconData({
    symbol,
    chainId,
    walletKey,
    brandKey,
    assetTag,
    formatSymbol,
    mono,
  });
  const iconIdentifier = String(
    symbol || chainId || walletKey || brandKey || "?"
  );
  const abbreviation = iconIdentifier.charAt(0).toUpperCase();

  if (iconsPack) {
    return (
      <StaticIcon
        abbreviation={abbreviation}
        iconKey={iconKey}
        iconsPack={iconsPack}
        githubSrc={iconPathToRepo}
        mono={mono}
        {...props}
      />
    );
  }
  return (
    <DynamicIcon
      abbreviation={abbreviation}
      iconKey={iconKey}
      githubSrc={iconPathToRepo}
      mono={mono}
      {...props}
    />
  );
};
