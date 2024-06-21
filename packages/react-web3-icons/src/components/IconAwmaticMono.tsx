import * as React from "react";
import type { SVGProps } from "react";
const IconAwmaticMono = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="100%"
    height="100%"
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
        <g clipPath="url(#clip0_297_197)">
          <path
            fill="currentColor"
            d="M16 0C7.16 0 0 7.16 0 16s7.16 16 16 16 16-7.16 16-16S24.84 0 16 0m9.55 16.16c0 .28-.15.53-.39.67l-4.53 2.61c-.24.14-.54.14-.78 0l-1.7-.98V16l2.09 1.21 3.17-1.83v-3.67l-3.17-1.83-3.12 1.8-.06.03v9.34c0 .28-.15.53-.39.67l-4.53 2.61c-.24.14-.54.14-.78 0l-4.53-2.61a.79.79 0 0 1-.39-.67v-5.23c0-.28.15-.53.39-.67l4.53-2.61c.24-.14.54-.14.78 0l1.71.98v2.46l-2.09-1.21-3.17 1.83v3.67l3.17 1.83 3.17-1.83v-9.34c0-.28.15-.53.39-.67l4.53-2.61c.24-.14.54-.14.78 0l4.53 2.61c.24.14.39.4.39.67z"
          />
        </g>
        <defs>
          <clipPath id="clip0_297_197">
            <path fill="#fff" d="M0 0h32v32H0z" />
          </clipPath>
        </defs>
      </g>
    </g>
    <defs>
      <clipPath id="circleClip">
        <circle cx={16} cy={16} r={13} />
      </clipPath>
    </defs>
  </svg>
);
export default IconAwmaticMono;
