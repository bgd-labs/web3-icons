"use client";

import { AssetTag, IconVariant } from "@bgd-labs/react-web3-icons/dist/utils";
import { useState } from "react";

import { Box } from "@/components/Box";
import { CopyToClipboard } from "@/components/CopyToClipboard";
import { DownloadButton } from "@/components/DownloadButton";
import { AssetIcon } from "@/components/Web3Icons/AssetIcon";
import { cn } from "@/utils/cn";
import { githubIconsPath } from "@/utils/constants";

import { IconInfoIcons } from "../../../../src/scripts/types";

const tags: { tag: AssetTag | undefined; symbol: string }[] = [
  {
    tag: AssetTag.AToken,
    symbol: "AT",
  },
  {
    tag: AssetTag.StataToken,
    symbol: "StaT",
  },
  {
    tag: undefined,
    symbol: "Def",
  },
];

export const types = [
  {
    tag: IconVariant.Full,
    symbol: "Full",
  },
  {
    tag: IconVariant.Mono,
    symbol: "Mono",
  },
];

export const TagButton = <T extends string>({
  tag,
  tagName,
  isActive,
  onClick,
}: {
  tag: T | undefined;
  tagName: string;
  isActive: boolean;
  onClick: (value: T | undefined) => void;
}) => {
  return (
    <button
      type="button"
      onClick={() => onClick(tag)}
      disabled={isActive}
      className={cn(
        "mb-[-2px] inline-flex min-w-[25px] items-center bg-gray-400 px-0 py-0 text-center text-[4px] font-medium text-white transition hover:bg-gray-800 hover:text-[10px]",
        {
          ["bg-gray-800 px-2 py-[2px] text-[10px]"]: isActive,
        },
      )}
    >
      <span>{tagName}</span>
    </button>
  );
};

export const IconCard = ({
  name,
  symbol,
  icons,
}: {
  name: string;
  symbol: string;
  icons: IconInfoIcons;
}) => {
  const [activeTag, setActiveTag] = useState<AssetTag | undefined>(undefined);
  const [activeType, setActiveType] = useState(IconVariant.Full);

  const iconPath = activeTag
    ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      icons[
        activeTag === AssetTag.AToken
          ? "aToken"
          : activeTag === AssetTag.StataToken
            ? "stataToken"
            : "aToken"
      ][activeType]
    : icons[activeType];

  const Icon = () => (
    <AssetIcon symbol={symbol} variant={activeType} tokenTag={activeTag} />
  );

  return (
    <Box>
      <div className="relative flex h-[175px] w-[175px] flex-col justify-center overflow-hidden rounded-lg">
        <div className="absolute top-0 w-full flex-1">
          <div className="max-w-[75%] p-2">
            <div className="text-sm font-semibold text-gray-800">{name}</div>
            <div className="font-mono text-xs uppercase text-gray-400">
              {symbol}
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
          <div className="absolute flex max-w-[50%] flex-col justify-end">
            {tags.map((tag) => (
              <TagButton
                key={tag.symbol}
                tag={tag.tag}
                tagName={tag.symbol}
                isActive={tag.tag === activeTag}
                onClick={() => setActiveTag(tag.tag)}
              />
            ))}
          </div>

          <div className="flex flex-1 items-end justify-end">
            <DownloadButton
              svgPath={`${githubIconsPath}${iconPath}`}
              fileName={`${activeTag ? activeTag : ""}${symbol}${activeType === IconVariant.Full ? "" : activeType}`}
            />
            <CopyToClipboard svgPath={`${githubIconsPath}${iconPath}`} />
          </div>
        </div>
      </div>
    </Box>
  );
};
