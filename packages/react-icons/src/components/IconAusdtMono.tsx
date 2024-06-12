import * as React from "react";
import type { SVGProps } from "react";
const IconAusdtMono = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="32px"
    height="32px"
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
        <g
          fill="currentColor"
          fillRule="evenodd"
          clipPath="url(#a)"
          clipRule="evenodd"
        >
          <path d="M17.92 14.07v2.64c-.11.01-.72.06-1.93.06-1.01 0-1.73-.04-1.99-.06v-2.64c-3.89.17-6.79.85-6.79 1.66s2.9 1.49 6.79 1.66c.25 0 .96.04 1.97.04 1.27 0 1.83-.03 1.94-.04 3.88-.17 6.77-.84 6.77-1.65s-2.89-1.48-6.77-1.66z" />
          <path d="M16 0C7.16 0 0 7.16 0 16s7.16 16 16 16 16-7.16 16-16S24.84 0 16 0m1.92 18.03v7.58h-3.91v-7.58c-4.4-.2-7.71-1.07-7.71-2.12s3.31-1.92 7.71-2.12v-2.36H8.6V7.82h14.74v3.61h-5.41v2.37c4.39.2 7.69 1.07 7.69 2.12s-3.3 1.91-7.69 2.12z" />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h32v32H0z" />
          </clipPath>
        </defs>
      </g>
    </g>
    <defs>
      <clipPath id="circleClip">
        <circle cx={16} cy={16} r={13} />
      </clipPath>
    </defs>
  </svg>
);
export default IconAusdtMono;
