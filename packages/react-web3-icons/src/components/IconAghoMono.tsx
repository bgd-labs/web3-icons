import * as React from "react";
import type { SVGProps } from "react";
const IconAghoMono = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="100%"
    height="100%"
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
          d="M16 28.43c-6.82 0-12.35-5.63-12.35-12.58S9.18 3.27 16 3.27c6.17 0 11.43 4.62 12.35 10.64H25c-.87-4.24-4.54-7.32-9-7.32-5.11 0-9.19 4.06-9.19 9.26s4.08 9.19 9.19 9.19c4.62 0 8.32-3.26 9-7.74h3.35v8.84c2.27-2.76 3.66-6.28 3.66-10.14 0-8.84-7.16-16-16-16S0 7.16 0 16s7.16 16 16 16c3.45 0 6.64-1.1 9.25-2.96v-5.69s-.09-.02-.13-.04c-1.84 3.13-4.83 5.12-9.12 5.12m-3.28-11.92c-1.44 0-2.6-1.17-2.6-2.6s1.17-2.6 2.6-2.6 2.6 1.17 2.6 2.6-1.17 2.6-2.6 2.6m6.57 0c-1.44 0-2.6-1.17-2.6-2.6s1.17-2.6 2.6-2.6 2.6 1.17 2.6 2.6-1.17 2.6-2.6 2.6"
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
export default IconAghoMono;
