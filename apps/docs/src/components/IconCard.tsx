"use client";

import { renderToString } from "react-dom/server";

import { CopyToClipboard } from "@/components/CopyToClipboard";
import { DownloadButton } from "@/components/DownloadButton";

export const IconCard = ({
  name,
  symbol,
  children,
}: {
  name: string;
  symbol: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="relative flex aspect-square min-w-[170px] items-center justify-center border border-gray-200">
      <div className="absolute left-0 top-0 p-4">
        <div className="text-sm font-semibold text-gray-800">{name}</div>
        <div className="font-mono text-xs uppercase text-gray-400">
          {symbol}
        </div>
      </div>

      <div className="size-11">{children}</div>

      <div className="absolute bottom-0 flex w-full items-center p-2">
        <DownloadButton svgComponent={children} fileName={symbol} />
        <CopyToClipboard copyText={renderToString(children)} />
      </div>
    </div>
  );
};
