import * as React from "react";
import type { SVGProps } from "react";
const IconMkrFull = (props: SVGProps<SVGSVGElement>) => (
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
        fill="#58B89C"
        d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16"
      />
      <path
        fill="#fff"
        d="M7.84 22.49H6v-14l9.71 7.03v6.97h-1.84v-6.08l-6.03-4.37zm10.29-6.07v6.08h-1.84v-6.97L26 8.5v14h-1.84V12.06l-6.03 4.37z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default IconMkrFull;
