import * as React from "react";
import type { SVGProps } from "react";
const IconAghstMono = (props: SVGProps<SVGSVGElement>) => (
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
          d="M31.76 10.16h-.82V6.88H29.3V5.24h-1.64V3.6h-1.64V1.96h-3.28V.32H10.43v1.64H7.15V3.6H5.51v1.64H3.87v1.64H2.23v3.28H.59v12.31h1.64v3.28h1.64v1.64h1.64v1.64h1.64v1.64h3.28v1.64h12.31v-1.64h3.28v-1.64h1.64v-1.64h1.64v-1.64h1.64v-3.28h1.64V10.16zm-21.71 4.72H5.53v4.52h3.39v-1.69H6.66v-1.13h3.39v2.82H8.92v1.13H5.53V19.4H4.4v-4.52h1.13v-1.13h4.52zm6.21 5.65h-1.13v-2.82h-2.82v2.82h-1.13v-6.78h1.13v2.82h2.82v-2.82h1.13zm6.21-5.65h-3.95v1.69h2.82v1.13h1.13v1.69h-1.13v1.13h-.57v1.13h-1.13v-1.13h-2.26v-1.13h3.95V17.7h-2.82v-1.13h-1.13v-1.69h1.13v-1.13h1.13v-1.13h1.13v1.13h1.69v1.13zm6.78 0h-2.26v5.65h-1.13v-5.65H23.6v-1.13h5.65z"
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
export default IconAghstMono;
