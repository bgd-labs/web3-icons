import type { SVGProps } from "react";
const IconAtribeFull = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="100%"
    height="100%"
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
        <g clipPath="url(#clip0_298_930)">
          <path
            fill="#428AC9"
            d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16"
          />
          <path
            fill="#fff"
            d="M7.5 8.51c0-1.45 1.09-2.67 2.54-2.78 1.98-.15 3.97-.23 5.96-.23 2.27 0 4.4.12 5.96.23 1.45.11 2.54 1.33 2.54 2.78s-1.08 2.66-2.52 2.76c-1.99.15-3.99.22-5.98.23-2.36 0-4.46-.11-5.98-.23-1.44-.11-2.52-1.32-2.52-2.76m-.04 8.12c.09-.92.91-1.6 1.83-1.51h.04c.33.04.72.08 1.16.14.39.05.74.13 1.06.23 1.35.41 1.95 1.81 1.95 3.22v5.79c0 .83-.67 1.5-1.5 1.5h-1.87c-1.42 0-2.62-1.01-2.75-2.42-.2-2.31-.17-4.64.08-6.95m16.82 0a1.68 1.68 0 0 0-1.83-1.51h-.04c-.39.04-.77.09-1.16.14s-.74.13-1.06.23c-1.35.41-1.95 1.81-1.95 3.22v5.79c0 .83.67 1.5 1.5 1.5h1.87c1.42 0 2.62-1.01 2.75-2.42.2-2.31.18-4.64-.08-6.95"
          />
        </g>
        <defs>
          <clipPath id="clip0_298_930">
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
export default IconAtribeFull;
