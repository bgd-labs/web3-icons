import * as React from "react";
import type { SVGProps } from "react";
const IconAstkaaveMono = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <circle cx={16} cy={16} r={15} stroke="currentColor" strokeWidth={2} />
    <g clipPath="url(#my3x__circleClip)">
      <g
        style={{
          transform: "scale(.8125)",
          transformOrigin: "50% 50%",
        }}
      >
        <path
          fill="currentColor"
          d="M16 .92c-8.84 0-16 7.17-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16M13.03 17.7c-1.37.22-2.66-.71-2.89-2.08-.22-1.37.71-2.66 2.08-2.89 1.37-.22 2.66.71 2.89 2.08.22 1.37-.71 2.66-2.08 2.89m6.57 0c-1.37.22-2.66-.71-2.89-2.08-.22-1.37.71-2.66 2.08-2.89 1.37-.22 2.66.71 2.89 2.08.22 1.37-.71 2.66-2.08 2.89m5.52-.26c0-5.22-4.09-9.45-9.21-9.45S6.7 12.22 6.7 17.44H3.54c0-6.96 5.54-12.61 12.37-12.61s12.37 5.65 12.37 12.61z"
        />
      </g>
    </g>
    <defs>
      <clipPath id="my3x__circleClip">
        <circle cx={16} cy={16} r={13} />
      </clipPath>
    </defs>
  </svg>
);
export default IconAstkaaveMono;
