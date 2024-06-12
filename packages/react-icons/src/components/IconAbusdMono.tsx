import * as React from "react";
import type { SVGProps } from "react";
const IconAbusdMono = (props: SVGProps<SVGSVGElement>) => (
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
          d="M16 0C7.16 0 0 7.16 0 16s7.16 16 16 16 16-7.16 16-16S24.84 0 16 0m0 3.25 3.18 3.18-7.98 7.98-3.18-3.18zM3.25 16l3.18-3.18L9.61 16l-3.18 3.18zm4.79 4.78L20.79 8.03l3.18 3.18-12.75 12.75zM16 28.75l-3.18-3.19 12.75-12.74L28.75 16z"
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
