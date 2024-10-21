"use client";

import { IconVariant } from "@bgd-labs/react-web3-icons/dist/utils";
import { ReactNode } from "react";

import { Box } from "@/components/Box";
import { CopyToClipboard } from "@/components/CopyToClipboard";
import { DownloadButton } from "@/components/DownloadButton";
import { cn } from "@/utils/cn";

export const IconCard = ({
  children,
  name,
  subName,
  subComponent,
  svgPath,
  fileName,
  setActiveType,
  activeType,
  onTitleClick,
}: {
  children: ReactNode;
  name: string;
  subName?: string;
  subComponent?: ReactNode;
  svgPath: string;
  fileName: string;
  setActiveType: (type: IconVariant) => void;
  activeType: IconVariant;
  onTitleClick?: () => void;
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
          <div
            onClick={onTitleClick}
            className="cursor-pointer text-sm font-semibold text-gray-800"
          >
            {name}
          </div>
          {subName && (
            <div className="font-mono text-xs uppercase text-gray-400">
              {subName}
            </div>
          )}
          {subComponent && subComponent}
        </div>

        <div
          onClick={handleSetIconVariant}
          className="group relative flex h-[153px] cursor-pointer items-center justify-center transition"
        >
          <div className="flex flex-col">
            <div className="flex h-[124px] w-[124px] items-center justify-center rounded-full border border-main-400 bg-main-500 transition group-hover:bg-main-100">
              <div className="relative z-10 flex h-[116px] w-[116px] items-center justify-center rounded-full border border-main-400 bg-white">
                <div className="flex h-[70px] w-[70px] items-center justify-center overflow-hidden">
                  {children}
                </div>
              </div>
            </div>

            <div
              className={cn(
                "absolute bottom-[20px] left-[14.5px] h-[45px] w-[95px] rotate-[-60deg] rounded-full border border-main-400 bg-main-500 transition group-hover:bg-main-100",
                {
                  ["left-[88px] rotate-[-125deg]"]:
                    activeType === IconVariant.Mono,
                },
              )}
            />

            <div className="z-5 relative ml-[-5%] mt-[-15px] flex w-[110%] items-center justify-between text-[10px]">
              <div
                className={cn(
                  `flex h-[36px] w-[36px] items-center justify-center rounded-full bg-main-200 text-main-600 transition group-hover:bg-main-200 group-hover:text-main-600`,
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
                  `flex h-[36px] w-[36px] items-center justify-center rounded-full bg-main-200 text-main-600 transition group-hover:bg-main-200 group-hover:text-main-600`,
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
