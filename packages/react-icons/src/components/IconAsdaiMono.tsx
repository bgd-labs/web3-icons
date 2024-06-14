import * as React from "react";
import type { SVGProps } from "react";
const IconAsdaiMono = (props: SVGProps<SVGSVGElement>) => (
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
        <g fill="currentColor" clipPath="url(#a)">
          <path d="M11.64 21.96h4.39c2.71 0 4.73-1.31 5.66-3.26H11.64zM16.02 10.03h-4.39v3.32h10.06c-.93-1.98-2.95-3.32-5.67-3.32M11.64 15.11v1.84h10.57c.04-.3.06-.6.06-.91V16c0-.3-.02-.6-.06-.89H11.63z" />
          <path d="M16 0C7.16 0 0 7.16 0 16s7.16 16 16 16 16-7.16 16-16S24.84 0 16 0m9.49 15.11h-1.5c.03.28.04.56.04.85V16c0 .32-.02.63-.06.95h1.51v1.75h-1.94c-1.07 2.86-3.86 4.83-7.53 4.83h-6.1V18.7H7.79v-1.75h2.12v-1.84H7.79v-1.75h2.12V8.47h6.1c3.71 0 6.52 1.99 7.56 4.89h1.9v1.75z" />
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
export default IconAsdaiMono;