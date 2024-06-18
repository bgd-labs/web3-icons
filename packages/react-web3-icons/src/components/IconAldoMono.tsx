import type { SVGProps } from "react";
const IconAldoMono = (props: SVGProps<SVGSVGElement>) => (
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
        <g fill="currentColor" clipPath="url(#clip0_297_32)">
          <path d="m19.9 13.034-3.89-6.086-3.9 6.086 3.9 2.268z" />
          <path d="M16 0C7.164 0 0 7.164 0 16s7.164 16 16 16 16-7.164 16-16S24.837 0 16 0m.01 4.68 5.614 8.764-5.614 3.264-5.614-3.263zm5.604 20.31c-3.1 3.09-8.128 3.09-11.228 0a7.91 7.91 0 0 1-1.077-9.862l.174-.277 6.507 3.787 6.507-3.788.174.278a7.91 7.91 0 0 1-1.078 9.862z" />
        </g>
        <defs>
          <clipPath id="clip0_297_32">
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
export default IconAldoMono;
