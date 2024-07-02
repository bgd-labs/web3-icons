"use client";

import { IconVariant } from "@bgd-labs/react-web3-icons/dist/utils/index";
import { useState } from "react";

import { CopyToClipboard } from "@/components/CopyToClipboard";
import { DownloadButton } from "@/components/DownloadButton";
import { TagButton, types } from "@/components/IconCard";
import { ChainIcon } from "@/components/Web3Icons/ChainIcon";
import { githubIconsPath } from "@/utils/constants";

export const ChainIconCard = ({
  name,
  chainId,
  iconPath,
}: {
  name: string;
  chainId: number;
  iconPath: string;
}) => {
  const [activeType, setActiveType] = useState(IconVariant.Full);

  const Icon = () => <ChainIcon chainId={chainId} variant={activeType} />;

  return (
    <div className="relative flex h-[175px] w-[175px] flex-col justify-center border border-gray-200">
      <div className="absolute top-0 w-full flex-1">
        <div className="max-w-[100%] p-2">
          <div className="text-sm font-semibold text-gray-800">{name}</div>
          <div className="font-mono text-xs uppercase text-gray-400">
            {chainId}
          </div>
        </div>

        <div className="absolute right-0 top-0 z-10 flex max-w-[50%] flex-col items-end justify-start">
          {types.map((tag) => (
            <TagButton
              key={tag.symbol}
              tag={tag.tag}
              tagName={tag.symbol}
              isActive={tag.tag === activeType}
              onClick={() => setActiveType(tag.tag)}
            />
          ))}
        </div>
      </div>

      <div className="flex-1" />

      <div className="flex size-11 w-full flex-1 items-center justify-center">
        <Icon />
      </div>

      <div className="relative flex flex-1 items-end justify-between">
        <div className="flex flex-1 items-end justify-end">
          <DownloadButton
            svgPath={`${githubIconsPath}${iconPath}`}
            fileName={name}
          />
          <CopyToClipboard svgPath={`${githubIconsPath}${iconPath}`} />
        </div>
      </div>
    </div>
  );
};
