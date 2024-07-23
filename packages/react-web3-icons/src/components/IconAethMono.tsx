import * as React from "react";
import type { SVGProps } from "react";
const IconAethMono = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <circle cx={16} cy={16} r={15} stroke="currentColor" strokeWidth={2} />
    <g clipPath="url(#tynjl__circleClip)">
      <g
        style={{
          transform: "scale(.8125)",
          transformOrigin: "50% 50%",
        }}
      >
        <g clipPath="url(#tynjl__7r1ys__clip0_294_3461)">
          <path
            fill="currentColor"
            d="M16 0C7.164 0 0 7.164 0 16s7.164 16 16 16 16-7.164 16-16S24.836 0 16 0m-.339 29.106-8.005-11.29 8.005 4.804zM8.015 16.43l7.646-3.5v7.934L8.015 16.42zm7.646-4.218-7.717 3.5L15.66 2.894zm.729-9.319 7.718 12.819-7.718-3.5zm0 10.037 7.646 3.5-7.646 4.444zm0 9.699 8.005-4.803-8.005 11.29z"
          />
        </g>
        <defs>
          <clipPath id="tynjl__7r1ys__clip0_294_3461">
            <path fill="#fff" d="M0 0h32v32H0z" />
          </clipPath>
        </defs>
      </g>
    </g>
    <defs>
      <clipPath id="tynjl__circleClip">
        <circle cx={16} cy={16} r={13} />
      </clipPath>
    </defs>
  </svg>
);
export default IconAethMono;
