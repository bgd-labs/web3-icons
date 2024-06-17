import type { SVGProps } from "react"
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const IconWbethMono = ({
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
      d="M16 0C7.16 0 0 7.16 0 16s7.16 16 16 16 16-7.16 16-16S24.84 0 16 0m0 1.67c3.66 0 7 1.37 9.54 3.63l-.86.86a13.08 13.08 0 0 0-8.67-3.28c-3.32 0-6.35 1.24-8.67 3.28l-.86-.86a14.33 14.33 0 0 1 9.54-3.63zm0 23.5-5.54-7.92L16 20.57l5.54-3.26zm0-5.69-5.53-3.31h-.01l5.53-9.34 5.54 9.35-5.54 3.3zM6.14 24.7l-.86.86a14.33 14.33 0 0 1-3.63-9.54c0-3.67 1.39-7.03 3.66-9.58l.86.86a13.07 13.07 0 0 0-3.31 8.71c0 3.34 1.24 6.35 3.28 8.67zM16 30.39c-3.68 0-7.03-1.39-9.58-3.66l.86-.86c2.32 2.06 5.37 3.31 8.71 3.31s6.39-1.25 8.71-3.31l.86.86c-2.54 2.28-5.9 3.66-9.58 3.66zm10.74-4.82-.86-.86c2.04-2.32 3.28-5.35 3.28-8.67s-1.25-6.39-3.31-8.71l.86-.86c2.28 2.54 3.66 5.9 3.66 9.58s-1.37 7-3.63 9.54z"
    />
  </svg>
)
export default IconWbethMono
