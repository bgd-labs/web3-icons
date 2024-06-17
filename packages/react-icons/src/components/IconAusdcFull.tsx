import type { SVGProps } from "react"
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const IconAusdcFull = ({
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
        <g clipPath="url(#clip0_298_785)">
          <path
            fill="#3E73C2"
            d="M16.08 32.1c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.164-16 16 7.163 16 16 16"
          />
          <path
            fill="#fff"
            d="M16.08 27.85c-6.49 0-11.75-5.26-11.75-11.75S9.59 4.35 16.08 4.35 27.83 9.61 27.83 16.1s-5.26 11.75-11.75 11.75m-.7-16.11a2.59 2.59 0 0 0-2.45 2.47c0 1.21.74 2 2.31 2.33l1.1.26c1.07.25 1.51.61 1.51 1.22s-.77 1.21-1.77 1.21c-.72.07-1.42-.29-1.8-.91a.67.67 0 0 0-.61-.39h-.59a.35.35 0 0 0-.28.41c.3 1.21 1.37 2.06 2.61 2.08v.84c0 .39.32.7.7.7s.7-.32.7-.7v-.85a2.62 2.62 0 0 0 2.59-2.58c0-1.27-.73-2-2.46-2.37l-1-.22c-1-.25-1.47-.58-1.47-1.14s.6-1.18 1.6-1.18c.64-.07 1.27.25 1.59.81.13.28.41.46.72.46h.47c.22-.05.36-.28.31-.5a2.65 2.65 0 0 0-2.38-2V11c0-.39-.32-.7-.7-.7s-.7.32-.7.7zM7.27 16.1c0 3.78 2.42 7.13 6 8.33h.14c.25 0 .45-.2.45-.45v-.21c0-.38-.23-.72-.58-.87a7.36 7.36 0 0 1-4.07-9.58 7.4 7.4 0 0 1 4.07-4.07c.35-.14.58-.48.58-.86v-.23c0-.23-.18-.42-.42-.42-.05 0-.1 0-.14.02a8.78 8.78 0 0 0-6.03 8.34m17.62 0c0-3.77-2.42-7.12-6-8.32h-.15a.47.47 0 0 0-.47.47v.15c0 .39.25.75.61.9a7.357 7.357 0 0 1 4.05 9.59 7.35 7.35 0 0 1-4.05 4.05c-.36.16-.59.5-.6.89V24c0 .26.22.47.48.46.05 0 .1 0 .14-.02a8.79 8.79 0 0 0 5.99-8.34"
          />
        </g>
        <defs>
          <clipPath id="clip0_298_785">
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
export default IconAusdcFull
