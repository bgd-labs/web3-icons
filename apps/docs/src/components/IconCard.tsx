"use client";

import { renderToString } from "react-dom/server";

import { CopyToClipboard } from "@/components/CopyToClipboard";

export const IconCard = ({
  name,
  symbol,
  children,
}: {
  name: string;
  symbol: string;
  children: React.ReactNode;
}) => {
  // TODO: refactor to use components
  // TODO: implement downloads
  // TODO: implement copy to clipboard

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
        <button className="ml-auto px-0.5 py-1 text-gray-400 hover:text-gray-800">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M4.75 14.75V16.25C4.75 17.9069 6.09315 19.25 7.75 19.25H16.25C17.9069 19.25 19.25 17.9069 19.25 16.25V14.75"
            ></path>
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 14.25L12 4.75"
            ></path>
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M8.75 10.75L12 14.25L15.25 10.75"
            ></path>
          </svg>
        </button>
        <CopyToClipboard copyText={renderToString(children)} />
      </div>
    </div>
  );
};
