import { ReactNode } from "react";

interface BoxProps {
  children: ReactNode;
}

export const Box = ({ children }: BoxProps) => {
  return (
    <div className="relative overflow-hidden pb-[10px] pl-[10px]">
      <div className="absolute bottom-[1px] left-[1px] right-0 top-[2px] rounded-lg bg-gradient-to-t from-main-300 to-main-200" />
      <div className="absolute bottom-0 left-0 right-0 top-[1px] rounded-lg border border-main-100" />
      <div className="z-2 absolute left-[-2px] top-[-27px] h-0 w-0 border-b-[20px] border-l-[30px] border-t-[20px] border-b-transparent border-l-main-100 border-t-transparent" />
      <div className="z-2 absolute left-[-2px] top-[-28px] h-0 w-0 border-b-[20px] border-l-[30px] border-t-[20px] border-b-transparent border-l-white border-t-transparent" />
      <div className="z-2 absolute bottom-[-6px] right-[-25px] h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-main-100 border-l-transparent border-r-transparent" />
      <div className="z-2 absolute bottom-[-7px] right-[-25px] h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-white border-l-transparent border-r-transparent" />
      <div className="relative z-10 rounded-lg border border-main-100 bg-white">
        {children}
      </div>
    </div>
  );
};
