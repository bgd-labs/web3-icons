"use client";

import { useState } from "react";
import { renderToString } from "react-dom/server";

import { CopyToClipboard } from "@/components/CopyToClipboard";
import { DownloadButton } from "@/components/DownloadButton";
import { cn } from "@/utils/cn";

import { AssetIcon, TokenTag } from "../../../../packages/react-icons";

const tags = [
  {
    tag: TokenTag.AToken,
    symbol: "AT",
  },
  {
    tag: TokenTag.StataToken,
    symbol: "StaT",
  },
  {
    tag: undefined,
    symbol: "Def",
  },
];

const types = [
  {
    tag: "full",
    symbol: "Full",
  },
  {
    tag: "mono",
    symbol: "Mono",
  },
];

export const TagButton = ({
  tag,
  tagName,
  isActive,
  onClick,
}: {
  tag: string | undefined;
  tagName: string;
  isActive: boolean;
  onClick: (value: string | undefined) => void;
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
}: {
  name: string;
  symbol: string;
}) => {
  const [activeTag, setActiveTag] = useState<TokenTag | undefined>(undefined);
  const [activeType, setActiveType] = useState<"full" | "mono">("full");

  const Icon = () => (
    <AssetIcon symbol={symbol} variant={activeType} tokenTag={activeTag} />
  );

  return (
    <div className="relative flex h-[175px] w-[175px] flex-col justify-center border border-gray-200">
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
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              onClick={setActiveType}
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
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              onClick={setActiveTag}
            />
          ))}
        </div>

        <div className="flex flex-1 items-end justify-end">
          <DownloadButton
            svgComponent={<Icon />}
            fileName={`${activeTag ? activeTag : ""}${symbol}${activeType === "full" ? "" : activeType}`}
          />
          <CopyToClipboard copyText={renderToString(<Icon />)} />
        </div>
      </div>
    </div>
  );
};
