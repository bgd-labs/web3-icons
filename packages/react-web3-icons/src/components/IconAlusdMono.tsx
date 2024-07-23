import * as React from "react";
import type { SVGProps } from "react";
const IconAlusdMono = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <circle cx={16} cy={16} r={15} stroke="currentColor" strokeWidth={2} />
    <g clipPath="url(#lusdstablecoin__circleClip)">
      <g
        fill="currentColor"
        style={{
          transform: "scale(.8125)",
          transformOrigin: "50% 50%",
        }}
      >
        <path d="M31.368 20.534A15.99 15.99 0 0 1 18.851 31.84v-4.565a7.5 7.5 0 0 0 3.962-3.49c.57-1.084.87-2.298.86-3.532 0-4.032-2.911-5.647-5.633-6.851l-1.38-.612c-1.481-.662-2.602-1.254-2.602-2.267 0-1.394 1.22-2.147 2.361-2.147 1.221 0 1.912.452 2.642 1.726l.57.983 3.652-2.348-.48-.882a7.12 7.12 0 0 0-3.952-3.411V.25c.35.06.7.14 1.06.23.03 0 .07.02.11.02s.08.02.12.03h.03c.1.02.19.05.29.08 8.487 2.48 13.369 11.389 10.898 19.895z" />
        <path d="M19.201 20.484c0 1.836-1.66 2.98-3.192 2.98-1.84 0-2.891-1.525-3.092-2.94l-.17-1.224-4.412 1.244.2.993c.63 3.12 2.752 5.357 5.643 6.04V32c-.78-.09-1.56-.24-2.321-.451-.11-.02-.21-.06-.32-.09A16.04 16.04 0 0 1 0 16.05V.632C0 .281.28 0 .63 0h13.548v4.414a6.5 6.5 0 0 0-3.772 2.929 6.14 6.14 0 0 0-.81 3.11v.09c.04 3.601 2.681 5.106 5.172 6.24l1.251.541.1.05c1.981.903 3.092 1.505 3.092 3.11z" />
      </g>
    </g>
    <defs>
      <clipPath id="lusdstablecoin__circleClip">
        <circle cx={16} cy={16} r={13} />
      </clipPath>
    </defs>
  </svg>
);
export default IconAlusdMono;
