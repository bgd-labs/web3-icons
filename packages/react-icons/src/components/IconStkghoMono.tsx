import type { SVGProps } from "react"
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const IconStkghoMono = ({
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
      d="m17.86 15.25 1.96 3.25h-4.88c-1.76 0-3.09-1.47-3.09-3.25S13.18 12 14.94 12h4.2l-1.2-2h-3c-2.82 0-5.19 2.36-5.19 5.26s2.38 5.24 5.19 5.24h7.31v-1.99l-1.94-3.25h-2.44z"
    />
    <path
      fill="currentColor"
      d="M14.7 15.54c-.54 0-.98.45-.98 1s.44 1 .98 1 .98-.45.98-1-.44-1-.98-1M14.7 12.77c-.54 0-.98.45-.98 1s.44 1 .98 1 .98-.45.98-1-.44-1-.98-1"
    />
    <path
      fill="currentColor"
      d="M16 0C7.16 0 0 7.16 0 16s7.16 16 16 16 16-7.16 16-16S24.84 0 16 0m9.49 17.69c0 1.26-.51 2.54-1.51 3.82-.77.98-1.83 1.96-3.15 2.92a28.3 28.3 0 0 1-4.51 2.64.63.63 0 0 1-.54 0 28.3 28.3 0 0 1-4.51-2.64c-1.32-.96-2.38-1.94-3.15-2.92-1-1.28-1.51-2.57-1.51-3.82V8.04c0-.14.05-.28.13-.39s.2-.2.34-.24l8.78-2.63c.12-.04.25-.04.38 0l8.78 2.63c.14.04.25.12.34.24.08.11.13.25.13.39z"
    />
  </svg>
)
export default IconStkghoMono
