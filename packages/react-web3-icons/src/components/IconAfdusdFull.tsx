import * as React from "react";
import type { SVGProps } from "react";
const IconAfdusdFull = (props: SVGProps<SVGSVGElement>) => (
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
      stroke="url(#e74vlh__paint0_linear_40_91)"
      strokeWidth={2}
    />
    <g clipPath="url(#e74vlh__circleClip)">
      <g
        style={{
          transform: "scale(.8125)",
          transformOrigin: "50% 50%",
        }}
      >
        <g clipPath="url(#e74vlh__clip0_294_284)">
          <path
            fill="#0B0E11"
            d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16"
          />
          <path
            fill="#fff"
            d="M23.37 11.51h-5.45v2.35h5.45v3.84h-9.29V7.66h9.29z"
          />
          <path fill="#00E98D" d="M17.92 20.06v4.28H8.63v-4.28z" />
        </g>
        <defs>
          <clipPath id="e74vlh__clip0_294_284">
            <path fill="#fff" d="M0 0h32v32H0z" />
          </clipPath>
        </defs>
      </g>
    </g>
    <defs>
      <linearGradient
        id="e74vlh__paint0_linear_40_91"
        x1={26.976}
        x2={6.592}
        y1={4.32}
        y2={28.352}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B6509E" />
        <stop offset={1} stopColor="#2EBAC6" />
      </linearGradient>
      <clipPath id="e74vlh__circleClip">
        <circle cx={16} cy={16} r={13} />
      </clipPath>
    </defs>
  </svg>
);
export default IconAfdusdFull;
