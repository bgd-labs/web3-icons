import * as React from "react";
import type { SVGProps } from "react";
const IconAfeiFull = (props: SVGProps<SVGSVGElement>) => (
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
          fill="#22996E"
          d="M16.53 32.01c8.84 0 16-7.16 16-16s-7.16-16-16-16-16 7.16-16 16 7.16 16 16 16"
        />
        <path
          fill="#fff"
          d="M16.53 23.14H7.77c-1.19 0-1.9-1.31-1.26-2.31l4.98-7.77c.37-.57 1-.92 1.68-.92h6.71c.68 0 1.32.35 1.68.92l4.98 7.77c.64 1-.08 2.31-1.26 2.31h-8.76zm.9-17.88 2.09 3.2a1 1 0 0 1-.84 1.55h-4.26c-.8 0-1.28-.9-.83-1.56l2.17-3.2a1 1 0 0 1 1.66.01z"
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
export default IconAfeiFull;
