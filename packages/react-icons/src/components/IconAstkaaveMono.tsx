import * as React from "react";
import type { SVGProps } from "react";
const IconAstkaaveMono = (props: SVGProps<SVGSVGElement>) => (
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
          <path d="M16 0C7.16 0 0 7.16 0 16s7.16 16 16 16 16-7.16 16-16S24.84 0 16 0m9.49 18.45a6.26 6.26 0 0 1-1.51 3.82c-.91 1.11-1.97 2.09-3.15 2.92a28.3 28.3 0 0 1-4.51 2.64c-.17.08-.36.08-.53 0a28.3 28.3 0 0 1-4.51-2.64c-1.18-.82-2.24-1.8-3.15-2.92a6.26 6.26 0 0 1-1.51-3.82V8.79c0-.29.19-.54.47-.63l8.78-2.63c.12-.04.25-.04.38 0l8.78 2.63c.28.08.47.34.47.63v9.66z" />
          <path d="m21.45 20.32-4.16-10.05c-.15-.45-.57-.76-1.04-.77h-.37c-.48 0-.9.32-1.04.77l-1.81 4.37h-1.36c-.41 0-.75.33-.75.75s.33.76.75.76h.74l-1.73 4.17a.853.853 0 0 0 .15.84c.14.15.35.22.55.21.15 0 .3-.05.43-.14.13-.1.23-.23.3-.38l1.9-4.71h1.32c.41 0 .75-.33.75-.75v-.02c0-.41-.33-.75-.75-.75h-.7l1.45-3.61 3.95 9.83c.06.15.17.28.3.38.12.09.27.14.43.14.21.01.41-.07.55-.21a.76.76 0 0 0 .2-.56c0-.1 0-.19-.04-.29z" />
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
export default IconAstkaaveMono;
