import * as React from "react";
import type { SVGProps } from "react";
const IconAaaveFull = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <circle
      cx={16}
      cy={16}
      r={15}
      stroke="url(#aaave__paint0_linear_40_91)"
      strokeWidth={2}
    />
    <g clipPath="url(#aaave__circleClip)">
      <g
        style={{
          transform: "scale(.8125)",
          transformOrigin: "50% 50%",
        }}
      >
        <path
          fill="#9391F7"
          d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16"
        />
        <path
          fill="#fff"
          d="M13.03 16.78c1.37-.22 2.3-1.52 2.08-2.89a2.52 2.52 0 0 0-2.89-2.08c-1.37.22-2.3 1.52-2.08 2.89s1.52 2.3 2.89 2.08m6.58 0c1.37-.22 2.3-1.52 2.08-2.89a2.52 2.52 0 0 0-2.89-2.08c-1.37.22-2.3 1.52-2.08 2.89s1.52 2.3 2.89 2.08"
        />
        <path
          fill="#fff"
          d="M15.91 3.91c-6.83 0-12.37 5.65-12.37 12.61H6.7c0-5.22 4.09-9.45 9.21-9.45s9.21 4.23 9.21 9.45h3.16c0-6.96-5.54-12.61-12.37-12.61"
        />
      </g>
    </g>
    <defs>
      <linearGradient
        id="aaave__paint0_linear_40_91"
        x1={26.976}
        x2={6.592}
        y1={4.32}
        y2={28.352}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B6509E" />
        <stop offset={1} stopColor="#2EBAC6" />
      </linearGradient>
      <clipPath id="aaave__circleClip">
        <circle cx={16} cy={16} r={13} />
      </clipPath>
    </defs>
  </svg>
);
export default IconAaaveFull;
