import * as React from "react";
import type { SVGProps } from "react";
const IconArplMono = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <circle cx={16} cy={16} r={15} stroke="currentColor" strokeWidth={2} />
    <g clipPath="url(#uyhey__circleClip)">
      <g
        fill="currentColor"
        style={{
          transform: "scale(.8125)",
          transformOrigin: "50% 50%",
        }}
      >
        <path d="M18 15.92c.51-.51.51-1.34 0-1.85a1.31 1.31 0 0 0-1.85 0 1.31 1.31 0 0 0 0 1.85c.51.51 1.34.51 1.85 0" />
        <path d="M16.02.78c-.55 0-1.1.03-1.64.08C6.3 1.67 0 8.49 0 16.78c0 3.66 1.24 7.02 3.31 9.72l5.35-5.35c.15-.15.4-.15.55 0s.15.4 0 .55L3.8 27.11c.09.11.19.21.28.31l6.51-6.51c.15-.15.4-.15.55 0s.15.4 0 .55L4.6 28c.09.1.19.19.29.28l5.45-5.45c.15-.15.4-.15.55 0s.15.4 0 .55L5.47 28.8c2.81 2.46 6.49 3.97 10.52 3.97.55 0 1.1-.03 1.64-.08 8.08-.81 14.38-7.63 14.38-15.92 0-8.84-7.16-16-16-16zm2.99 16.37c-.6.6-1.21 1.11-1.82 1.53l-.4 2.09-1.75 1.75-.69-2.55c-.51.09-.96.07-1.33-.07l-.81.81-.87-.87.8-.8c-.14-.37-.16-.82-.07-1.33l-2.55-.69 1.75-1.75 2.09-.39c.42-.61.94-1.23 1.54-1.83 2.55-2.55 7.12-3.02 7.12-3.02s-.47 4.58-3.02 7.12z" />
      </g>
    </g>
    <defs>
      <clipPath id="uyhey__circleClip">
        <circle cx={16} cy={16} r={13} />
      </clipPath>
    </defs>
  </svg>
);
export default IconArplMono;
