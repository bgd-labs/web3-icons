import { cn } from "@/utils/cn";

export const CopyIcon = ({ isCopied }: { isCopied: boolean }) => {
  const size = 6;

  return (
    <>
      <span className={`flex h-${size} w-${size} overflow-hidden`}>
        <svg
          className={cn(
            `h-${size} w-${size} shrink-0 transition-all duration-150 ease-linear`,
            {
              ["-translate-x-full text-green-500"]: isCopied,
            },
          )}
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 30.7361H11V11H31.5714V14.3833M39 18.8944V38.0667H19V18.8944H39Z"
            stroke="currentColor"
            strokeWidth="3"
          />
        </svg>
        <svg
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn(
            `h-${size} w-${size} shrink-0 translate-x-full transition-all duration-150 ease-linear`,
            {
              ["-translate-x-full text-green-500"]: isCopied,
            },
          )}
        >
          <path
            d="M14 24.8571L21.1719 33L41 12"
            stroke="currentColor"
            strokeWidth="4"
          />
        </svg>
      </span>
    </>
  );
};
