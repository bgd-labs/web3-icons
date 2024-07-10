"use client";

import { IconVariant } from "@bgd-labs/react-web3-icons/dist/utils";
import { useState } from "react";

import { IconCard } from "@/components/IconCard";
import { ChainIcon } from "@/components/Web3Icons/ChainIcon";
import { githubIconsPath } from "@/utils/constants";

export const ChainIconCard = ({
  name,
  chainId,
  iconPath,
}: {
  name: string;
  chainId: number;
  iconPath: string;
}) => {
  const [activeType, setActiveType] = useState(IconVariant.Full);
  const Icon = () => <ChainIcon chainId={chainId} variant={activeType} />;

  return (
    <IconCard
      svgPath={`${githubIconsPath}${iconPath}`}
      name={name}
      subName={chainId.toString()}
      fileName={`${githubIconsPath}${iconPath}`}
      setActiveType={setActiveType}
      activeType={activeType}
      withTags
    >
      <Icon />
    </IconCard>
  );
};
