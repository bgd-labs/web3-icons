import type { SVGProps } from "react"
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const IconAstethFull = ({
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
        <g clipPath="url(#clip0_298_545)">
          <path
            fill="#fff"
            d="M16 32c8.84 0 16-7.16 16-16S24.84 0 16 0 0 7.16 0 16s7.16 16 16 16"
          />
          <path
            fill="#48A0F7"
            d="m9.78 14.89-.18.27c-1.98 3.03-1.53 7 1.06 9.54a7.87 7.87 0 0 0 5.53 2.24z"
          />
          <path
            fill="#48A0F7"
            d="M16.19 18.56 9.78 14.9l6.41 12.05zm6.42-3.67.18.27c1.98 3.03 1.53 7-1.06 9.54a7.87 7.87 0 0 1-5.53 2.24z"
            opacity={0.6}
          />
          <path
            fill="#48A0F7"
            d="m16.2 18.56 6.41-3.66-6.41 12.05zm0-8.19v6.32l5.52-3.16z"
            opacity={0.2}
          />
          <path
            fill="#48A0F7"
            d="m16.2 10.37-5.53 3.16 5.53 3.16z"
            opacity={0.6}
          />
          <path fill="#48A0F7" d="m16.2 5.06-5.53 8.48 5.53-3.17z" />
          <path
            fill="#48A0F7"
            d="m16.2 10.36 5.53 3.17-5.53-8.48z"
            opacity={0.6}
          />
        </g>
        <defs>
          <clipPath id="clip0_298_545">
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
export default IconAstethFull
