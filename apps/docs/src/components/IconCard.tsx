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
  svgPath,
  fileName,
  setActiveType,
  activeType,
}: {
  children: ReactNode;
  name: string;
  subName: string;
  svgPath: string;
  fileName: string;
  setActiveType: (type: IconVariant) => void;
  activeType: IconVariant;
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
