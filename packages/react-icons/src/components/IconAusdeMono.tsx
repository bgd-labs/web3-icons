import * as React from "react";
import type { SVGProps } from "react";
const IconAusdeMono = (props: SVGProps<SVGSVGElement>) => (
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
          d="M29.68 24.75c1.47-2.42 2.32-5.26 2.32-8.3 0-8.84-7.16-16-16-16s-16 7.16-16 16c0 3.02.84 5.84 2.29 8.25L15.51 1.78v8.67l-7.58 13.8c-1.59.58-3.08 1.32-4.43 2.2 2.93 3.66 7.44 6.01 12.5 6.01s9.56-2.35 12.5-6.01a21.2 21.2 0 0 0-4.5-2.23l-7.56-13.77V1.78l13.25 22.97zm-9.26-1.49a24.548 24.548 0 0 0-8.84 0L16 15.6z"
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
export default IconAusdeMono;
