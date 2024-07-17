import * as React from "react";
import type { SVGProps } from "react";
const IconAldoFull = (props: SVGProps<SVGSVGElement>) => (
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
      stroke="url(#03zcd__paint0_linear_40_91)"
      strokeWidth={2}
    />
    <g clipPath="url(#03zcd__circleClip)">
      <g
        style={{
          transform: "scale(.8125)",
          transformOrigin: "50% 50%",
        }}
      >
        <g clipPath="url(#03zcd__pav0j__clip0_297_35)">
          <path
            fill="#F69988"
            d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            d="m16.01 4.69 5.614 8.765-5.614 3.263-5.614-3.263zm-3.9 8.354L16 6.958l3.89 6.086L16 15.312z"
            clipRule="evenodd"
          />
          <path
            fill="#fff"
            d="M16 18.648 9.493 14.86l-.174.277A7.91 7.91 0 0 0 10.396 25c3.1 3.089 8.129 3.089 11.228 0a7.91 7.91 0 0 0 1.078-9.863l-.175-.277-6.507 3.787z"
          />
        </g>
        <defs>
          <clipPath id="03zcd__pav0j__clip0_297_35">
            <path fill="#fff" d="M0 0h32v32H0z" />
          </clipPath>
        </defs>
      </g>
    </g>
    <defs>
      <linearGradient
        id="03zcd__paint0_linear_40_91"
        x1={26.976}
        x2={6.592}
        y1={4.32}
        y2={28.352}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B6509E" />
        <stop offset={1} stopColor="#2EBAC6" />
      </linearGradient>
      <clipPath id="03zcd__circleClip">
        <circle cx={16} cy={16} r={13} />
      </clipPath>
    </defs>
  </svg>
);
export default IconAldoFull;
