import * as React from "react";
import type { SVGProps } from "react";
const IconAlendFull = (props: SVGProps<SVGSVGElement>) => (
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
      stroke="url(#ia8rd__paint0_linear_40_91)"
      strokeWidth={2}
    />
    <g clipPath="url(#ia8rd__circleClip)">
      <g
        style={{
          transform: "scale(.8125)",
          transformOrigin: "50% 50%",
        }}
      >
        <g clipPath="url(#ia8rd__w9a87__clip0_297_24)">
          <path
            fill="url(#ia8rd__w9a87__paint0_linear_297_24)"
            d="M16 32c8.836 0 16-7.164 16-16S24.836 0 16 0 0 7.164 0 16s7.164 16 16 16"
          />
          <path
            fill="#fff"
            d="m23.04 6.343-1.96-1.96-6.537 6.537 6.537 6.537 1.96-1.96-4.587-4.587 4.587-4.588zM17.457 21.08l-6.537-6.537-1.96 1.96 4.587 4.587-4.587 4.588 1.96 1.96 6.537-6.537zm-3.756-9.329 6.538 6.538-1.95 1.95L11.75 13.7z"
          />
        </g>
        <defs>
          <linearGradient
            id="ia8rd__w9a87__paint0_linear_297_24"
            x1={0}
            x2={32}
            y1={16}
            y2={16}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#01AEC9" />
            <stop offset={1} stopColor="#1E8FCA" />
          </linearGradient>
          <clipPath id="ia8rd__w9a87__clip0_297_24">
            <path fill="#fff" d="M0 0h32v32H0z" />
          </clipPath>
        </defs>
      </g>
    </g>
    <defs>
      <linearGradient
        id="ia8rd__paint0_linear_40_91"
        x1={26.976}
        x2={6.592}
        y1={4.32}
        y2={28.352}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B6509E" />
        <stop offset={1} stopColor="#2EBAC6" />
      </linearGradient>
      <clipPath id="ia8rd__circleClip">
        <circle cx={16} cy={16} r={13} />
      </clipPath>
    </defs>
  </svg>
);
export default IconAlendFull;
