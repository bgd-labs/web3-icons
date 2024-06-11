import * as React from "react";
import type { SVGProps } from "react";
const IconAmkrMono = (props: SVGProps<SVGSVGElement>) => (
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
          fillRule="evenodd"
          d="M16.45.86c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16m-.29 22.5h-1.84v-6.08l-6.03-4.37v10.44H6.45v-14l9.71 7.03v6.98m10.29 0h-1.84V12.92l-6.03 4.37v6.08h-1.84V16.4l9.71-7.03v14z"
          clipRule="evenodd"
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
export default IconAmkrMono;
