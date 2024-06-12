import * as React from "react";
import type { SVGProps } from "react";
const IconAaaveFull = (props: SVGProps<SVGSVGElement>) => (
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
        <g clipPath="url(#a)">
          <path
            fill="url(#b)"
            d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16"
          />
          <path
            fill="#fff"
            d="M23 22.37 17.59 9.29c-.19-.59-.74-.99-1.36-1.01h-.48c-.62.01-1.16.42-1.36 1.01l-2.35 5.7h-1.78a.97.97 0 0 0-.97.97c0 .55.44.98.97.98h.96l-2.25 5.43c-.04.12-.07.24-.07.37-.01.27.09.53.27.73.19.19.45.29.72.28.2 0 .4-.07.56-.19.17-.13.3-.3.39-.49l2.47-6.13h1.72c.53 0 .97-.43.97-.97v-.03c0-.53-.44-.96-.97-.97h-.92L16 10.26l5.15 12.8c.08.2.22.36.39.49.16.12.36.18.56.19.27.01.53-.09.72-.28.18-.2.28-.46.27-.73 0-.13-.02-.25-.07-.37z"
          />
        </g>
        <defs>
          <linearGradient
            id="b"
            x1={27.87}
            x2={4.11}
            y1={5.91}
            y2={26.07}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B6509E" />
            <stop offset={1} stopColor="#2EBAC6" />
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
export default IconAaaveFull;
