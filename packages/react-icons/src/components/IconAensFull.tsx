import * as React from "react";
import type { SVGProps } from "react";
const IconAensFull = (props: SVGProps<SVGSVGElement>) => (
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
            d="M16 0c8.84 0 16 7.16 16 16s-7.16 16-16 16S0 24.84 0 16 7.16 0 16 0"
          />
          <path
            fill="#fff"
            d="M9.012 13.976c.211.443.725 1.32.725 1.32l5.94-9.788-5.8 4.038a2.64 2.64 0 0 0-.825.906 4.21 4.21 0 0 0-.04 3.534zm-2.356 3.222c.07.937.332 1.843.775 2.669a6.54 6.54 0 0 0 1.813 2.114l6.414 4.45s-4.008-5.759-7.401-11.498a5.9 5.9 0 0 1-.685-1.954 2.9 2.9 0 0 1 0-.936c-.09.16-.262.493-.262.493a7.7 7.7 0 0 0-.695 2.215c-.07.816-.06 1.632.02 2.437zm16.362.765c-.211-.443-.725-1.319-.725-1.319l-5.94 9.788 5.8-4.028a2.64 2.64 0 0 0 .825-.906 4.17 4.17 0 0 0 .04-3.535m2.356-3.222a6.7 6.7 0 0 0-.775-2.668 6.5 6.5 0 0 0-1.812-2.115l-6.414-4.45s4.007 5.76 7.4 11.499c.343.604.574 1.269.675 1.953q.075.47 0 .937c.09-.161.262-.494.262-.494.342-.694.574-1.44.695-2.215.07-.815.06-1.631-.02-2.437z"
          />
        </g>
        <defs>
          <linearGradient
            id="b"
            x1={25.787}
            x2={-5.306}
            y1={33.249}
            y2={-21.498}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#44BCF0" />
            <stop offset={0.38} stopColor="#7298F8" />
            <stop offset={1} stopColor="#A099FF" />
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
export default IconAensFull;