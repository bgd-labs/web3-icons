import type { SVGProps } from "react"
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const IconAeursFull = ({
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
        <g clipPath="url(#clip0_292_205)">
          <path
            fill="#fff"
            d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16"
          />
          <path
            fill="url(#paint0_linear_292_205)"
            fillRule="evenodd"
            d="M27.1 27.52c3.02-2.91 4.9-7 4.9-11.52 0-5.35-2.62-10.08-6.65-12.99-5.55.63-10.16 3.21-11.75 6.91h14.88l-1.68 3.84h-14s-.09 1.47-.08 2.16c.01 1 .08 2.16.08 2.16h12.16l-1.6 3.71h-8.88c1.76 3.32 6.71 5.72 12.62 5.73"
            clipRule="evenodd"
          />
          <path
            fill="url(#paint1_linear_292_205)"
            fillRule="evenodd"
            d="M22.43 30.65C20.46 31.52 18.28 32 16 32 7.16 32 0 24.84 0 16S7.16 0 16 0c1.47 0 2.89.2 4.23.57-5.18.95-9.44 4.55-11.34 9.35h-3.3l-1.68 3.84h4.24v2.25c0 .19.02.38.05 2.07H5.43l-1.52 3.71h5.26c2.2 4.97 6.14 7.91 13.25 8.86z"
            clipRule="evenodd"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_292_205"
            x1={-9.525}
            x2={19.499}
            y1={33.514}
            y2={4.236}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.33} stopColor="#15BCFF" />
            <stop offset={0.66} stopColor="#406BEE" />
            <stop offset={0.93} stopColor="#AE3EEB" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_292_205"
            x1={3.6}
            x2={25.44}
            y1={25.34}
            y2={8.33}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.33} stopColor="#15BCFF" />
            <stop offset={0.66} stopColor="#406BEE" />
            <stop offset={0.93} stopColor="#AE3EEB" />
          </linearGradient>
          <clipPath id="clip0_292_205">
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
export default IconAeursFull
