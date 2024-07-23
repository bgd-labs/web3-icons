import * as React from "react";
import type { SVGProps } from "react";
const IconAbatFull = (props: SVGProps<SVGSVGElement>) => (
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
      stroke="url(#kuutw__paint0_linear_40_91)"
      strokeWidth={2}
    />
    <g clipPath="url(#kuutw__circleClip)">
      <g
        style={{
          transform: "scale(.8125)",
          transformOrigin: "50% 50%",
        }}
      >
        <g clipPath="url(#kuutw__7bqtd__clip0_292_125)">
          <path
            fill="#fff"
            d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16"
          />
          <path
            fill="#9E1F63"
            d="m20.85 20.08 6.83 3.91L16.06 3.93v8.17c.05.08 4.79 7.98 4.79 7.98"
          />
          <path fill="#662D91" d="M20.85 20.08h-9.62l-6.92 3.94L27.68 24z" />
          <path
            fill="#FF5000"
            d="m22.04 20.75-5.99-9.96V3.94L4.31 24.02l5.76-3.28h11.98zm-9.62-1.34 3.63-6.06 3.64 6.06z"
          />
        </g>
        <defs>
          <clipPath id="kuutw__7bqtd__clip0_292_125">
            <path fill="#fff" d="M0 0h32v32H0z" />
          </clipPath>
        </defs>
      </g>
    </g>
    <defs>
      <linearGradient
        id="kuutw__paint0_linear_40_91"
        x1={26.976}
        x2={6.592}
        y1={4.32}
        y2={28.352}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B6509E" />
        <stop offset={1} stopColor="#2EBAC6" />
      </linearGradient>
      <clipPath id="kuutw__circleClip">
        <circle cx={16} cy={16} r={13} />
      </clipPath>
    </defs>
  </svg>
);
export default IconAbatFull;
