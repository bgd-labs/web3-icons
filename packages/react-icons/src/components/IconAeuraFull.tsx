import * as React from "react";
import type { SVGProps } from "react";
const IconAeuraFull = (props: SVGProps<SVGSVGElement>) => (
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
            d="M16 32c8.836 0 16-7.163 16-16S24.836 0 16 0 0 7.164 0 16s7.164 16 16 16"
          />
          <path
            fill="#FFF6F0"
            d="M5.203 13.137 16 2.402l10.797 10.735-5.296 5.265-5.398-5.358-.093-.092-.092.092-5.398 5.368-5.306-5.265z"
          />
          <path
            fill="#2A363A"
            d="M7.82 20.085h4.239v1.21H9.083v1.54h2.863v1.211H9.083v1.56h3.089v1.211H7.81v-6.722zm10.448 0v4.392c0 .77-.205 1.365-.616 1.807-.4.43-1.005.656-1.806.656-.8 0-1.406-.215-1.816-.656-.4-.431-.606-1.037-.606-1.807v-4.392h1.262v4.392c0 .4.093.708.277.934s.473.339.873.339.687-.113.872-.339.277-.534.277-.934v-4.392zm5.737 6.722h-1.262v-2.012a.54.54 0 0 0-.123-.369c-.072-.092-.206-.144-.39-.144h-1.458v2.535H19.51v-6.722h2.576c.349 0 .647.051.913.144.267.092.483.225.657.4.175.164.318.36.4.585.093.226.144.462.144.718v.226c0 .277-.072.534-.226.78-.143.236-.37.42-.677.544v.174c.226.021.4.113.523.257a.79.79 0 0 1 .206.554v2.32zm-3.243-3.746h1.211c.308 0 .544-.072.698-.215.164-.144.236-.35.236-.616v-.113a.8.8 0 0 0-.236-.575c-.164-.164-.39-.246-.698-.246h-1.211z"
          />
        </g>
        <defs>
          <linearGradient
            id="b"
            x1={16}
            x2={16}
            y1={0}
            y2={32}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#99B998" />
            <stop offset={1} stopColor="#FDCEAA" />
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
export default IconAeuraFull;
