import * as React from "react";
import type { SVGProps } from "react";
const IconAlinkFull = (props: SVGProps<SVGSVGElement>) => (
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
      stroke="url(#chainlink__paint0_linear_40_91)"
      strokeWidth={2}
    />
    <g clipPath="url(#chainlink__circleClip)">
      <g
        style={{
          transform: "scale(.8125)",
          transformOrigin: "50% 50%",
        }}
      >
        <g clipPath="url(#chainlink__clip0_297_158)">
          <path
            fill="#fff"
            d="M16 32c8.84 0 16-7.16 16-16S24.84 0 16 0 0 7.16 0 16s7.16 16 16 16"
          />
          <path
            fill="#3659D1"
            d="m16.02 2.43-2.49 1.43-6.79 3.92-2.49 1.43v13.57l2.49 1.43 6.85 3.92 2.49 1.43 2.49-1.43 6.72-3.92 2.49-1.43V9.21l-2.49-1.43-6.79-3.92-2.49-1.43zm-6.78 17.5v-7.85l6.79-3.92 6.79 3.92v7.84l-6.79 3.92-6.79-3.92z"
          />
        </g>
        <defs>
          <clipPath id="chainlink__clip0_297_158">
            <path fill="#fff" d="M0 0h32v32H0z" />
          </clipPath>
        </defs>
      </g>
    </g>
    <defs>
      <linearGradient
        id="chainlink__paint0_linear_40_91"
        x1={26.976}
        x2={6.592}
        y1={4.32}
        y2={28.352}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B6509E" />
        <stop offset={1} stopColor="#2EBAC6" />
      </linearGradient>
      <clipPath id="chainlink__circleClip">
        <circle cx={16} cy={16} r={13} />
      </clipPath>
    </defs>
  </svg>
);
export default IconAlinkFull;
