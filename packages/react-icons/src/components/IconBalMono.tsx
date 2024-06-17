import type { SVGProps } from "react"
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const IconBalMono = ({
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
      d="M16 0C7.16 0 0 7.16 0 16s7.16 16 16 16 16-7.16 16-16S24.84 0 16 0m0 7.28c3.53 0 6.39.96 6.39 2.13s-2.86 2.13-6.39 2.13-6.39-.96-6.39-2.13S12.47 7.28 16 7.28m-2.73 4.69a17.7 17.7 0 0 0 5.36.01h.09c3.42.36 5.89 1.43 5.89 2.69 0 1.57-3.86 2.85-8.61 2.85s-8.61-1.27-8.61-2.85c0-1.26 2.47-2.32 5.89-2.7zM16 24.72c-5.93 0-10.74-1.59-10.74-3.56 0-1.45 2.63-2.7 6.4-3.25 1.43.28 2.89.41 4.34.41 1.42 0 2.85-.12 4.25-.39l.1-.02c3.77.55 6.4 1.8 6.4 3.25 0 1.97-4.81 3.56-10.74 3.56z"
    />
  </svg>
)
export default IconBalMono
