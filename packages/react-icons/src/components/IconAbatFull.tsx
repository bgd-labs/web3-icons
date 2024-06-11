import * as React from "react";
import type { SVGProps } from "react";
const IconAbatFull = (props: SVGProps<SVGSVGElement>) => (
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
          d="M16.69 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16"
        />
        <path
          fill="#9E1F63"
          d="m21.54 20.08 6.83 3.91L16.75 3.93v8.17c.05.08 4.79 7.98 4.79 7.98"
        />
        <path fill="#662D91" d="M21.54 20.08h-9.62L5 24.02 28.37 24z" />
        <path
          fill="#FF5000"
          d="m22.73 20.75-5.99-9.96V3.94L5 24.02l5.76-3.28h11.98zm-9.62-1.34 3.63-6.06 3.64 6.06z"
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
export default IconAbatFull;
