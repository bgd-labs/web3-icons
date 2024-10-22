"use client";

import { Web3Icon } from "@bgd-labs/react-web3-icons";
import { githubIconsPath } from "@bgd-labs/react-web3-icons/dist/constants";
import { brandsIconsPack } from "@bgd-labs/react-web3-icons/dist/iconsPacks/brandsIconsPack";
import { IconVariant } from "@bgd-labs/react-web3-icons/dist/utils";
import { useState } from "react";

import { IconCard, IconLoader } from "@/components/IconCard";

import { IconInfoIcons } from "../../../../src/scripts/types";

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
      <Web3Icon
        className="size-[70px]"
        brandKey={name}
        mono={variant === IconVariant.Mono}
        loader={<IconLoader />}
        iconsPack={brandsIconsPack}
      />
    </IconCard>
  );
};
