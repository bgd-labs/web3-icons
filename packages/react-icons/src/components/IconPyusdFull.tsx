import type { SVGProps } from "react"
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const IconPyusdFull = ({
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
    <g clipPath="url(#clip0_298_736)">
      <path
        fill="#306FEA"
        d="M16 32c8.84 0 16-7.16 16-16S24.84 0 16 0 0 7.16 0 16s7.16 16 16 16"
      />
      <path
        fill="#fff"
        d="M18.54 6.4h-5.63c-.62 0-1.17.45-1.27 1.08l-.4 2.55v.02H9.35c-.5 0-.91.41-.91.91 0 .51.42.91.91.93h1.61l-.28 1.76-.02.13H8.77c-.5 0-.91.41-.91.91 0 .49.42.91.91.91h1.61l-.87 5.5-.43 2.81c-.11.7.37 1.35 1.07 1.46.07.01.13.02.2.02h4.23c.62 0 1.15-.45 1.27-1.08l.81-5.04h1.98c3.57 0 6.48-2.95 6.42-6.54-.06-3.53-3-6.31-6.52-6.31zm-5.72 5.48 5.7.02a.939.939 0 1 1 0 1.88h-6.01l.3-1.91zm5.74 5.52h-2.38c-.62 0-1.15.45-1.27 1.08l-.81 5.06H11l1.23-7.93h6.29c1.52 0 2.76-1.24 2.76-2.76 0-1.51-1.25-2.76-2.76-2.76l-5.4-.02.28-1.81h5.25c2.57 0 4.65 2.12 4.59 4.69-.08 2.49-2.17 4.46-4.69 4.46z"
      />
    </g>
    <defs>
      <clipPath id="clip0_298_736">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default IconPyusdFull
