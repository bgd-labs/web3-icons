import type { SVGProps } from "react"
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const IconGuniMono = ({
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
    viewBox="0 0 32 33"
    aria-labelledby={titleId}
    aria-describedby={descId}
    {...props}
  >
    {desc ? <desc id={descId}>{desc}</desc> : null}
    {title ? <title id={titleId}>{title}</title> : null}
    <path fill="currentColor" d="m21.65 10.97-5.69-5.6 8.64 3.99z" />
    <path
      fill="currentColor"
      d="M27.33 5.37v3.99H24.6l-8.59 8.59v1.68l2.02 2.02 2.27-1.48 3.98-1.43h2.81c-.97 5.25-5.57 9.24-11.11 9.24-6.24 0-11.3-5.06-11.3-11.3S9.72 5.4 15.95 5.38V.67C7.14.7 0 7.85 0 16.67s7.16 16 16 16 16-7.16 16-16c0-4.42-1.77-8.39-4.67-11.29z"
    />
    <path
      fill="currentColor"
      d="M19.32 3.56c0 .36-.08.63-.23.79q-.225.24-.63.24t-.63-.24c-.15-.16-.23-.43-.23-.79V1.44h-.89v2.38c0 .57.15.83.46 1.13s.73.4 1.28.4.97-.1 1.27-.4c.31-.3.46-.56.46-1.13V1.44h-.87v2.12zM23.72 3.76l-1.91-2.33h-.73v3.84h.88V2.94l1.91 2.33h.73V1.43h-.88zM26.4 1.43h-.89v3.84h.89z"
    />
  </svg>
)
export default IconGuniMono