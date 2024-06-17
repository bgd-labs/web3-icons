import type { SVGProps } from "react"
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const IconAusdbcFull = ({
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
        <g clipPath="url(#clip0_298_901)">
          <path
            fill="#2151F4"
            d="M16 0c8.84 0 16 7.16 16 16s-7.16 16-16 16S0 24.84 0 16C0 7.17 7.17 0 16 0"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M15.15 4.88v5.89c-1.98.3-3.13 1.59-3.13 3.14 0 1.98 1.3 2.81 3.14 3.13l1.12.2c1.04.18 1.54.32 1.54 1.08s-.56 1.31-1.75 1.31-1.9-.52-1.9-1.57h-2.36c0 1.77 1.32 3.04 3.36 3.31v2.04h1.84v-2.06c1.93-.31 3.17-1.51 3.17-3.23 0-2.09-1.45-2.82-3.24-3.1l-1.07-.17c-.95-.15-1.48-.37-1.48-1.14 0-.61.45-1.2 1.6-1.2s1.69.58 1.69 1.36h2.36c-.03-1.48-1.08-2.76-3.03-3.08V4.9c5.7.52 10.16 5.31 10.16 11.14 0 6.18-5.01 11.19-11.19 11.19S4.79 22.22 4.79 16.04c0-5.89 4.56-10.72 10.34-11.16z"
            clipRule="evenodd"
          />
        </g>
        <defs>
          <clipPath id="clip0_298_901">
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
export default IconAusdbcFull
