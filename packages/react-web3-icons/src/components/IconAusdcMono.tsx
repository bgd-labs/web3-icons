import * as React from "react";
import type { SVGProps } from "react";
const IconAusdcMono = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <circle cx={16} cy={16} r={15} stroke="currentColor" strokeWidth={2} />
    <g clipPath="url(#usdcoin__circleClip)">
      <g
        style={{
          transform: "scale(.8125)",
          transformOrigin: "50% 50%",
        }}
      >
        <g fill="currentColor" clipPath="url(#usdcoin__clip0_298_783)">
          <path d="M13.2 22.8a7.36 7.36 0 0 1-4.07-9.58 7.4 7.4 0 0 1 4.07-4.07c.35-.14.58-.48.58-.86v-.23c0-.23-.18-.42-.42-.42-.05 0-.1 0-.14.02a8.783 8.783 0 0 0-.03 16.67h.14c.25 0 .45-.2.45-.45v-.21c0-.38-.23-.72-.58-.87m5.61-15.12h-.15a.47.47 0 0 0-.47.47v.15c0 .39.25.75.61.9a7.357 7.357 0 0 1 4.05 9.59 7.38 7.38 0 0 1-4.05 4.05c-.36.16-.59.5-.6.89v.17c0 .26.22.47.48.46.05 0 .1 0 .14-.02a8.785 8.785 0 0 0-.01-16.66" />
          <path d="M19.33 17.73c0-1.27-.73-2-2.46-2.37l-1-.22c-1-.25-1.47-.58-1.47-1.14s.6-1.18 1.6-1.18c.64-.07 1.27.25 1.59.81.13.28.41.46.72.46h.47c.22-.05.36-.28.31-.5a2.65 2.65 0 0 0-2.38-2v-.69c0-.39-.32-.7-.7-.7s-.71.32-.71.7v.74a2.59 2.59 0 0 0-2.45 2.47c0 1.21.74 2 2.31 2.33l1.1.26c1.07.25 1.51.61 1.51 1.22S17 19.13 16 19.13c-.72.07-1.42-.29-1.8-.91a.67.67 0 0 0-.61-.39H13a.35.35 0 0 0-.28.41c.3 1.21 1.37 2.06 2.61 2.08v.84c0 .39.32.71.7.71s.71-.32.71-.71v-.85a2.62 2.62 0 0 0 2.59-2.58" />
          <path d="M16 0C7.16 0 0 7.16 0 16s7.16 16 16 16 16-7.16 16-16S24.84 0 16 0m0 27.75C9.51 27.75 4.25 22.49 4.25 16S9.51 4.25 16 4.25 27.75 9.51 27.75 16 22.49 27.75 16 27.75" />
        </g>
        <defs>
          <clipPath id="usdcoin__clip0_298_783">
            <path fill="#fff" d="M0 0h32v32H0z" />
          </clipPath>
        </defs>
      </g>
    </g>
    <defs>
      <clipPath id="usdcoin__circleClip">
        <circle cx={16} cy={16} r={13} />
      </clipPath>
    </defs>
  </svg>
);
export default IconAusdcMono;
