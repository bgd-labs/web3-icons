import type { SVGProps } from "react"
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const IconAcvxFull = ({
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
        <g clipPath="url(#clip0_294_266)">
          <path
            fill="#fff"
            d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16"
          />
          <path
            fill="url(#paint0_linear_294_266)"
            d="M25.19 13.5v-5h-2.5V6h-5V3.5h-5V6h-5v2.5h-2.5v15h2.5V26h5v2.5h5V26h5v-2.5h2.5v-5h-5V21h-2.5v2.5h-5V21h-2.5V11h2.5V8.5h5V11h2.5v2.5z"
          />
          <path
            fill="#1682FE"
            d="M17.69 8.38h1.74V11h-1.74zm-5-4.88h1.74v2.62h-1.74z"
          />
          <path fill="#60D8A4" d="M7.69 6h1.74v2.62H7.69z" />
          <path fill="#F4BB3B" d="M5.19 16h1.76v7.5H5.19z" />
          <path fill="#60D8A4" d="M5.19 8.5h1.76V16H5.19z" />
          <path fill="#1682FE" d="M20.19 10.87h1.74v2.62h-1.74z" />
          <path
            fill="#FF5A5A"
            d="M20.19 18.5h1.74v2.62h-1.74zm-2.5 2.5h1.74v2.62h-1.74zm-5 4.87h1.74v2.62h-1.74z"
          />
          <path fill="#F4BB3B" d="M7.69 23.37h1.74v2.62H7.69z" />
          <path
            fill="#3A3A3A"
            d="M26.82 13.5v-5h-2.5V6h-5V3.5h-5V6h-5v2.5h-2.5v15h2.5V26h5v2.5h5V26h5v-2.5h2.5v-5h-5V21h-2.5v2.5h-5V21h-2.5V11h2.5V8.5h5V11h2.5v2.5z"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_294_266"
            x1={24.031}
            x2={10.449}
            y1={6.358}
            y2={32.882}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1682FE" />
            <stop offset={0.3} stopColor="#60D8A4" />
            <stop offset={0.7} stopColor="#FCA75B" />
            <stop offset={1} stopColor="#FF5A5A" />
          </linearGradient>
          <clipPath id="clip0_294_266">
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
export default IconAcvxFull
