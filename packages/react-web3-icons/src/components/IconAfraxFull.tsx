import type { SVGProps } from "react"
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const IconAfraxFull = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    aria-describedby={descId}
    {...props}
  >
    {desc ? <desc id={descId}>{desc}</desc> : null}
    {title ? <title id={titleId}>{title}</title> : null}
    <circle
      cx={16}
      cy={16}
      r={15}
      stroke="url(#paint0_linear_40_91)"
      strokeWidth={2}
    />
    <g clipPath="url(#circleClip)">
      <g
        style={{
          transform: "scale(0.8125)",
          transformOrigin: "50% 50%",
        }}
      >
        <g clipPath="url(#clip0_294_3448)">
          <path
            fill="#000"
            d="M16 32c8.83 0 16-7.16 16-16S24.84 0 16 0 0 7.16 0 16s7.16 16 16 16"
          />
          <path
            fill="#fff"
            d="M7.18 7.11c-.67.71-1.23 1.3-1.24 1.32 0 .02.6.61 1.35 1.32s1.4 1.34 1.44 1.38l.08.08-.15.25a8.64 8.64 0 0 0-.77 7.3c.16.46.43 1.05.66 1.44.11.19.16.31.15.34-.01.02-.69.74-1.51 1.6-.82.85-1.49 1.57-1.5 1.58 0 .02 2.29 2.24 2.51 2.42l.08.07 1.3-1.35c.5-.52.99-1.04 1.48-1.56l.19-.19.18.11c.92.58 1.99.99 3.18 1.2.6.11 1.73.13 2.37.06 1.23-.14 2.44-.55 3.43-1.15l.26-.16.28.27c.6.58 2.85 2.72 2.87 2.73s2.49-2.57 2.48-2.6c0-.02-1.7-1.64-2.73-2.61l-.34-.33.16-.26c1.32-2.2 1.6-4.86.74-7.32-.12-.36-.5-1.17-.72-1.54l-.11-.19 1.44-1.51c.79-.83 1.44-1.52 1.43-1.53-.02-.06-2.55-2.44-2.59-2.44-.02 0-.66.65-1.42 1.44s-1.39 1.44-1.41 1.45c-.01 0-.08-.03-.15-.08-.19-.13-.67-.39-.94-.52-.82-.38-1.59-.61-2.47-.74-.46-.07-1.84-.08-2.27-.02-1.02.15-1.86.4-2.71.83-.25.12-.53.28-.65.34l-.2.12-.23-.22c-.12-.12-.69-.65-1.24-1.19-.56-.53-1.12-1.07-1.26-1.2l-.25-.24-1.22 1.3zm9.44 3.66c.89.11 1.69.41 2.43.93.38.26.94.83 1.2 1.2a5.19 5.19 0 0 1-.67 6.78 5.16 5.16 0 0 1-5.91.84 5.22 5.22 0 0 1-2.74-3.64c-.1-.51-.1-1.45 0-1.95.1-.49.22-.85.47-1.34a5.16 5.16 0 0 1 5.22-2.82"
          />
        </g>
        <defs>
          <clipPath id="clip0_294_3448">
            <path fill="#fff" d="M0 0h32v32H0z" />
          </clipPath>
        </defs>
      </g>
    </g>
    <defs>
      <clipPath id="circleClip">
        <circle cx={16} cy={16} r={13} />
      </clipPath>
      <linearGradient
        id="paint0_linear_40_91"
        x1={26.976}
        y1={4.32}
        x2={6.59198}
        y2={28.352}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B6509E" />
        <stop offset={1} stopColor="#2EBAC6" />
      </linearGradient>
    </defs>
  </svg>
)
export default IconAfraxFull
