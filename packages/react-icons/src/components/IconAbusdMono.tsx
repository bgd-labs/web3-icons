import * as React from "react";
import type { SVGProps } from "react";
const IconAbusdMono = (props: SVGProps<SVGSVGElement>) => (
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
          d="M16.45.43c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16m0 3.25 3.18 3.18-7.98 7.98-3.18-3.18zM3.7 16.43l3.18-3.18 3.18 3.18-3.18 3.18zm4.79 4.78L21.24 8.46l3.18 3.18-12.75 12.75zm7.96 7.97-3.18-3.19 12.75-12.74 3.18 3.18z"
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
export default IconAbusdMono;
