import * as React from "react";
import type { SVGProps } from "react";
const IconAmaiFull = (props: SVGProps<SVGSVGElement>) => (
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
          d="M16.56 32.45c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16"
        />
        <path
          stroke="url(#b)"
          strokeMiterlimit={5.12}
          strokeWidth={0.75}
          d="M16.56 29.26c7.075 0 12.81-5.735 12.81-12.81S23.635 3.64 16.56 3.64 3.75 9.375 3.75 16.45s5.735 12.81 12.81 12.81Z"
        />
        <path
          fill="#fff"
          d="M25.17 17.99h-2.56V15.7h2.56v-1.84h-2.56v-3.73h-1.56l-1.77 3.73h-5.64l-1.76-3.73H10.3v3.73H7.74v1.84h2.56v2.29H7.74v1.84h2.56v3.12h1.74v-3.12h2.52l1.47 3.12h.86l1.46-3.12h2.51v3.12h1.74v-3.12h2.56v-1.84zm-6.76-2.29-1.09 2.29h-1.74L14.5 15.7zm-6.37 2.29V15.7h.58l1.08 2.29zm7.17 0 1.08-2.29h.57v2.29z"
        />
        <defs>
          <linearGradient
            id="a"
            x1={16.562}
            x2={16.562}
            y1={0.454}
            y2={32.454}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F1A9AB" />
            <stop offset={0.21} stopColor="#EA8285" />
            <stop offset={0.52} stopColor="#E65E5F" />
            <stop offset={1} stopColor="#EB676A" />
          </linearGradient>
          <linearGradient
            id="b"
            x1={16.562}
            x2={16.562}
            y1={3.206}
            y2={29.689}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D03B38" />
            <stop offset={1} stopColor="#EE8E90" />
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
export default IconAmaiFull;
