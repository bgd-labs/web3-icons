import * as React from "react";
import type { SVGProps } from "react";
const IconAbusdFull = (props: SVGProps<SVGSVGElement>) => (
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
      stroke="url(#busd__paint0_linear_40_91)"
      strokeWidth={2}
    />
    <g clipPath="url(#busd__circleClip)">
      <g
        style={{
          transform: "scale(.8125)",
          transformOrigin: "50% 50%",
        }}
      >
        <g clipPath="url(#busd__clip0_292_114)">
          <path
            fill="#fff"
            d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16"
          />
          <path
            fill="#F0B90B"
            d="m16 3.25 3.18 3.18-7.98 7.98-3.18-3.18zM8.03 20.78l3.18 3.18 12.75-12.75-3.18-3.18zm4.78 4.78 3.18 3.19L28.74 16l-3.18-3.18zM9.61 16l-3.18-3.18L3.25 16l3.18 3.18z"
          />
        </g>
        <defs>
          <clipPath id="busd__clip0_292_114">
            <path fill="#fff" d="M0 0h32v32H0z" />
          </clipPath>
        </defs>
      </g>
    </g>
    <defs>
      <linearGradient
        id="busd__paint0_linear_40_91"
        x1={26.976}
        x2={6.592}
        y1={4.32}
        y2={28.352}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B6509E" />
        <stop offset={1} stopColor="#2EBAC6" />
      </linearGradient>
      <clipPath id="busd__circleClip">
        <circle cx={16} cy={16} r={13} />
      </clipPath>
    </defs>
  </svg>
);
export default IconAbusdFull;
