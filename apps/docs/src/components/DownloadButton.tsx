"use client";

import { useCallback } from "react";

import { ButtonBox } from "@/components/ButtonBox";

function downloadBlob(blob: Blob, filename: string) {
  const objectUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = objectUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(objectUrl), 5000);
}

interface DownloadButtonProps {
  svgPath: string;
  fileName: string;
}

export const DownloadButton = ({ svgPath, fileName }: DownloadButtonProps) => {
  const downloadSVG = useCallback(async () => {
    const svgResponse = await fetch(svgPath);
    if (svgResponse.ok) {
      const blob = await svgResponse.blob();
      downloadBlob(blob, `${fileName}.svg`);
    }
  }, [fileName, svgPath]);

  return (
    <ButtonBox w={106} h={32}>
      <button
        className="flex h-[32px] w-[106px] items-center justify-center"
        type="button"
        onClick={downloadSVG}
      >
        Download
      </button>
    </ButtonBox>
  );
};
