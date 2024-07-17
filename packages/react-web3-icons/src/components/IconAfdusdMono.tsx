import * as React from "react";
import type { SVGProps } from "react";
const IconAfdusdMono = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <circle cx={16} cy={16} r={15} stroke="currentColor" strokeWidth={2} />
    <g clipPath="url(#fyr2z__circleClip)">
      <g
        style={{
          transform: "scale(.8125)",
          transformOrigin: "50% 50%",
        }}
      >
        <path
          fill="currentColor"
          d="M16 0C7.16 0 0 7.16 0 16s7.16 16 16 16 16-7.16 16-16S24.84 0 16 0m1.92 24.34H8.63v-4.28h9.29zm5.46-12.83h-5.45v2.35h5.45v3.84h-9.29V7.66h9.29z"
        />
      </g>
    </g>
    <defs>
      <clipPath id="fyr2z__circleClip">
        <circle cx={16} cy={16} r={13} />
      </clipPath>
    </defs>
  </svg>
);
export default IconAfdusdMono;
