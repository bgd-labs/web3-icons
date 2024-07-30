"use client";

import {
  IconInfoIcons,
  IconVariant,
} from "@bgd-labs/react-web3-icons/dist/utils";
import { useState } from "react";

import { IconCard } from "@/components/IconCard";
import { ChainIcon } from "@/components/Web3Icons/ChainIcon";
import { githubIconsPath } from "@/utils/constants";

export const ChainIconCard = ({
  name,
  chainId,
  icons,
}: {
  name: string;
  chainId: number;
  icons: IconInfoIcons;
}) => {
  const [variant, setVariant] = useState(IconVariant.Full);
  return (
    <IconCard
      svgPath={`${githubIconsPath}${icons[variant]}`}
      name={name}
      subName={chainId.toString()}
      fileName={name}
      setActiveType={setVariant}
      activeType={variant}
    >
      <ChainIcon chainId={chainId} mono={variant === IconVariant.Mono} />
    </IconCard>
  );
};
