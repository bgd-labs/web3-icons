"use client";

import { DynamicIcon } from "@bgd-labs/react-web3-icons";
import { githubIconsPath } from "@bgd-labs/react-web3-icons/dist/constants";
import { IconVariant } from "@bgd-labs/react-web3-icons/dist/utils";
import { useState } from "react";

import { IconCard, IconLoader } from "@/components/IconCard";

import { IconInfoIcons } from "../../../../src/scripts/types";

export const AssetIconCard = ({
  name,
  symbol,
  icons,
  chainId,
  chainName,
  assetTag,
}: {
  name: string;
  symbol: string;
  icons: IconInfoIcons;
  chainId?: number;
  chainName?: string;
  assetTag?: "a" | "stata" | "stk";
}) => {
  const [variant, setVariant] = useState(IconVariant.Full);
  const iconPath = assetTag
    ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      icons[
        assetTag === "a"
          ? "aToken"
          : assetTag === "stata"
            ? "stataToken"
            : assetTag === "stk"
              ? "stkToken"
              : "aToken"
      ][variant]
    : icons[variant];

  return (
    <IconCard
      svgPath={`${githubIconsPath}/${iconPath}`}
      name={`${name}${chainName ? `(${chainName})` : ""}`}
      subComponent={
        <div className="font-mono text-xs text-gray-400">
          <span className="lowercase">{assetTag ? assetTag : ""}</span>
          <span className="uppercase">{symbol}</span>
          <span>{chainId && !assetTag ? `(${chainId})` : ""}</span>
        </div>
      }
      fileName={`${(assetTag ? assetTag : "").toLowerCase()}${symbol.toUpperCase()}${variant === IconVariant.Full ? "" : variant}`}
      setActiveType={setVariant}
      activeType={variant}
    >
      <DynamicIcon
        className="size-[70px]"
        iconType="asset"
        iconKey={symbol}
        assetTag={assetTag}
        mono={variant === IconVariant.Mono}
        loader={<IconLoader />}
      />
    </IconCard>
  );
};
