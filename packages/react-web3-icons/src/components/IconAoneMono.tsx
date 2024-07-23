import * as React from "react";
import type { SVGProps } from "react";
const IconAoneMono = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <circle cx={16} cy={16} r={15} stroke="currentColor" strokeWidth={2} />
    <g clipPath="url(#aone__circleClip)">
      <g
        style={{
          transform: "scale(.8125)",
          transformOrigin: "50% 50%",
        }}
      >
        <g fill="currentColor" clipPath="url(#aone__harmony__clip0_298_374)">
          <path d="M7.14 21.01v1.21c0 1.55 1.21 2.76 2.75 2.76s2.75-1.21 2.75-2.76l.07-4.91c-1.14.2-2.21.47-3.22.94-1.48.61-2.35 1.68-2.35 2.76m5.5-11.17c0-1.55-1.21-2.76-2.75-2.76S7.14 8.36 7.14 9.84v7.54c.47-.4 1.01-.67 1.54-.94 1.27-.54 2.62-.94 3.96-1.14zm12.21 1.21V9.84c0-1.55-1.21-2.76-2.75-2.76s-2.75 1.21-2.75 2.76v4.98c1.14-.2 2.21-.47 3.22-.94 1.48-.67 2.35-1.68 2.28-2.83m-5.43 11.17c0 1.55 1.21 2.76 2.75 2.76s2.75-1.21 2.75-2.76v-7.54c-.47.4-1.01.67-1.54.94-1.27.54-2.62.94-3.96 1.14z" />
          <path d="M16 0C7.16 0 0 7.16 0 16s7.16 16 16 16 16-7.16 16-16S24.84 0 16 0m10.8 22.15c0 2.49-2.01 4.51-4.56 4.57-2.62.07-4.69-2.02-4.76-4.57V16.9c-.47.07-.94.07-1.48.07s-1.01.07-1.48.07v5.18c0 2.49-2.01 4.51-4.56 4.57-2.62.07-4.7-2.02-4.76-4.57V9.84c.07-2.49 2.08-4.57 4.56-4.57 2.62-.07 4.76 2.02 4.76 4.57v5.32c.47-.07.94-.07 1.48-.07s1.01-.07 1.48-.07V9.84c.07-2.56 2.15-4.64 4.7-4.64s4.63 2.09 4.63 4.64v12.31z" />
        </g>
        <defs>
          <clipPath id="aone__harmony__clip0_298_374">
            <path fill="#fff" d="M0 0h32v32H0z" />
          </clipPath>
        </defs>
      </g>
    </g>
    <defs>
      <clipPath id="aone__circleClip">
        <circle cx={16} cy={16} r={13} />
      </clipPath>
    </defs>
  </svg>
);
export default IconAoneMono;
