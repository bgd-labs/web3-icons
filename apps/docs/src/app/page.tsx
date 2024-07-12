import Link from "next/link";
import React from "react";

import { Branding } from "@/components/Branding";
import { PreviewImage } from "@/components/PreviewImage";
import { PreviewImageMobile } from "@/components/PreviewImageMobile";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <div className="mb-10 hidden w-full max-w-[95%] p-4 sm:block lg:max-w-[70%]">
        <PreviewImage />
      </div>
      <div className="flex w-full items-center justify-center p-12 sm:hidden">
        <PreviewImageMobile />
      </div>

      <div className="mx-auto my-12 flex items-center justify-center gap-6 text-[14px]">
        <Link
          href="/icons"
          className="text-md w-[160px] rounded border border-gray-900 bg-gray-900 py-3 text-center font-semibold text-white transition hover:border-gray-300 hover:bg-white hover:text-gray-800 active:border-gray-900 active:bg-gray-900 active:text-white"
        >
          Explore icons
        </Link>
        <a
          href="https://github.com/bgd-labs/icons"
          target="_blank"
          rel="noreferrer"
          className="text-md group flex w-[160px] items-center justify-center gap-2 rounded border border-gray-300 py-3 font-semibold text-gray-800 transition hover:border-gray-900 hover:bg-gray-900 hover:text-white active:border-gray-300 active:bg-white active:text-gray-800"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_530_2141)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.2013 0.73999C6.03401 0.73999 0.23999 6.69832 0.23999 14.0696C0.23999 19.9618 3.95242 24.9495 9.10254 26.7148C9.74644 26.8475 9.9823 26.428 9.9823 26.0751C9.9823 25.7661 9.96107 24.7068 9.96107 23.6032C6.35556 24.3978 5.60475 22.0142 5.60475 22.0142C5.02532 20.4694 4.16679 20.0723 4.16679 20.0723C2.9867 19.2558 4.25275 19.2558 4.25275 19.2558C5.56177 19.3441 6.24864 20.624 6.24864 20.624C7.40724 22.6542 9.27419 22.0806 10.0253 21.7274C10.1325 20.8667 10.476 20.2709 10.8408 19.9399C7.96517 19.6309 4.93962 18.4834 4.93962 13.3633C4.93962 11.9067 5.45432 10.7151 6.26987 9.78826C6.14119 9.4573 5.69044 8.08878 6.39881 6.25714C6.39881 6.25714 7.49319 5.90397 9.96081 7.62539C11.0173 7.33361 12.1068 7.18518 13.2013 7.18393C14.2956 7.18393 15.4113 7.33857 16.4414 7.62539C18.9093 5.90397 20.0037 6.25714 20.0037 6.25714C20.7121 8.08878 20.261 9.4573 20.1324 9.78826C20.9694 10.7151 21.4629 11.9067 21.4629 13.3633C21.4629 18.4834 18.4373 19.6087 15.5402 19.9399C16.0124 20.3592 16.4199 21.1535 16.4199 22.4115C16.4199 24.199 16.3987 25.6336 16.3987 26.0748C16.3987 26.428 16.6348 26.8475 17.2785 26.7151C22.4286 24.9492 26.141 19.9618 26.141 14.0696C26.1623 6.69832 20.347 0.73999 13.2013 0.73999Z"
                fill="#101423"
                className="transition group-hover:fill-white group-active:fill-[#101423]"
              />
            </g>
            <defs>
              <clipPath id="clip0_530_2141">
                <rect
                  width="26"
                  height="26"
                  fill="white"
                  transform="translate(0.23999 0.73999)"
                />
              </clipPath>
            </defs>
          </svg>
          GitHub
        </a>
      </div>

      <Branding />
    </main>
  );
}
