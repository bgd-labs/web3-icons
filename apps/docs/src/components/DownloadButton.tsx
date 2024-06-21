"use client";

import { useCallback } from "react";

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
    <button
      className="ml-auto p-1 text-gray-400 hover:text-gray-800"
      type="button"
      onClick={downloadSVG}
    >
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
  );
};
