import * as React from "react";
import type { SVGProps } from "react";
const IconLendFull = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      d="M15.81 31.86c8.61 0 15.59-6.98 15.59-15.59S24.42.68 15.81.68.22 7.66.22 16.27 7.2 31.86 15.81 31.86"
    />
    <path
      fill="#fff"
      d="m22.67 6.86-1.91-1.91-6.37 6.37 6.37 6.37 1.91-1.91-4.47-4.47 4.47-4.47zm-5.44 14.36-6.37-6.37-1.91 1.91 4.47 4.47-4.47 4.47 1.91 1.91 6.37-6.37zm-3.66-9.09 6.37 6.37-1.9 1.9-6.37-6.37z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={0.22}
        x2={31.4}
        y1={16.27}
        y2={16.27}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#01AEC9" />
        <stop offset={1} stopColor="#1E8FCA" />
      </linearGradient>
    </defs>
  </svg>
);
export default IconLendFull;
