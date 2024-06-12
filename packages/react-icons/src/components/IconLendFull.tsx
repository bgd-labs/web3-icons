import * as React from "react";
import type { SVGProps } from "react";
const IconLendFull = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32px"
    height="32px"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="url(#b)"
        d="M16 32c8.836 0 16-7.164 16-16S24.836 0 16 0 0 7.164 0 16s7.164 16 16 16"
      />
      <path
        fill="#fff"
        d="m23.04 6.343-1.96-1.96-6.537 6.537 6.537 6.537 1.96-1.96-4.587-4.587 4.587-4.588zM17.457 21.08l-6.537-6.537-1.96 1.96 4.587 4.587-4.587 4.588 1.96 1.96 6.537-6.537zm-3.756-9.329 6.538 6.538-1.95 1.95L11.75 13.7z"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={0}
        x2={32}
        y1={16}
        y2={16}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#01AEC9" />
        <stop offset={1} stopColor="#1E8FCA" />
      </linearGradient>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default IconLendFull;
