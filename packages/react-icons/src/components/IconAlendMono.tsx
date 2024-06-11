import * as React from "react";
import type { SVGProps } from "react";
const IconAlendMono = (props: SVGProps<SVGSVGElement>) => (
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
          d="M15.81.51C7.2.51.22 7.49.22 16.1S7.2 31.69 15.81 31.69 31.4 24.71 31.4 16.1 24.42.51 15.81.51m-4.95 26.9L8.95 25.5l4.47-4.47-4.47-4.47 1.91-1.91 6.37 6.37-6.37 6.37zm7.19-7.18-6.37-6.37 1.9-1.9 6.37 6.37zm4.62-4.61-1.91 1.91-6.37-6.37 6.37-6.37 1.91 1.91-4.47 4.47 4.47 4.47z"
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
export default IconAlendMono;
