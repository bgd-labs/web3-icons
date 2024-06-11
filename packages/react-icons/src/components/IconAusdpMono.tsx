import * as React from "react";
import type { SVGProps } from "react";
const IconAusdpMono = (props: SVGProps<SVGSVGElement>) => (
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
          d="M17.53 21.58h.91c1.41 0 2.42-.55 2.42-1.99s-1.05-2-2.35-2h-.97v-2.42h-3.05v2.42h3.05v3.99zM11.15 13.16c0 1.45 1.05 2 2.35 2h.97v-3.98h-.91c-1.41 0-2.42.55-2.42 1.98z"
        />
        <path
          fill="currentColor"
          d="M16 .4C7.16.4 0 7.56 0 16.4s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16m2.82 23.61h-1.29v3.84h-3.05v-3.83H8.55v-2.45h5.93v-3.99h-1.36c-3 0-5.04-1.69-5.04-4.38 0-3.08 2.33-4.48 5.11-4.48h1.29V4.88h3.05v3.83h5.93v2.45h-5.93v3.99h1.36c3 0 5.04 1.69 5.04 4.38 0 3.08-2.32 4.48-5.11 4.48"
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
export default IconAusdpMono;
