"use client";

import { AssetTag, IconVariant } from "@bgd-labs/react-web3-icons/dist/utils";
import { useState } from "react";

import { IconCard } from "@/components/IconCard";
import { Web3Icon } from "@/components/Web3Icon";
import { githubIconsPath } from "@/utils/constants";

import { IconInfoIcons } from "../../../../src/scripts/types";

export const AssetIconCard = ({
  name,
  symbol,
  icons,
  chainId,
  chainName,
  assetTag,
}: {
  name: string;
  symbol: string;
  icons: IconInfoIcons;
  chainId?: number;
  chainName?: string;
  assetTag?: AssetTag;
}) => {
  const [variant, setVariant] = useState(IconVariant.Full);
  const iconPath = assetTag
    ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      icons[
        assetTag === AssetTag.AToken
          ? "aToken"
          : assetTag === AssetTag.StataToken
            ? "stataToken"
            : "aToken"
      ][variant]
    : icons[variant];

  const Icon = () => (
    <Web3Icon asset={{ symbol, variant, tokenTag: assetTag }} />
  );

  return (
    <IconCard
      svgPath={`${githubIconsPath}${iconPath}`}
      name={`${name}${chainName ? `(${chainName})` : ""}`}
      subName={`${assetTag ? assetTag : ""}${symbol}${chainId ? `(${chainId})` : ""}`}
      fileName={`${assetTag ? assetTag : ""}${symbol}${variant === IconVariant.Full ? "" : variant}`}
      setActiveType={setVariant}
      activeType={variant}
    >
      <Icon />
    </IconCard>
  );
};
