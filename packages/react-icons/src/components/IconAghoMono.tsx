import * as React from "react";
import type { SVGProps } from "react";
const IconAghoMono = (props: SVGProps<SVGSVGElement>) => (
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
          d="M16.26.31c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16m8.95 23.79H14.83c-4.52 0-8.35-3.68-8.35-8.21s3.84-8.21 8.35-8.21h5.08l1.37 3.28h-6.45c-1.31 0-2.54.52-3.47 1.45a4.904 4.904 0 0 0 0 6.96c.93.93 2.16 1.45 3.47 1.45h6.77l-2.08-4.93h3.5l2.18 5.04v3.17zm-10.93-8.65a1.641 1.641 0 0 1 0-3.28 1.641 1.641 0 0 1 0 3.28m1.64 2.58a1.641 1.641 0 1 1-1.64-1.64c.91 0 1.64.74 1.64 1.64"
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
