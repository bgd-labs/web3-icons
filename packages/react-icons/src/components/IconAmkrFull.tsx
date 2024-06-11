import * as React from "react";
import type { SVGProps } from "react";
const IconAmkrFull = (props: SVGProps<SVGSVGElement>) => (
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
          fill="#58B89C"
          d="M16.45 32.1c8.837 0 16-7.164 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16"
        />
        <path
          fill="#fff"
          d="M8.29 12.15v10.44H6.45v-14l9.71 7.03v6.97h-1.84v-6.08l-6.03-4.37zm10.29 4.37v6.08h-1.84v-6.97l9.71-7.03v14h-1.84V12.16l-6.03 4.37z"
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
export default IconAmkrFull;
