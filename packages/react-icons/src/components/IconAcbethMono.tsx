import * as React from "react";
import type { SVGProps } from "react";
const IconAcbethMono = (props: SVGProps<SVGSVGElement>) => (
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
          d="M16.04.43C7.26.43.15 7.54.15 16.32s7.11 15.89 15.89 15.89 15.89-7.11 15.89-15.89S24.82.43 16.04.43m0 30.9c-8.29 0-15-6.72-15-15s6.72-15 15-15 15 6.72 15 15-6.72 15-15 15"
        />
        <path
          fill="currentColor"
          d="M16.04 2.82c-7.46 0-13.5 6.05-13.5 13.5s6.05 13.5 13.5 13.5 13.5-6.05 13.5-13.5-6.05-13.5-13.5-13.5m0 24.4-6.71-9.6 6.71 4.02 6.72-3.95zm0-6.89-6.7-4.01L16.04 5l6.72 11.34-6.72 4.01z"
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
export default IconAcbethMono;
