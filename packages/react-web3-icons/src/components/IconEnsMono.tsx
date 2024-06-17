import type { SVGProps } from "react"
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const IconEnsMono = ({
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
      d="M16 0C7.16 0 0 7.16 0 16s7.16 16 16 16 16-7.16 16-16S24.84 0 16 0M9.26 21.98a6.7 6.7 0 0 1-1.82-2.11 6.6 6.6 0 0 1-.78-2.67c-.08-.81-.09-1.63-.02-2.44.12-.77.35-1.51.69-2.21 0 0 .17-.33.26-.5-.05.31-.05.63 0 .94.11.69.34 1.35.68 1.95 3.38 5.73 7.4 11.49 7.4 11.49l-6.41-4.46zm.48-6.69s-.51-.87-.72-1.32c-.51-1.12-.5-2.42.04-3.53.2-.36.48-.68.83-.9l5.8-4.03-5.94 9.78zm13.24 6.21c-.2.36-.48.68-.83.91l-5.8 4.03 5.94-9.79s.51.87.72 1.32c.51 1.13.5 2.42-.04 3.53zm2.41-4.31c-.12.77-.35 1.51-.69 2.21 0 0-.17.33-.26.5.05-.31.05-.63 0-.94-.11-.69-.34-1.35-.68-1.95-3.39-5.73-7.4-11.49-7.4-11.49l6.41 4.46c.75.57 1.37 1.29 1.82 2.11.45.83.71 1.74.78 2.67.08.81.09 1.63.02 2.44z"
    />
  </svg>
)
export default IconEnsMono
