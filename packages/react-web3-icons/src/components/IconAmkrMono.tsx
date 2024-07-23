import * as React from "react";
import type { SVGProps } from "react";
const IconAmkrMono = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <circle cx={16} cy={16} r={15} stroke="currentColor" strokeWidth={2} />
    <g clipPath="url(#maker__circleClip)">
      <g
        style={{
          transform: "scale(.8125)",
          transformOrigin: "50% 50%",
        }}
      >
        <g clipPath="url(#maker__clip0_298_617)">
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M16 0C7.16 0 0 7.16 0 16s7.16 16 16 16 16-7.16 16-16S24.84 0 16 0m-.29 22.5h-1.84v-6.08l-6.03-4.37v10.44H6v-14l9.71 7.03zm10.29 0h-1.84V12.06l-6.03 4.37v6.08h-1.84v-6.97L26 8.51v14z"
            clipRule="evenodd"
          />
        </g>
        <defs>
          <clipPath id="maker__clip0_298_617">
            <path fill="#fff" d="M0 0h32v32H0z" />
          </clipPath>
        </defs>
      </g>
    </g>
    <defs>
      <clipPath id="maker__circleClip">
        <circle cx={16} cy={16} r={13} />
      </clipPath>
    </defs>
  </svg>
);
export default IconAmkrMono;
