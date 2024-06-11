import * as React from "react";
import type { SVGProps } from "react";
const IconAxdaiMono = (props: SVGProps<SVGSVGElement>) => (
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
          d="M16.25.03c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16m9.54 25.56c-1.2 1.2-3.15 1.2-4.35 0l-5.2-5.2-5.2 5.2c-1.2 1.2-3.15 1.2-4.35 0s-1.2-3.15 0-4.35l4.53-4.53c.37-.37.37-.97 0-1.34l-4.53-4.53c-1.2-1.2-1.2-3.15 0-4.35s3.15-1.2 4.35 0l5.19 5.21h.01l9.55 9.54c1.2 1.2 1.2 3.15 0 4.35m.04-14.79a3.03 3.03 0 0 1-4.28 0l-.07-.07a3.03 3.03 0 0 1 0-4.28 3.03 3.03 0 0 1 4.28 0l.07.07a3.03 3.03 0 0 1 0 4.28"
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
export default IconAxdaiMono;
