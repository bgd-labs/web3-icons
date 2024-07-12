"use client";

import { IconVariant } from "@bgd-labs/react-web3-icons/dist/utils";
import { useState } from "react";

import { IconCard } from "@/components/IconCard";
import { WalletIcon } from "@/components/Web3Icons/WalletIcon";
import { githubIconsPath } from "@/utils/constants";

export const WalletIconCard = ({
  name,
  iconPath,
}: {
  name: string;
  iconPath: string;
}) => {
  const [activeType, setActiveType] = useState(IconVariant.Full);
  const Icon = () => <WalletIcon name={name} variant={activeType} />;

  return (
    <IconCard
      svgPath={`${githubIconsPath}${iconPath}`}
      name={name}
      subName={""}
      fileName={`${githubIconsPath}${iconPath}`}
      setActiveType={setActiveType}
      activeType={activeType}
    >
      <Icon />
    </IconCard>
  );
};
