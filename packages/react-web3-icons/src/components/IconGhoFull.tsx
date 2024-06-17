import type { SVGProps } from "react"
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const IconGhoFull = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    fill="none"
    viewBox="0 0 32 32"
    aria-labelledby={titleId}
    aria-describedby={descId}
    {...props}
  >
    {desc ? <desc id={descId}>{desc}</desc> : null}
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath="url(#clip0_292_229)">
      <path
        fill="url(#paint0_linear_292_229)"
        d="M16 0c8.84 0 16 7.16 16 16s-7.16 16-16 16S0 24.84 0 16 7.16 0 16 0"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="m24.93 20.61-2.18-5.04h-3.5l2.08 4.93h-6.77a4.84 4.84 0 0 1-3.47-1.45 4.904 4.904 0 0 1 0-6.96c.93-.93 2.16-1.45 3.47-1.45h6.45l-1.37-3.29h-5.08c-4.52 0-8.35 3.69-8.35 8.21s3.84 8.21 8.35 8.21h10.38V20.6z"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M14.01 11.86a1.641 1.641 0 0 0 0 3.28 1.641 1.641 0 0 0 0-3.28M14.01 16.07a1.641 1.641 0 0 0 0 3.28 1.641 1.641 0 0 0 0-3.28"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_292_229"
        x1={15.99}
        x2={15.99}
        y1={0}
        y2={32}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B3B2D3" />
        <stop offset={0.53} stopColor="#8C8ADA" />
        <stop offset={1} stopColor="#6D69DE" />
      </linearGradient>
      <clipPath id="clip0_292_229">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default IconGhoFull
