"use client";

import { githubIconsPath } from "@bgd-labs/react-web3-icons/dist/constants";
import {
  IconInfoIcons,
  IconVariant,
} from "@bgd-labs/react-web3-icons/dist/utils";
import { useState } from "react";

import { IconCard } from "@/components/IconCard";
import { BrandIcon } from "@/components/Web3Icons/BrandIcon";

export const BrandIconCard = ({
  name,
  icons,
}: {
  name: string;
  icons: IconInfoIcons;
}) => {
  const [variant, setVariant] = useState(IconVariant.Full);
  return (
    <IconCard
      svgPath={`${githubIconsPath}/${icons[variant]}`}
      name={name}
      subName={""}
      fileName={name}
      setActiveType={setVariant}
      activeType={variant}
    >
      <BrandIcon addressOrName={name} mono={variant === IconVariant.Mono} />
    </IconCard>
  );
};
