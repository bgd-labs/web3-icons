import * as React from "react";
import type { SVGProps } from "react";
const IconAlusdMono = (props: SVGProps<SVGSVGElement>) => (
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
          d="M31.73 21.36a15.96 15.96 0 0 1-12.51 11.27v-4.55a7.5 7.5 0 0 0 3.96-3.48c.57-1.08.87-2.29.86-3.52 0-4.02-2.91-5.63-5.63-6.83l-1.38-.61c-1.48-.66-2.6-1.25-2.6-2.26 0-1.39 1.22-2.14 2.36-2.14 1.22 0 1.91.45 2.64 1.72l.57.98 3.65-2.34-.48-.88a7.1 7.1 0 0 0-3.95-3.4V1.14c.35.06.7.14 1.06.23.03 0 .07.02.11.02s.08.02.12.03h.03c.1.02.19.05.29.08 8.48 2.47 13.36 11.35 10.89 19.83z"
        />
        <path
          fill="currentColor"
          d="M19.57 21.31c0 1.83-1.66 2.97-3.19 2.97-1.84 0-2.89-1.52-3.09-2.93l-.17-1.22-4.41 1.24.2.99c.63 3.11 2.75 5.34 5.64 6.02v4.41c-.78-.09-1.56-.24-2.32-.45-.11-.02-.21-.06-.32-.09A15.996 15.996 0 0 1 .38 16.89V1.52c0-.35.28-.63.63-.63h13.54v4.4a6.48 6.48 0 0 0-3.77 2.92 6.1 6.1 0 0 0-.81 3.1v.09c.04 3.59 2.68 5.09 5.17 6.22l1.25.54.1.05c1.98.9 3.09 1.5 3.09 3.1z"
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
export default IconAlusdMono;
