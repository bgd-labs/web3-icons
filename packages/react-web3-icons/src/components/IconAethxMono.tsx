import * as React from "react";
import type { SVGProps } from "react";
const IconAethxMono = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <circle cx={16} cy={16} r={15} stroke="currentColor" strokeWidth={2} />
    <g clipPath="url(#rmr9z__circleClip)">
      <g
        style={{
          transform: "scale(.8125)",
          transformOrigin: "50% 50%",
        }}
      >
        <path
          fill="currentColor"
          d="M16 .43c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16m0 7.95 4.86 8.21-4.86 2.9-4.85-2.91zM5.13 10.01l4.46-4.46 1.89 1.89c-1.92.97-3.49 2.53-4.47 4.45zm4.46 17.35L5.13 22.9l1.89-1.89c.98 1.92 2.55 3.48 4.48 4.44zm1.54-9.82 4.86 2.91 4.86-2.86-4.86 6.9zm11.35 9.82-1.93-1.94c1.92-.97 3.49-2.54 4.45-4.47l1.94 1.94-4.46 4.46zm2.53-15.42c-.96-1.93-2.52-3.5-4.44-4.48l1.91-1.91 4.46 4.46z"
        />
      </g>
    </g>
    <defs>
      <clipPath id="rmr9z__circleClip">
        <circle cx={16} cy={16} r={13} />
      </clipPath>
    </defs>
  </svg>
);
export default IconAethxMono;
