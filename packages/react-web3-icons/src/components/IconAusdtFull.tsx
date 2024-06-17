import type { SVGProps } from "react"
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const IconAusdtFull = ({
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
        <g clipPath="url(#clip0_298_873)">
          <path
            fill="#509E7D"
            d="M16.27 32.07c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.164-16 16 7.163 16 16 16"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M18.19 17.46c-.11 0-.68.04-1.94.04-1.01 0-1.72-.03-1.97-.04-3.89-.17-6.79-.84-6.79-1.65s2.9-1.49 6.79-1.66v2.64c.25.02.98.06 1.99.06 1.21 0 1.81-.05 1.93-.06v-2.64c3.88.17 6.77.85 6.77 1.66s-2.9 1.48-6.77 1.66m-.01-3.6V11.5h5.41V7.89H8.86v3.61h5.41v2.36c-4.4.2-7.71 1.07-7.71 2.12s3.31 1.92 7.71 2.12v7.58h3.91V18.1c4.39-.2 7.69-1.07 7.69-2.12s-3.3-1.91-7.69-2.12"
            clipRule="evenodd"
          />
        </g>
        <defs>
          <clipPath id="clip0_298_873">
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
export default IconAusdtFull
