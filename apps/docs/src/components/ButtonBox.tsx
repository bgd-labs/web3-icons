import { ReactNode } from "react";

import { cn } from "@/utils/cn";

interface BoxProps {
  children: ReactNode;
  w: number | string;
  h: number | string;
  color?: "main" | "white";
}

export const ButtonBox = ({ children, h, w, color }: BoxProps) => {
  return (
    <div className={cn(`h-[${h}px] w-[${w}px]`)}>
      <div className="absolute overflow-hidden pb-[4px] pl-[4px] text-[14px] text-white hover:pb-[2px] hover:pl-[2px] active:pb-0 active:pl-0">
        <div className="absolute bottom-[1px] left-[1px] right-0 top-[2px] rounded-lg bg-gradient-to-t from-main-300 to-main-200" />
        <div className="absolute bottom-0 left-0 right-0 top-[1px] rounded-lg border border-main-100" />
        <div className="z-2 absolute left-[-3px] top-[-31px] h-0 w-0 rounded-xl border-b-[20px] border-l-[30px] border-t-[20px] border-b-transparent border-l-main-100 border-t-transparent" />
        <div className="z-2 absolute left-[-3px] top-[-32px] h-0 w-0 rounded-lg border-b-[20px] border-l-[30px] border-t-[20px] border-b-transparent border-l-white border-t-transparent" />
        <div className="z-2 absolute bottom-[-12px] right-[-24.5px] h-0 w-0 rounded-xl border-b-[30px] border-l-[20px] border-r-[20px] border-b-main-100 border-l-transparent border-r-transparent" />
        <div className="z-2 absolute bottom-[-13.5px] right-[-24.5px] h-0 w-0 rounded-lg border-b-[30px] border-l-[20px] border-r-[20px] border-b-white border-l-transparent border-r-transparent" />
        <div
          className={cn(
            `relative z-10 rounded-lg border border-main-100 bg-main-100`,
            {
              ["bg-main-100"]: color === "main",
              ["bg-white"]: color === "white",
            },
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
