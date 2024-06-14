import * as React from "react";
import type { SVGProps } from "react";
const IconAstethMono = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="32px"
    height="32px"
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
        <g fill="currentColor" clipPath="url(#a)">
          <path d="m21.3 16.46-5.31 3.13-5.3-3.13 5.3 9.66zM11.6 13.23l4.41 2.56 4.41-2.54L16 10.81z" />
          <path d="M16 0C7.16 0 0 7.16 0 16s7.16 16 16 16 16-7.16 16-16S24.84 0 16 0m-.04 4.78h.01s0-.02.02-.02h.04l5.65 8.67-.1.05-5.6 3.2-5.6-3.2s-.11-.04-.09-.05l5.65-8.67zM24 20.21a7.85 7.85 0 0 1-2.31 4.72A8.07 8.07 0 0 1 16 27.24c-2.15 0-4.17-.82-5.69-2.31A7.88 7.88 0 0 1 8 20.21c-.2-1.78.23-3.59 1.22-5.1l.18-.27 6.6 3.77 6.49-3.71s.11-.08.12-.07l.18.27a7.8 7.8 0 0 1 1.22 5.1z" />
        </g>
        <defs>
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
    </defs>
  </svg>
);
export default IconAstethMono;