import * as React from "react";
import type { SVGProps } from "react";
const IconAdaiFull = (props: SVGProps<SVGSVGElement>) => (
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
          d="M15.7 31.86c8.61 0 15.59-6.98 15.59-15.59S24.31.68 15.7.68.11 7.66.11 16.27 7.09 31.86 15.7 31.86"
        />
        <path
          fill="#fff"
          d="M24.94 13.7h-1.85c-1.02-2.83-3.76-4.77-7.37-4.77H9.78v4.77H7.72v1.71h2.06v1.79H7.72v1.71h2.06v4.71h5.94c3.57 0 6.29-1.92 7.33-4.71h1.89V17.2h-1.47c.04-.31.06-.62.06-.92v-.04c0-.28-.02-.56-.04-.83h1.46V13.7zm-13.49-3.24h4.28c2.65 0 4.62 1.3 5.53 3.24h-9.81zm4.27 11.62h-4.28V18.9h9.79c-.91 1.9-2.88 3.17-5.52 3.17zm6.09-5.77c0 .3-.02.59-.06.88h-10.3V15.4h10.3q.06.435.06.87z"
        />
        <defs>
          <linearGradient
            id="a"
            x1={15.87}
            x2={15.87}
            y1={36.25}
            y2={-2.75}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F9A606" />
            <stop offset={1} stopColor="#FBCC5F" />
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
export default IconAdaiFull;
