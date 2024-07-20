"use client";

import { IconVariant } from "@bgd-labs/react-web3-icons/dist/utils";
import { useState } from "react";

import { IconCard } from "@/components/IconCard";
import { Web3Icon } from "@/components/Web3Icon";
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
  const [variant, setVariant] = useState(IconVariant.Full);
  const Icon = () => <Web3Icon chain={{ chainId, variant }} />;
  return (
    <IconCard
      svgPath={`${githubIconsPath}${iconPath}`}
      name={name}
      subName={chainId.toString()}
      fileName={`${githubIconsPath}${iconPath}`}
      setActiveType={setVariant}
      activeType={variant}
    >
      <Icon />
    </IconCard>
  );
};
