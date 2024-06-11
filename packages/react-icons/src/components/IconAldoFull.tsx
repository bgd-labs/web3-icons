import * as React from "react";
import type { SVGProps } from "react";
const IconAldoFull = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      cx={16}
      cy={16}
      r={15}
      stroke="url(#paint0_linear_40_91)"
      strokeWidth={2}
    />
    <g clipPath="url(#circleClip)">
      <g
        style={{
          transform: "scale(0.8125)",
          transformOrigin: "50% 50%",
        }}
      >
        <path
          fill="#F69988"
          d="M16.34 31.86c8.61 0 15.59-6.98 15.59-15.59S24.95.68 16.34.68.75 7.66.75 16.27s6.98 15.59 15.59 15.59"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="m16.35 5.25 5.47 8.54-5.47 3.18-5.47-3.18zm-3.8 8.14 3.79-5.93 3.79 5.93-3.79 2.21z"
          clipRule="evenodd"
        />
        <path
          fill="#fff"
          d="M16.34 18.85 10 15.16l-.17.27a7.704 7.704 0 0 0 1.05 9.61c3.02 3.01 7.92 3.01 10.94 0 2.57-2.56 3-6.56 1.05-9.61l-.17-.27-6.34 3.69z"
        />
      </g>
    </g>
    <defs>
      <clipPath id="circleClip">
        <circle cx={16} cy={16} r={13} />
      </clipPath>
      <linearGradient
        id="paint0_linear_40_91"
        x1={26.976}
        y1={4.32}
        x2={6.59198}
        y2={28.352}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B6509E" />
        <stop offset={1} stopColor="#2EBAC6" />
      </linearGradient>
    </defs>
  </svg>
);
export default IconAldoFull;
