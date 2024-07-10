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

  const handleSetIconVariant = () => {
    if (activeType === IconVariant.Full) {
      setActiveType(IconVariant.Mono);
    } else {
      setActiveType(IconVariant.Full);
    }
  };

  const Icon = () => (
    <AssetIcon symbol={symbol} variant={activeType} tokenTag={activeTag} />
  );

  return (
    <Box>
      <div className="relative flex h-[285px] w-[200px] flex-col justify-center overflow-hidden rounded-lg">
        <div className="max-w-[90%] flex-1 p-2">
          <div className="text-sm font-semibold text-gray-800">{name}</div>
          <div className="font-mono text-xs uppercase text-gray-400">
            {symbol}
          </div>
        </div>

        <div
          onClick={handleSetIconVariant}
          className="group relative flex flex-1 cursor-pointer items-center justify-center transition"
        >
          <div className="flex flex-col">
            <div className="border-main-400 bg-main-500 group-hover:bg-main-100 flex h-[124px] w-[124px] items-center justify-center rounded-full border transition">
              <div className="border-main-400 relative z-10 flex h-[116px] w-[116px] items-center justify-center rounded-full border bg-white">
                <div className="flex h-[70px] w-[70px] items-center justify-center overflow-hidden rounded-full">
                  <Icon />
                </div>
              </div>
            </div>

            <div
              className={cn(
                "border-main-400 bg-main-500 group-hover:bg-main-100 absolute bottom-[18px] left-[15px] h-[45px] w-[95px] rotate-[-60deg] rounded-full border transition",
                {
                  ["left-[90px] rotate-[-120deg]"]:
                    activeType === IconVariant.Mono,
                },
              )}
            />

            <div className="z-5 relative ml-[-5%] mt-[-15px] flex w-[110%] items-center justify-between text-[10px]">
              <div
                className={cn(
                  `bg-main-200 text-main-600 group-hover:bg-main-200 group-hover:text-main-600 flex h-[36px] w-[36px] items-center justify-center rounded-full transition`,
                  {
                    ["bg-main-100 text-main-200"]:
                      activeType === IconVariant.Full,
                  },
                )}
              >
                Full
              </div>
              <div
                className={cn(
                  `bg-main-200 text-main-600 group-hover:bg-main-200 group-hover:text-main-600 flex h-[36px] w-[36px] items-center justify-center rounded-full transition`,
                  {
                    ["bg-main-100 text-main-200"]:
                      activeType === IconVariant.Mono,
                  },
                )}
              >
                Mono
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-1 items-end justify-end">
          <DownloadButton
            svgPath={`${githubIconsPath}${iconPath}`}
            fileName={`${activeTag ? activeTag : ""}${symbol}${activeType === IconVariant.Full ? "" : activeType}`}
          />
          <CopyToClipboard svgPath={`${githubIconsPath}${iconPath}`} />
        </div>
      </div>
    </Box>
  );
};
