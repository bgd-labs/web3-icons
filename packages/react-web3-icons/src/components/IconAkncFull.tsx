import * as React from "react";
import type { SVGProps } from "react";
const IconAkncFull = (props: SVGProps<SVGSVGElement>) => (
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
      stroke="url(#rx262h__paint0_linear_40_91)"
      strokeWidth={2}
    />
    <g clipPath="url(#rx262h__circleClip)">
      <g
        style={{
          transform: "scale(.8125)",
          transformOrigin: "50% 50%",
        }}
      >
        <g clipPath="url(#rx262h__clip0_294_256)">
          <path
            fill="#31CB9E"
            d="M16 32c8.83 0 16-7.17 16-16S24.83 0 16 0 0 7.17 0 16s7.17 16 16 16"
          />
          <path
            fill="#fff"
            d="m14.27 17.5 9.41 5.06c.32.16.35.58.06.77l-6.37 4.58c-.29.22-.7.06-.8-.29l-2.3-10.11zm-.29-12.89c.38-.26.9.03.8.48L12.25 16l2.5 10.91c.1.42-.42.74-.8.48l-6.4-4.58c-.32-.22-.51-.61-.51-.99V10.17c0-.38.19-.77.51-.99l6.43-4.58zm10.3 6.24c.32-.19.77.03.77.42v9.47c0 .35-.42.58-.77.42l-9.57-5.15 9.57-5.15zm-7.71-6.47c.06-.35.51-.48.8-.29l6.37 4.54c.29.19.26.61-.06.77l-9.41 5.09z"
          />
        </g>
        <defs>
          <clipPath id="rx262h__clip0_294_256">
            <path fill="#fff" d="M0 0h32v32H0z" />
          </clipPath>
        </defs>
      </g>
    </g>
    <defs>
      <linearGradient
        id="rx262h__paint0_linear_40_91"
        x1={26.976}
        x2={6.592}
        y1={4.32}
        y2={28.352}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B6509E" />
        <stop offset={1} stopColor="#2EBAC6" />
      </linearGradient>
      <clipPath id="rx262h__circleClip">
        <circle cx={16} cy={16} r={13} />
      </clipPath>
    </defs>
  </svg>
);
export default IconAkncFull;
