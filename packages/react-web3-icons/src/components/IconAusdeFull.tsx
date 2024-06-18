import type { SVGProps } from "react";
const IconAusdeFull = (props: SVGProps<SVGSVGElement>) => (
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
        <g clipPath="url(#clip0_298_1077)">
          <path
            fill="#fff"
            d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16"
          />
          <path
            fill="#0091DA"
            d="M29.68 24.3C31.15 21.88 32 19.04 32 16c0-8.84-7.16-16-16-16S0 7.16 0 16c0 3.02.84 5.84 2.29 8.25L15.51 1.32v8.67l-7.58 13.8c-1.59.58-3.08 1.32-4.43 2.2C6.43 29.65 10.94 32 16 32s9.56-2.35 12.5-6.01a21.2 21.2 0 0 0-4.5-2.23L16.44 9.99V1.32l13.25 22.97zm-9.26-1.5a24.6 24.6 0 0 0-8.84 0L16 15.14z"
          />
        </g>
        <defs>
          <clipPath id="clip0_298_1077">
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
export default IconAusdeFull;