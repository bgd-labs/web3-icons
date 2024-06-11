import * as React from "react";
import type { SVGProps } from "react";
const IconAtribeMono = (props: SVGProps<SVGSVGElement>) => (
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
          d="M16.82.38c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16m-2.5 24.5c0 .83-.67 1.5-1.5 1.5h-1.87c-1.42 0-2.62-1.01-2.75-2.42-.2-2.31-.17-4.64.08-6.95.09-.92.91-1.6 1.83-1.51h.04c.33.04.72.08 1.16.14.39.05.74.13 1.06.23 1.35.41 1.95 1.81 1.95 3.22zm10.86-.93c-.12 1.41-1.33 2.42-2.75 2.42h-1.87c-.83 0-1.5-.67-1.5-1.5v-5.79c0-1.41.6-2.81 1.95-3.22.32-.1.67-.18 1.06-.23s.77-.1 1.16-.14h.04c.92-.09 1.74.59 1.83 1.51.25 2.31.28 4.64.08 6.95m-2.38-12.3c-1.99.15-3.99.22-5.98.23-2.36 0-4.46-.11-5.98-.23-1.44-.11-2.52-1.32-2.52-2.76s1.09-2.67 2.54-2.78c1.98-.15 3.97-.23 5.96-.23 2.27 0 4.4.12 5.96.23 1.45.11 2.54 1.33 2.54 2.78s-1.08 2.66-2.52 2.76"
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
export default IconAtribeMono;
