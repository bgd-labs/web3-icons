import * as React from "react";
import type { SVGProps } from "react";
const IconAmaticFull = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="32px"
    height="32px"
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
        <g clipPath="url(#a)">
          <path
            fill="url(#b)"
            d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16"
          />
          <path
            fill="#fff"
            d="m20.22 19.15 4.14-2.39c.22-.13.35-.36.35-.61v-4.78c0-.25-.14-.49-.35-.61l-4.14-2.39a.7.7 0 0 0-.71 0l-4.14 2.39c-.22.13-.35.36-.35.61v8.53l-2.9 1.67-2.9-1.67v-3.35l2.9-1.67 1.91 1.1v-2.25l-1.56-.9a.7.7 0 0 0-.71 0l-4.14 2.39c-.22.13-.35.36-.35.61v4.77c0 .25.14.49.35.61l4.14 2.39c.22.13.49.13.71 0l4.14-2.39c.22-.13.35-.36.35-.61v-8.53l.05-.03 2.85-1.64 2.9 1.67v3.35l-2.9 1.67-1.91-1.1v2.25l1.56.9c.22.13.49.13.71 0z"
          />
        </g>
        <defs>
          <linearGradient
            id="b"
            x1={0.1}
            x2={24.13}
            y1={6.27}
            y2={20.98}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9433BD" />
            <stop offset={1} stopColor="#7342DB" />
          </linearGradient>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h32v32H0z" />
          </clipPath>
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
export default IconAmaticFull;
