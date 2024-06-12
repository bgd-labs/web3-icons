import * as React from "react";
import type { SVGProps } from "react";
const IconWmaticFull = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32px"
    height="32px"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#fff"
        d="M16 32c8.84 0 16-7.16 16-16S24.84 0 16 0 0 7.16 0 16s7.16 16 16 16"
      />
      <path
        fill="url(#b)"
        d="m21.44 20.06 5.32-3.07c.28-.16.46-.46.46-.79v-6.14c0-.32-.17-.63-.46-.79L21.44 6.2a.92.92 0 0 0-.91 0l-5.32 3.07c-.28.16-.46.46-.46.79v10.97l-3.73 2.15-3.73-2.15v-4.3l3.73-2.15L13.48 16v-2.89l-2-1.16a.92.92 0 0 0-.91 0l-5.32 3.07c-.28.16-.46.46-.46.79v6.14c0 .32.17.63.46.79l5.32 3.07c.28.16.63.16.91 0l5.32-3.07c.28-.16.46-.46.46-.79V10.98l.07-.04 3.66-2.11 3.73 2.15v4.3l-3.73 2.15-2.46-1.42v2.89l2 1.15c.28.16.63.16.91 0z"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={6.7}
        x2={25.96}
        y1={22.78}
        y2={8.74}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#9932B9" />
        <stop offset={0.88} stopColor="#773FD6" />
        <stop offset={1} stopColor="#7342DB" />
      </linearGradient>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default IconWmaticFull;
