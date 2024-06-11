import * as React from "react";
import type { SVGProps } from "react";
const IconAkncFull = (props: SVGProps<SVGSVGElement>) => (
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
          fill="#31CB9E"
          d="M16.48 32.01c8.83 0 16-7.17 16-16s-7.17-16-16-16-16 7.17-16 16 7.17 16 16 16"
        />
        <path
          fill="#fff"
          d="m14.75 17.51 9.41 5.06c.32.16.35.58.06.77l-6.37 4.58c-.29.22-.7.06-.8-.29l-2.3-10.11zm-.29-12.89c.38-.26.9.03.8.48l-2.53 10.91 2.5 10.91c.1.42-.42.74-.8.48l-6.4-4.58c-.32-.22-.51-.61-.51-.99V10.18c0-.38.19-.77.51-.99l6.43-4.58zm10.3 6.24c.32-.19.77.03.77.42v9.47c0 .35-.42.58-.77.42l-9.57-5.15 9.57-5.15zm-7.71-6.47c.06-.35.51-.48.8-.29l6.37 4.54c.29.19.26.61-.06.77l-9.41 5.09z"
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
export default IconAkncFull;
