import * as React from "react";
import type { SVGProps } from "react";
const IconAusdeMono = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="32px"
    height="32px"
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
          d="M29.68 24.292A15.93 15.93 0 0 0 32 15.995C32 7.158 24.84 0 16 0S0 7.158 0 15.995c0 3.02.84 5.838 2.29 8.247L15.51 1.33v8.667L7.93 23.793c-1.59.58-3.08 1.32-4.43 2.199A15.98 15.98 0 0 0 16 32c5.06 0 9.56-2.35 12.5-6.008-1.37-.9-2.88-1.65-4.5-2.23L16.44 9.998V1.33l13.25 22.962zm-9.26-1.49a24.6 24.6 0 0 0-8.84 0L16 15.146z"
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