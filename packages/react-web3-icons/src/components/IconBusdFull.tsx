import type { SVGProps } from "react"
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const IconBusdFull = ({
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
    <g clipPath="url(#clip0_292_114)">
      <path
        fill="#fff"
        d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16"
      />
      <path
        fill="#F0B90B"
        d="m16 3.25 3.18 3.18-7.98 7.98-3.18-3.18zM8.03 20.78l3.18 3.18 12.75-12.75-3.18-3.18zm4.78 4.78 3.18 3.19L28.74 16l-3.18-3.18zM9.61 16l-3.18-3.18L3.25 16l3.18 3.18z"
      />
    </g>
    <defs>
      <clipPath id="clip0_292_114">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default IconBusdFull
