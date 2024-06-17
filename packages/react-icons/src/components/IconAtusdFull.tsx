import type { SVGProps } from "react"
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const IconAtusdFull = ({
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
        <g clipPath="url(#clip0_297_141)">
          <path
            fill="#0C2764"
            d="M16 32C7.2 32 0 24.8 0 16S7.2 0 16 0s16 7.2 16 16-7.2 16-16 16"
          />
          <path
            fill="#fff"
            d="M24.06 25.6H7.93c-.84 0-1.54-.69-1.54-1.54V7.94c0-.84.69-1.54 1.54-1.54h16.13c.84 0 1.54.69 1.54 1.54v16.13c0 .84-.69 1.54-1.54 1.54z"
          />
          <path
            fill="#0C2764"
            d="M10.14 23.67c-.05 0-.09-.05-.09-.1v-2.58c0-.05-.04-.1-.09-.1h-.91c-.05 0-.1-.04-.1-.09v-.5c0-.05.05-.1.1-.1h2.8c.05 0 .1.05.1.1v.5c0 .05-.05.09-.1.09h-.91c-.05 0-.1.05-.1.1v2.58c0 .05-.04.1-.09.1h-.62zm4.61-3.37c0-.05.04-.1.09-.1h.61c.05 0 .1.05.1.1v1.76c0 1.04-.59 1.65-1.53 1.65s-1.52-.61-1.52-1.65V20.3c0-.05.04-.1.09-.1h.61c.05 0 .1.05.1.1v1.79c0 .51.26.88.72.88s.72-.37.72-.88V20.3zm3.6 1.04c-.08 0-.11-.03-.14-.09-.11-.25-.34-.41-.7-.41-.32 0-.59.11-.59.33 0 .23.25.33.8.4.83.1 1.31.35 1.31 1.01 0 .74-.65 1.13-1.49 1.13-.72 0-1.34-.35-1.44-1.09-.01-.07.03-.1.1-.1h.56c.07 0 .11.03.13.09.08.24.34.43.71.43.33 0 .62-.12.62-.38 0-.31-.31-.37-.92-.44-.7-.09-1.19-.3-1.19-.94s.55-1.11 1.42-1.11c.78 0 1.33.42 1.44 1.05.02.07 0 .12-.08.12h-.56zm1.38 2.33c-.05 0-.09-.05-.09-.1V20.3c0-.05.04-.1.09-.1h1.38c1.03 0 1.83.71 1.83 1.74s-.79 1.72-1.83 1.72h-1.38zm1.38-.69c.55 0 .99-.44.99-1.04s-.43-1.04-.99-1.04h-.57c-.05 0-.09.05-.09.1v1.9c0 .05.04.09.09.09h.58zM25.09 18.3H6.91c-.14 0-.26-.12-.26-.26V7.94c0-.7.58-1.28 1.28-1.28h16.13c.7 0 1.28.58 1.28 1.28v10.11c0 .14-.12.26-.26.26z"
          />
          <path
            fill="#fff"
            d="M19.77 8.8h-7.55a.19.19 0 0 0-.19.19v1.66c0 .11.09.19.19.19h2.75v5.18c0 .11.09.19.19.19h1.66c.11 0 .19-.09.19-.19v-5.18h2.75c.11 0 .19-.09.19-.19V8.99a.19.19 0 0 0-.19-.19z"
          />
        </g>
        <defs>
          <clipPath id="clip0_297_141">
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
export default IconAtusdFull
