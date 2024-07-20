"use client";

import { IconVariant } from "@bgd-labs/react-web3-icons/dist/utils";
import { useState } from "react";

import { IconCard } from "@/components/IconCard";
import { Web3Icon } from "@/components/Web3Icon";
import { githubIconsPath } from "@/utils/constants";

export const WalletIconCard = ({
  name,
  iconPath,
}: {
  name: string;
  iconPath: string;
}) => {
  const [variant, setVariant] = useState(IconVariant.Full);
  const Icon = () => <Web3Icon wallet={{ name, variant }} />;
  return (
    <IconCard
      svgPath={`${githubIconsPath}${iconPath}`}
      name={name}
      subName={""}
      fileName={`${githubIconsPath}${iconPath}`}
      setActiveType={setVariant}
      activeType={variant}
    >
      <Icon />
    </IconCard>
  );
};
