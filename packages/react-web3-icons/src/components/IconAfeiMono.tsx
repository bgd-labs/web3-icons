import * as React from "react";
import type { SVGProps } from "react";
const IconAfeiMono = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <circle cx={16} cy={16} r={15} stroke="currentColor" strokeWidth={2} />
    <g clipPath="url(#afei__circleClip)">
      <g
        style={{
          transform: "scale(.8125)",
          transformOrigin: "50% 50%",
        }}
      >
        <path
          fill="currentColor"
          d="M16 0C7.16 0 0 7.16 0 16s7.16 16 16 16 16-7.16 16-16S24.84 0 16 0m-2.94 8.44 2.17-3.2a1 1 0 0 1 1.66.01l2.09 3.2a1 1 0 0 1-.84 1.55h-4.26c-.8 0-1.28-.9-.83-1.56zm11.69 14.69H7.24c-1.19 0-1.9-1.31-1.26-2.31l4.98-7.77c.37-.57 1-.92 1.68-.92h6.71c.68 0 1.32.35 1.68.92l4.98 7.77c.64 1-.08 2.31-1.26 2.31"
        />
      </g>
    </g>
    <defs>
      <clipPath id="afei__circleClip">
        <circle cx={16} cy={16} r={13} />
      </clipPath>
    </defs>
  </svg>
);
export default IconAfeiMono;
