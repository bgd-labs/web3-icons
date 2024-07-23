import * as React from "react";
import type { SVGProps } from "react";
const IconAlendMono = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <circle cx={16} cy={16} r={15} stroke="currentColor" strokeWidth={2} />
    <g clipPath="url(#alend__circleClip)">
      <g
        style={{
          transform: "scale(.8125)",
          transformOrigin: "50% 50%",
        }}
      >
        <g clipPath="url(#alend__aave[old]__clip0_297_20)">
          <path
            fill="currentColor"
            d="M16 0C7.164 0 0 7.164 0 16s7.164 16 16 16 16-7.164 16-16S24.836 0 16 0m-5.08 27.607-1.96-1.96 4.587-4.587-4.587-4.588 1.96-1.96 6.537 6.537-6.537 6.538zm7.379-7.368L11.76 13.7l1.95-1.95 6.538 6.538zm4.741-4.732-1.96 1.96-6.537-6.537 6.537-6.537 1.96 1.96-4.587 4.587 4.587 4.588z"
          />
        </g>
        <defs>
          <clipPath id="alend__aave[old]__clip0_297_20">
            <path fill="#fff" d="M0 0h32v32H0z" />
          </clipPath>
        </defs>
      </g>
    </g>
    <defs>
      <clipPath id="alend__circleClip">
        <circle cx={16} cy={16} r={13} />
      </clipPath>
    </defs>
  </svg>
);
export default IconAlendMono;
