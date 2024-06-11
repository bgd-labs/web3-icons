import * as React from "react";
import type { SVGProps } from "react";
const IconAbalFull = (props: SVGProps<SVGSVGElement>) => (
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
          d="M16.31 31.75C7.63 31.75.56 24.68.56 16S7.63.25 16.31.25 32.06 7.32 32.06 16s-7.07 15.75-15.75 15.75"
        />
        <path
          fill="#383D51"
          d="M16.31.5c8.55 0 15.5 6.95 15.5 15.5s-6.95 15.5-15.5 15.5S.81 24.55.81 16 7.76.5 16.31.5m0-.5c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16"
        />
        <path
          fill="#000"
          fillRule="evenodd"
          d="M20.65 17.91c3.77.55 6.4 1.8 6.4 3.25 0 1.97-4.81 3.56-10.74 3.56S5.57 23.13 5.57 21.16c0-1.45 2.63-2.7 6.4-3.25 1.43.28 2.89.41 4.34.41 1.42 0 2.85-.12 4.25-.39l.1-.02zm-1.62-5.94c3.42.38 5.89 1.44 5.89 2.7 0 1.57-3.86 2.85-8.61 2.85S7.7 16.25 7.7 14.67c0-1.26 2.47-2.32 5.89-2.7a17.7 17.7 0 0 0 5.36.01l.09-.01z"
          clipRule="evenodd"
        />
        <path
          fill="#000"
          d="M16.31 11.55c3.53 0 6.39-.96 6.39-2.13s-2.86-2.13-6.39-2.13-6.39.96-6.39 2.13 2.86 2.13 6.39 2.13"
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
export default IconAbalFull;
