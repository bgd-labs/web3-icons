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
          d="M16 0C7.16 0 0 7.16 0 16s7.16 16 16 16 16-7.16 16-16S24.84 0 16 0m10.81 13.5h-6.63V11h-2.5V8.5h-3.37V11h-2.5v10h2.5v2.5h3.37V21h2.49v-2.5h6.63v5h-2.5V26h-5v2.5h-6.62V26h-5v-2.5h-2.5v-15h2.5V6h5V3.5h6.63V6h5v2.5h2.5z"
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
