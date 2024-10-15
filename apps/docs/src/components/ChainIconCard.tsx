"use client";

import { StaticIcon } from "@bgd-labs/react-web3-icons";
import { githubIconsPath } from "@bgd-labs/react-web3-icons/dist/constants";
import { chainsIconsPack } from "@bgd-labs/react-web3-icons/dist/iconsPacks/chainsIconsPack";
import { IconVariant } from "@bgd-labs/react-web3-icons/dist/utils";
import { useState } from "react";

import { IconCard, IconLoader } from "@/components/IconCard";

import { IconInfoIcons } from "../../../../src/scripts/types";

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
      svgPath={`${githubIconsPath}/${icons[variant]}`}
      name={name}
      subName={chainId.toString()}
      fileName={name}
      setActiveType={setVariant}
      activeType={variant}
    >
      <StaticIcon
        className="size-[70px]"
        chainId={chainId}
        mono={variant === IconVariant.Mono}
        loader={<IconLoader />}
        iconsPack={chainsIconsPack}
      />
    </IconCard>
  );
};
