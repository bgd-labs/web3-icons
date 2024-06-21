"use client";

import { CopyToClipboard } from "@/components/CopyToClipboard";
import { DownloadButton } from "@/components/DownloadButton";
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
  const Icon = () => <ChainIcon chainId={chainId} />;

  return (
    <div className="relative flex h-[175px] w-[175px] flex-col justify-center border border-gray-200">
      <div className="absolute top-0 w-full flex-1">
        <div className="max-w-[100%] p-2">
          <div className="text-sm font-semibold text-gray-800">{name}</div>
          <div className="font-mono text-xs uppercase text-gray-400">
            {chainId}
          </div>
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
