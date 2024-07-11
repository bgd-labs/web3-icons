"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

import { Box } from "@/components/Box";

export const Search = ({ placeholder }: { placeholder: string }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 350);

  return (
    <div className="mb-16 max-w-2xl">
      <Box>
        <div className="overflow-hidden rounded-lg">
          <svg
            className="absolute left-3 top-1/2 h-7 w-7 -translate-y-1/2 text-brand-500 transition-all group-focus-within:text-brand-900"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"
            ></path>
          </svg>
          <div className="ring-brand-900 transition-all focus-within:ring-1 hover:ring-1">
            <input
              className="w-full rounded-lg border-r-2 border-t-2 border-transparent px-11 py-3 text-xl outline-none ring-inset transition-all placeholder:text-brand-500 focus:border-brand-900"
              placeholder={placeholder}
              onChange={(e) => {
                handleSearch(e.target.value);
              }}
              defaultValue={searchParams.get("search")?.toString()}
            />
          </div>
        </div>
      </Box>
    </div>
  );
};
