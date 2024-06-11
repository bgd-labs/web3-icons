import * as React from "react";
import type { SVGProps } from "react";
const IconAeursMono = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={16} cy={16} r={15} stroke="currentColor" strokeWidth={2} />
    <g clipPath="url(#circleClip)">
      <g
        style={{
          transform: "scale(0.8125)",
          transformOrigin: "50% 50%",
        }}
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M27.3 27.83c3.02-2.91 4.9-7 4.9-11.52 0-5.35-2.62-10.08-6.65-12.99-5.55.63-10.16 3.21-11.75 6.91h14.88L27 14.07H13s-.09 1.47-.08 2.16c.01 1 .08 2.16.08 2.16h12.16l-1.6 3.71h-8.88c1.76 3.32 6.71 5.72 12.62 5.73"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M22.63 30.97c-1.97.87-4.15 1.35-6.43 1.35-8.84 0-16-7.16-16-16s7.16-16 16-16c1.47 0 2.89.2 4.23.57-5.18.95-9.44 4.55-11.33 9.35H5.8l-1.68 3.84h4.24v2.25c0 .19.02.38.05 2.07H5.64l-1.52 3.71h5.26c2.2 4.97 6.14 7.91 13.25 8.86"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="circleClip">
        <circle cx={16} cy={16} r={13} />
      </clipPath>
    </defs>
  </svg>
);
export default IconAeursMono;
