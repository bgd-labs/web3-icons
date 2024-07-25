"use client";

import {
  IconInfoIcons,
  IconVariant,
} from "@bgd-labs/react-web3-icons/dist/utils";
import { useState } from "react";

import { IconCard } from "@/components/IconCard";
import { WalletIcon } from "@/components/Web3Icons/WalletIcon";
import { githubIconsPath } from "@/utils/constants";

export const WalletIconCard = ({
  name,
  icons,
}: {
  name: string;
  icons: IconInfoIcons;
}) => {
  const [variant, setVariant] = useState(IconVariant.Full);
  return (
    <IconCard
      svgPath={`${githubIconsPath}${icons[variant]}`}
      name={name}
      subName={""}
      fileName={name}
      setActiveType={setVariant}
      activeType={variant}
    >
      <WalletIcon walletName={name} mono={variant === IconVariant.Mono} />
    </IconCard>
  );
};
