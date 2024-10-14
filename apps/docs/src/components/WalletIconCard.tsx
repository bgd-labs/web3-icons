"use client";

import { DynamicIcon } from "@bgd-labs/react-web3-icons";
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
      <DynamicIcon
        className="size-[70px]"
        iconType="wallet"
        iconKey={name}
        mono={variant === IconVariant.Mono}
        loader={<IconLoader />}
      />
    </IconCard>
  );
};
