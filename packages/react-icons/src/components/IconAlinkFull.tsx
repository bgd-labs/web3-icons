import * as React from "react";
import type { SVGProps } from "react";
const IconAlinkFull = (props: SVGProps<SVGSVGElement>) => (
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
          fill="#fff"
          d="M16.28 32.45c8.84 0 16-7.16 16-16s-7.16-16-16-16-16 7.16-16 16 7.16 16 16 16"
        />
        <path
          fill="#3659D1"
          d="m16.3 2.88-2.49 1.43-6.79 3.92-2.49 1.43v13.57l2.49 1.43 6.85 3.92 2.49 1.43 2.49-1.43 6.72-3.92 2.49-1.43V9.66l-2.49-1.43-6.79-3.92-2.49-1.43zm-6.78 17.5v-7.85l6.79-3.92 6.79 3.92v7.84l-6.79 3.92-6.79-3.92z"
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
export default IconAlinkFull;
