import * as React from "react";
import type { SVGProps } from "react";
const IconAethMono = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={16} cy={16} r={15} stroke="currentColor" strokeWidth={2} />
    <g clipPath="url(#circleClip)">
      <g
        style={{
          transform: "scale(0.8125)",
          transformOrigin: "50% 50%",
        }}
      >
        <path
          fill="currentColor"
          d="M15.58.51C6.97.51-.01 7.49-.01 16.1s6.98 15.59 15.59 15.59 15.59-6.98 15.59-15.59S24.19.51 15.58.51m-.33 28.36-7.8-11 7.8 4.68v6.32M7.8 16.52l7.45-3.41v7.73L7.8 16.51zm7.45-4.11-7.52 3.41 7.52-12.49zm.71-9.08 7.52 12.49-7.52-3.41zm0 9.78 7.45 3.41-7.45 4.33v-7.74m0 15.76v-6.31l7.8-4.68-7.8 11z"
        />
      </g>
    </g>
    <defs>
      <clipPath id="circleClip">
        <circle cx={16} cy={16} r={13} />
      </clipPath>
    </defs>
  </svg>
);
export default IconAethMono;
