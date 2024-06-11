import * as React from "react";
import type { SVGProps } from "react";
const IconAethFull = (props: SVGProps<SVGSVGElement>) => (
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
          d="M15.58 31.78c8.61 0 15.59-6.98 15.59-15.59S24.19.6 15.58.6-.01 7.58-.01 16.19s6.98 15.59 15.59 15.59"
        />
        <path
          fill="#3B3735"
          d="M15.96 22.64v6.31l7.8-11-7.8 4.68zm7.52-6.74L15.96 3.41v9.08z"
        />
        <path fill="#1F1D19" d="M15.96 13.2v7.73l7.45-4.33-7.45-3.41z" />
        <path fill="#959190" d="m7.73 15.9 7.52-12.49v9.08z" />
        <path fill="#403C3A" d="M15.25 13.2v7.73L7.8 16.6l7.45-3.41z" />
        <path fill="#959190" d="M15.25 22.64v6.31l-7.8-11 7.8 4.68z" />
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
export default IconAethFull;
