import * as React from "react";
import type { SVGProps } from "react";
const IconAusdpMono = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <circle cx={16} cy={16} r={15} stroke="currentColor" strokeWidth={2} />
    <g clipPath="url(#paxdollar__circleClip)">
      <g
        style={{
          transform: "scale(.8125)",
          transformOrigin: "50% 50%",
        }}
      >
        <g fill="currentColor" clipPath="url(#paxdollar__clip0_298_343)">
          <path d="M23.58 15.37c0 .05 0 .11-.01.16 0-.05.01-.11.01-.16m-11.43-4.59c-2.8 2.01-3.73 5.75-1.86 8.65 0 0 .01.02.02.03 1.87 2.88 5.72 3.71 8.6 1.84 2.89-1.87 3.29-5.51 1.86-8.65-1.47-3.23-5.48-4.11-8.62-1.87" />
          <path d="M16 0C7.16 0 0 7.16 0 16s7.16 16 16 16 16-7.16 16-16S24.84 0 16 0m8.87 21.18c-6.39 2.78-6.77 8.25-12.82 5.3a7.7 7.7 0 0 1-2.5-1.97c-4.18-.68-6.98-2.85-4.47-8.55 2.18-4.95.23-9.82 6.92-9.6 1.84-1.72 3.97-2.28 6.39-.58 1.97 1.38 4.01 1.54 6.63 2.02 2.38.44 2.89 2.87 1.8 5.96 1.66 2.81 1.65 5.86-1.94 7.42z" />
        </g>
        <defs>
          <clipPath id="paxdollar__clip0_298_343">
            <path fill="#fff" d="M0 0h32v32H0z" />
          </clipPath>
        </defs>
      </g>
    </g>
    <defs>
      <clipPath id="paxdollar__circleClip">
        <circle cx={16} cy={16} r={13} />
      </clipPath>
    </defs>
  </svg>
);
export default IconAusdpMono;
