"use client";

import { AssetTag, IconVariant } from "@bgd-labs/react-web3-icons/dist/utils";
import { useState } from "react";

import { IconCard } from "@/components/IconCard";
import { AssetIcon } from "@/components/Web3Icons/AssetIcon";
import { githubIconsPath } from "@/utils/constants";

import { IconInfoIcons } from "../../../../src/scripts/types";

export const AssetIconCard = ({
  name,
  symbol,
  icons,
  chainId,
  chainName,
}: {
  name: string;
  symbol: string;
  icons: IconInfoIcons;
  chainId?: number;
  chainName?: string;
}) => {
  const [activeTag, setActiveTag] = useState<AssetTag | undefined>(undefined);
  const [activeType, setActiveType] = useState(IconVariant.Full);

  const iconPath = activeTag
    ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      icons[
        activeTag === AssetTag.AToken
          ? "aToken"
          : activeTag === AssetTag.StataToken
            ? "stataToken"
            : "aToken"
      ][activeType]
    : icons[activeType];

  const Icon = () => (
    <AssetIcon symbol={symbol} variant={activeType} tokenTag={activeTag} />
  );

  return (
    <IconCard
      svgPath={`${githubIconsPath}${iconPath}`}
      name={`${name}${chainName ? `(${chainName})` : ""}`}
      subName={`${symbol}${chainId ? `(${chainId})` : ""}`}
      fileName={`${activeTag ? activeTag : ""}${symbol}${activeType === IconVariant.Full ? "" : activeType}`}
      setActiveTag={setActiveTag}
      setActiveType={setActiveType}
      activeType={activeType}
      activeTag={activeTag}
      withTags
    >
      <Icon />
    </IconCard>
  );
};
