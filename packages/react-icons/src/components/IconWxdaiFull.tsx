import type { SVGProps } from "react"
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const IconWxdaiFull = ({
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
    <g clipPath="url(#clip0_297_211)">
      <path
        fill="#12326C"
        d="M27.28 0H4.72A4.72 4.72 0 0 0 0 4.72v22.56A4.72 4.72 0 0 0 4.72 32h22.56A4.72 4.72 0 0 0 32 27.28V4.72A4.72 4.72 0 0 0 27.28 0"
      />
      <path
        fill="#34775D"
        d="m20.13 15.57 3.72-3.72c.95-.95 1.14-2.51.28-3.55a2.584 2.584 0 0 0-3.83-.2l-8 8 8 8a2.577 2.577 0 0 0 3.65 0 2.577 2.577 0 0 0 0-3.65l-3.83-3.83a.74.74 0 0 1 0-1.05z"
      />
      <path
        fill="#52B136"
        d="m12.313 16.095 3.648-3.649 7.998 7.998a2.586 2.586 0 0 1 0 3.648 2.586 2.586 0 0 1-3.649 0z"
      />
      <path
        fill="#68DF57"
        d="m23.992 8.124-.057-.057a2.54 2.54 0 0 0-3.588-.003c-.99.99-.989 2.596.003 3.588l.057.057a2.54 2.54 0 0 0 3.588.003c.99-.99.989-2.596-.003-3.588M17.8 14.31l-6.19-6.22a2.577 2.577 0 0 0-3.65 0 2.577 2.577 0 0 0 0 3.65l3.79 3.79c.31.31.31.81 0 1.12l-3.79 3.79a2.577 2.577 0 0 0 0 3.65 2.577 2.577 0 0 0 3.65 0l6.2-6.2c.99-.99.99-2.6 0-3.59z"
      />
    </g>
    <defs>
      <clipPath id="clip0_297_211">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default IconWxdaiFull
