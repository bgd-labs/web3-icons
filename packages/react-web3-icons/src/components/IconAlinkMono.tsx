import * as React from "react";
import type { SVGProps } from "react";
const IconAlinkMono = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <circle cx={16} cy={16} r={15} stroke="currentColor" strokeWidth={2} />
    <g clipPath="url(#1r7t1__circleClip)">
      <g
        fill="currentColor"
        style={{
          transform: "scale(.8125)",
          transformOrigin: "50% 50%",
        }}
      >
        <path d="M16 0C7.16 0 0 7.16 0 16s7.16 16 16 16 16-7.16 16-16S24.84 0 16 0m9.3 24.21-6.72 3.92-2.49 1.43-2.49-1.43-6.85-3.92-2.49-1.43V9.21l2.49-1.43 6.79-3.92 2.49-1.43 2.49 1.43 6.79 3.92 2.49 1.43v13.57l-2.49 1.43z" />
        <path d="M9.24 12.07v7.85l6.78 3.92 6.79-3.92v-7.85l-6.79-3.92z" />
      </g>
    </g>
    <defs>
      <clipPath id="1r7t1__circleClip">
        <circle cx={16} cy={16} r={13} />
      </clipPath>
    </defs>
  </svg>
);
export default IconAlinkMono;
