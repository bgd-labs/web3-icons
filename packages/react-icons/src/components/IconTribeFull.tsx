import type { SVGProps } from "react"
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const IconTribeFull = ({
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
    <g clipPath="url(#clip0_298_930)">
      <path
        fill="#428AC9"
        d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16"
      />
      <path
        fill="#fff"
        d="M7.5 8.51c0-1.45 1.09-2.67 2.54-2.78 1.98-.15 3.97-.23 5.96-.23 2.27 0 4.4.12 5.96.23 1.45.11 2.54 1.33 2.54 2.78s-1.08 2.66-2.52 2.76c-1.99.15-3.99.22-5.98.23-2.36 0-4.46-.11-5.98-.23-1.44-.11-2.52-1.32-2.52-2.76m-.04 8.12c.09-.92.91-1.6 1.83-1.51h.04c.33.04.72.08 1.16.14.39.05.74.13 1.06.23 1.35.41 1.95 1.81 1.95 3.22v5.79c0 .83-.67 1.5-1.5 1.5h-1.87c-1.42 0-2.62-1.01-2.75-2.42-.2-2.31-.17-4.64.08-6.95m16.82 0a1.68 1.68 0 0 0-1.83-1.51h-.04c-.39.04-.77.09-1.16.14s-.74.13-1.06.23c-1.35.41-1.95 1.81-1.95 3.22v5.79c0 .83.67 1.5 1.5 1.5h1.87c1.42 0 2.62-1.01 2.75-2.42.2-2.31.18-4.64-.08-6.95"
      />
    </g>
    <defs>
      <clipPath id="clip0_298_930">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default IconTribeFull
