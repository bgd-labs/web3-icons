import * as React from "react";
import type { SVGProps } from "react";
const IconAldoMono = (props: SVGProps<SVGSVGElement>) => (
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
          d="m20.14 13.21-3.79-5.93-3.8 5.93 3.8 2.21z"
        />
        <path
          fill="currentColor"
          d="M16.34.51C7.73.51.75 7.49.75 16.1s6.98 15.59 15.59 15.59 15.59-6.98 15.59-15.59S24.95.51 16.34.51m.01 4.56 5.47 8.54-5.47 3.18-5.47-3.18zm5.46 19.79c-3.02 3.01-7.92 3.01-10.94 0-2.57-2.56-3-6.56-1.05-9.61l.17-.27 6.34 3.69 6.34-3.69.17.27a7.704 7.704 0 0 1-1.05 9.61z"
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
export default IconAldoMono;
