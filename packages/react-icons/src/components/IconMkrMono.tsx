import * as React from "react";
import type { SVGProps } from "react";
const IconMkrMono = (props: SVGProps<SVGSVGElement>) => (
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
        fill="currentColor"
        fillRule="evenodd"
        d="M16 0C7.16 0 0 7.16 0 16s7.16 16 16 16 16-7.16 16-16S24.84 0 16 0m-.29 22.5h-1.84v-6.08l-6.03-4.37v10.44H6v-14l9.71 7.03zm10.29 0h-1.84V12.06l-6.03 4.37v6.08h-1.84v-6.97L26 8.51v14z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default IconMkrMono;
