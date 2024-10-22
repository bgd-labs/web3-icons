"use client";

import { Web3Icon } from "@bgd-labs/react-web3-icons";
import { githubIconsPath } from "@bgd-labs/react-web3-icons/dist/constants";
import { IconVariant } from "@bgd-labs/react-web3-icons/dist/utils";
import { useState } from "react";

import { IconCard, IconLoader } from "@/components/IconCard";

import { IconInfoIcons } from "../../../../src/scripts/types";

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
      svgPath={`${githubIconsPath}/${icons[variant]}`}
      name={name}
      subName={""}
      fileName={name}
      setActiveType={setVariant}
      activeType={variant}
    >
      <Web3Icon
        className="size-[70px]"
        walletKey={name}
        mono={variant === IconVariant.Mono}
        loader={<IconLoader />}
      />
    </IconCard>
  );
};
