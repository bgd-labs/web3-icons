"use client";

import { AssetIcon, TokenTag, TokenVariant } from "@bgd-labs/react-web3-icons";
import { useState } from "react";
import { renderToString } from "react-dom/server";

import { CopyToClipboard } from "@/components/CopyToClipboard";
import { DownloadButton } from "@/components/DownloadButton";
import { cn } from "@/utils/cn";

// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
const tags: { tag: TokenTag | undefined; symbol: string }[] = [
  {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
    tag: TokenTag.AToken,
    symbol: "AT",
  },
  {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
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
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
    tag: TokenVariant.Full,
    symbol: "Full",
  },
  {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
    tag: TokenVariant.Mono,
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
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents,@typescript-eslint/no-unsafe-assignment
  const [activeTag, setActiveTag] = useState<TokenTag | undefined>(undefined);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
  const [activeType, setActiveType] = useState<TokenVariant>(TokenVariant.Full);

  const Icon = () => (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
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
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            fileName={`${activeTag ? activeTag : ""}${symbol}${activeType === TokenVariant.Full ? "" : activeType}`}
          />
          <CopyToClipboard copyText={renderToString(<Icon />)} />
        </div>
      </div>
    </div>
  );
};
