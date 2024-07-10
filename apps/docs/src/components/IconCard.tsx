// TODO: need add styles for tags (need design)

"use client";

import { AssetTag, IconVariant } from "@bgd-labs/react-web3-icons/dist/utils";
import { ReactNode } from "react";

import { Box } from "@/components/Box";
import { CopyToClipboard } from "@/components/CopyToClipboard";
import { DownloadButton } from "@/components/DownloadButton";
import { cn } from "@/utils/cn";

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
  children,
  name,
  subName,
  svgPath,
  fileName,
  setActiveType,
  activeType,
  setActiveTag,
  activeTag,
  withTags,
}: {
  children: ReactNode;
  name: string;
  subName: string;
  svgPath: string;
  fileName: string;
  setActiveType: (type: IconVariant) => void;
  activeType: IconVariant;
  setActiveTag?: (tag: AssetTag | undefined) => void;
  activeTag?: AssetTag | undefined;
  withTags?: boolean;
}) => {
  const handleSetIconVariant = () => {
    if (activeType === IconVariant.Full) {
      setActiveType(IconVariant.Mono);
    } else {
      setActiveType(IconVariant.Full);
    }
  };

  return (
    <Box>
      <div className="relative flex min-h-[285px] w-[200px] flex-col justify-center overflow-hidden rounded-lg pb-4">
        <div className="relative flex-1 p-2">
          <div className="text-sm font-semibold text-gray-800">{name}</div>
          <div className="font-mono text-xs uppercase text-gray-400">
            {subName}
          </div>

          {withTags && setActiveTag && (
            <div className="absolute right-0 top-0 z-10 flex max-w-[50%] flex-col items-end justify-start">
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
          )}
        </div>

        <div
          onClick={handleSetIconVariant}
          className="group relative flex h-[153px] cursor-pointer items-center justify-center transition"
        >
          <div className="flex flex-col">
            <div className="border-main-400 bg-main-500 group-hover:bg-main-100 flex h-[124px] w-[124px] items-center justify-center rounded-full border transition">
              <div className="border-main-400 relative z-10 flex h-[116px] w-[116px] items-center justify-center rounded-full border bg-white">
                <div className="flex h-[70px] w-[70px] items-center justify-center overflow-hidden">
                  {children}
                </div>
              </div>
            </div>

            <div
              className={cn(
                "border-main-400 bg-main-500 group-hover:bg-main-100 absolute bottom-[20px] left-[14.5px] h-[45px] w-[95px] rotate-[-60deg] rounded-full border transition",
                {
                  ["left-[88px] rotate-[-125deg]"]:
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

        <div className="mt-4 flex flex-1 items-center justify-center">
          <div className="mr-6">
            <DownloadButton svgPath={svgPath} fileName={fileName} />
          </div>
          <CopyToClipboard svgPath={svgPath} />
        </div>
      </div>
    </Box>
  );
};
