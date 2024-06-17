import type { SVGProps } from "react"
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const IconEursMono = ({
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
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M27.1 27.51c3.02-2.91 4.9-7 4.9-11.52C32 10.64 29.38 5.91 25.35 3c-5.55.63-10.16 3.21-11.75 6.91h14.88l-1.68 3.84h-14s-.09 1.47-.08 2.16c.01 1 .08 2.16.08 2.16h12.16l-1.6 3.71h-8.88c1.76 3.32 6.71 5.72 12.62 5.73"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M22.43 30.65C20.46 31.52 18.28 32 16 32 7.16 32 0 24.84 0 16S7.16 0 16 0c1.47 0 2.89.2 4.23.57-5.18.95-9.44 4.55-11.33 9.35H5.6l-1.68 3.84h4.24v2.25c0 .19.02.38.05 2.07H5.44l-1.52 3.71h5.26c2.2 4.97 6.14 7.91 13.25 8.86"
      clipRule="evenodd"
    />
  </svg>
)
export default IconEursMono
