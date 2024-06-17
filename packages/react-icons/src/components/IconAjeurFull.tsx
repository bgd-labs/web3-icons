import type { SVGProps } from "react"
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const IconAjeurFull = ({
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
        <g clipPath="url(#clip0_294_241)">
          <path
            fill="#FC0"
            d="M16.004 32.002C24.842 32.002 32 24.844 32 16.006S24.842.01 16.004.01.008 7.168.008 16.006s7.158 15.996 15.996 15.996"
          />
          <path
            fill="#039"
            d="M16.004 1.34C7.946 1.36 1.427 7.898 1.437 15.966c.02 8.058 6.559 14.577 14.627 14.567 8.058-.02 14.576-6.559 14.566-14.627 0-3.849-1.54-7.538-4.249-10.267a14.67 14.67 0 0 0-10.367-4.3zm0-1.33C24.842.01 32 7.168 32 16.006c0 4.24-1.69 8.308-4.689 11.308-6.248 6.248-16.376 6.248-22.625 0s-6.248-16.377 0-22.625c3-3 7.069-4.689 11.308-4.689z"
          />
          <path
            fill="#039"
            d="M29.34 16.006c0 5.389-3.249 10.248-8.227 12.317-6.799 2.82-14.597-.41-17.416-7.218-.33-.81-.59-1.64-.76-2.5C1.497 11.388 6.187 4.37 13.414 2.93c.86-.17 1.73-.26 2.6-.26 7.348 0 13.317 5.939 13.327 13.297z"
          />
          <path
            fill="#FC0"
            d="m16.004 5.559.32.96h.96l-.75.64.32.85-.85-.53-.85.53.32-.85-.75-.64h.96zm-4.69 1.28.32.96h.96l-.85.529.32.96-.75-.53-.849.53.32-.96-.85-.53h1.07l.32-.96zm-3.518 3.409.32.96h1.07l-.85.53.32.959-.85-.64-.75.64.32-.96-.85-.53h.96l.32-.96zm12.907-3.41.32.96h1.07l-.85.53.32.96-.85-.53-.75.53.32-.96-.85-.53h.96l.32-.96zm4.689 4.26-.85.53.32.959-.85-.53-.75.53.32-.96-.85-.53h.96l.32-.96.32.96h1.07zm1.28 4.698-.85.53.32.96-.75-.64-.85.64.32-.96-.85-.53h1.07l.32-.96.21.96h1.07zm-1.71 5.969-.85-.64-.85.64.32-.96-.75-.53h.96l.32-.96.32.96h1.07l-.85.53.32.96zm-9.698 4.689.32-.96-.85-.64h1.07l.32-.96.32.96h.96l-.75.64.21.96-.75-.64zm-4.699-1.28.32-.96-.85-.53h.96l.32-.96.32.96h1.07l-.85.53.32.96-.85-.53-.75.53zm10.878 0-.75-.64-.85.64.32-.96-.85-.53h1.07l.32-.96.32.96h.96l-.85.53.32.96zM5.345 15.796h1.07l.21-.96.32.96h1.07l-.85.53.32.96-.85-.53-.75.53.32-.96-.85-.53zm1.7 5.969.32-.96-.85-.53h1.07l.32-.96.32.96h.96l-.75.53.32.96-.85-.64-.85.64z"
          />
        </g>
        <defs>
          <clipPath id="clip0_294_241">
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
export default IconAjeurFull
