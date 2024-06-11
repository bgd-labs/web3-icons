import * as React from "react";
import type { SVGProps } from "react";
const IconAstmaticMono = (props: SVGProps<SVGSVGElement>) => (
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
          d="M16.63.34c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16m10.51 21.41c0 .47-.26.9-.66 1.14l-4.49 2.61c-.41.24-.92.24-1.33 0l-4.49-2.61c-.42-.23-.67-.67-.66-1.14v-1.82l2.07-1.22v1.81c0 .47.26.9.66 1.15l2.38 1.38c.41.24.92.24 1.33 0l2.38-1.42c.42-.23.67-.67.66-1.14v-2.8c0-.47-.26-.9-.67-1.14l-2.38-1.38c-.41-.24-.92-.24-1.33 0l-3.05 1.78-2.07 1.22-3.05 1.78c-.41.24-.92.24-1.33 0l-4.49-2.6c-.42-.23-.67-.67-.66-1.14v-5.25c0-.47.25-.92.66-1.14l4.49-2.61c.41-.24.92-.24 1.33 0l4.42 2.61c.42.23.67.67.66 1.14v1.82L15.45 14v-1.81c0-.47-.26-.9-.66-1.15l-2.38-1.38c-.41-.24-.92-.24-1.33 0l-2.39 1.38c-.42.23-.67.67-.66 1.15v2.8c0 .47.26.9.66 1.14l2.42 1.42c.41.24.92.24 1.33 0l3.05-1.82 2.07-1.18 3.05-1.82c.41-.24.92-.24 1.33 0l4.53 2.64c.42.23.67.67.66 1.14v5.25z"
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
export default IconAstmaticMono;
