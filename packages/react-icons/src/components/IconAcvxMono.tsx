import * as React from "react";
import type { SVGProps } from "react";
const IconAcvxMono = (props: SVGProps<SVGSVGElement>) => (
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
          d="M16.37.31c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16m10.81 13.5h-6.63v-2.5h-2.5v-2.5h-3.37v2.5h-2.5v10h2.5v2.5h3.37v-2.5h2.49v-2.5h6.63v5h-2.5v2.5h-5v2.5h-6.62v-2.5h-5v-2.5h-2.5v-15h2.5v-2.5h5v-2.5h6.63v2.5h5v2.5h2.5z"
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
export default IconAcvxMono;
