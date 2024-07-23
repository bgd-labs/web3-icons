import * as React from "react";
import type { SVGProps } from "react";
const IconAguniMono = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <circle cx={16} cy={16} r={15} stroke="currentColor" strokeWidth={2} />
    <g clipPath="url(#7y9j8i__circleClip)">
      <g
        fill="currentColor"
        style={{
          transform: "scale(.8125)",
          transformOrigin: "50% 50%",
        }}
      >
        <path d="m21.65 10.97-5.69-5.6 8.64 3.99z" />
        <path d="M27.33 5.37v3.99H24.6l-8.59 8.59v1.68l2.02 2.02 2.27-1.48 3.98-1.43h2.81c-.97 5.25-5.57 9.24-11.11 9.24-6.24 0-11.3-5.06-11.3-11.3S9.72 5.4 15.95 5.38V.67C7.14.7 0 7.85 0 16.67s7.16 16 16 16 16-7.16 16-16c0-4.42-1.77-8.39-4.67-11.29z" />
        <path d="M19.32 3.56c0 .36-.08.63-.23.79q-.225.24-.63.24t-.63-.24c-.15-.16-.23-.43-.23-.79V1.44h-.89v2.38c0 .57.15.83.46 1.13s.73.4 1.28.4.97-.1 1.27-.4c.31-.3.46-.56.46-1.13V1.44h-.87v2.12zm4.4.2-1.91-2.33h-.73v3.84h.88V2.94l1.91 2.33h.73V1.43h-.88zm2.68-2.33h-.89v3.84h.89z" />
      </g>
    </g>
    <defs>
      <clipPath id="7y9j8i__circleClip">
        <circle cx={16} cy={16} r={13} />
      </clipPath>
    </defs>
  </svg>
);
export default IconAguniMono;
