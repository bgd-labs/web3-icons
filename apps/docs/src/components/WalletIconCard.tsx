"use client";

import {
  IconInfoIcons,
  IconVariant,
  Web3IconType,
} from "@bgd-labs/react-web3-icons/dist/utils";
import { useState } from "react";

import { IconCard } from "@/components/IconCard";
import { Web3Icon } from "@/components/Web3Icon";
import { githubIconsPath } from "@/utils/constants";

export const WalletIconCard = ({
  name,
  icons,
}: {
  name: string;
  icons: IconInfoIcons;
}) => {
  const [variant, setVariant] = useState(IconVariant.Full);
  const Icon = () => (
    <Web3Icon
      iconInfo={{ type: Web3IconType.wallet, info: { name, variant } }}
    />
  );

  return (
    <IconCard
      svgPath={`${githubIconsPath}${icons[variant]}`}
      name={name}
      subName={""}
      fileName={name}
      setActiveType={setVariant}
      activeType={variant}
    >
      <Icon />
    </IconCard>
  );
};
