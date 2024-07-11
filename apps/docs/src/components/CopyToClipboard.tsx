"use client";

import { type ReactNode, useState } from "react";
import * as React from "react";

import { ButtonBox } from "@/components/ButtonBox";
import { CopyIcon } from "@/components/CopyIcon";
import { cn } from "@/utils/cn";

type Props = {
  svgPath: string;
  children?: ReactNode;
  className?: React.ComponentProps<"div">["className"];
};

export const CopyToClipboard = ({ svgPath, className, children }: Props) => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = async (event: React.MouseEvent) => {
    event.preventDefault();
    const svgResponse = await fetch(svgPath);
    if (svgResponse.ok) {
      const copyText = await svgResponse.text();
      await navigator.clipboard.writeText(String(copyText));
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1500);
    }
  };

  return (
    <div className={cn("flex flex-wrap items-center", className)}>
      {children}
      <ButtonBox w={32} h={32} color="white">
        <button
          className="flex h-[32px] w-[32px] items-center justify-center text-main-100"
          type="button"
          onClick={handleCopyClick}
        >
          <CopyIcon isCopied={copied} />
        </button>
      </ButtonBox>
    </div>
  );
};
