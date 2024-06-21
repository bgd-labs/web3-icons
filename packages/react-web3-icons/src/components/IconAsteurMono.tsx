import * as React from "react";
import type { SVGProps } from "react";
const IconAsteurMono = (props: SVGProps<SVGSVGElement>) => (
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
        <path
          fill="currentColor"
          d="M22.62 22.45c-.1-.1-.25-.16-.47-.16h-1.07v1.23h1.07c.21 0 .36-.06.47-.15.11-.1.17-.24.17-.42v-.08c0-.18-.06-.32-.16-.42z"
        />
        <path
          fill="currentColor"
          d="M31.95 16.36C31.95 7.54 24.8.38 15.97.38S0 7.53 0 16.36s7.15 15.97 15.98 15.97 15.98-7.15 15.98-15.97zM11.62 26.68h-3.7v-5.54h3.65v1.16H9.16v1.01h2.19v1.16H9.16v1.06h2.45v1.16zm6.17-1.99q0 .63-.27 1.11c-.17.32-.43.56-.76.73s-.72.25-1.17.25-.84-.08-1.18-.25c-.33-.17-.58-.42-.76-.73-.17-.32-.26-.69-.26-1.11v-3.56h1.25v3.59c0 .3.08.52.24.68s.39.24.71.24.55-.09.7-.24c.16-.16.24-.38.24-.68v-3.59h1.25v3.56zm6.23-1.93c0 .34-.08.62-.25.85-.13.17-.28.3-.46.4.14.04.27.11.36.23.14.15.2.35.2.59v1.86h-1.25v-1.71c0-.1-.03-.16-.07-.21-.03-.03-.08-.07-.21-.07h-1.27v2h-1.25v-5.54h2.42c.35 0 .66.06.92.19q.405.18.63.54c.15.23.22.51.22.82v.09zm-3.68-4.15-4.36-4.45-4.36 4.45-4.36-4.45 8.73-8.91 8.73 8.91-4.36 4.45z"
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
export default IconAsteurMono;
