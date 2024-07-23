import * as React from "react";
import type { SVGProps } from "react";
const IconAmkrFull = (props: SVGProps<SVGSVGElement>) => (
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
      stroke="url(#maker__paint0_linear_40_91)"
      strokeWidth={2}
    />
    <g clipPath="url(#maker__circleClip)">
      <g
        style={{
          transform: "scale(.8125)",
          transformOrigin: "50% 50%",
        }}
      >
        <g clipPath="url(#maker__clip0_298_619)">
          <path
            fill="#58B89C"
            d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16"
          />
          <path
            fill="#fff"
            d="M7.84 22.49H6v-14l9.71 7.03v6.97h-1.84v-6.08l-6.03-4.37zm10.29-6.07v6.08h-1.84v-6.97L26 8.5v14h-1.84V12.06l-6.03 4.37z"
          />
        </g>
        <defs>
          <clipPath id="maker__clip0_298_619">
            <path fill="#fff" d="M0 0h32v32H0z" />
          </clipPath>
        </defs>
      </g>
    </g>
    <defs>
      <linearGradient
        id="maker__paint0_linear_40_91"
        x1={26.976}
        x2={6.592}
        y1={4.32}
        y2={28.352}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B6509E" />
        <stop offset={1} stopColor="#2EBAC6" />
      </linearGradient>
      <clipPath id="maker__circleClip">
        <circle cx={16} cy={16} r={13} />
      </clipPath>
    </defs>
  </svg>
);
export default IconAmkrFull;
