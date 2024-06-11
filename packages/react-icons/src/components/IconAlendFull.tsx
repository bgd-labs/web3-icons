import * as React from "react";
import type { SVGProps } from "react";
const IconAlendFull = (props: SVGProps<SVGSVGElement>) => (
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
          fill="url(#a)"
          d="M15.81 31.86c8.61 0 15.59-6.98 15.59-15.59S24.42.68 15.81.68.22 7.66.22 16.27 7.2 31.86 15.81 31.86"
        />
        <path
          fill="#fff"
          d="m22.67 6.86-1.91-1.91-6.37 6.37 6.37 6.37 1.91-1.91-4.47-4.47 4.47-4.47zm-5.44 14.36-6.37-6.37-1.91 1.91 4.47 4.47-4.47 4.47 1.91 1.91 6.37-6.37zm-3.66-9.09 6.37 6.37-1.9 1.9-6.37-6.37z"
        />
        <defs>
          <linearGradient
            id="a"
            x1={0.22}
            x2={31.4}
            y1={16.27}
            y2={16.27}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#01AEC9" />
            <stop offset={1} stopColor="#1E8FCA" />
          </linearGradient>
        </defs>
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
export default IconAlendFull;
