import type { SVGProps } from "react"
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const IconAmplMono = ({
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
      d="M16 0C7.16 0 0 7.16 0 16s7.16 16 16 16 16-7.16 16-16S24.84 0 16 0m8.52 23.76V24c-.02 0-.04 0-.07.01h-6.42s-.01-.03-.02-.04v-.69c.05-.02.11-.03.16-.03.26-.04.53-.09.78-.15.1-.03.21-.06.3-.11.05-.02.1-.05.15-.07.24-.12.37-.38.33-.65-.01-.13-.03-.26-.07-.38a5 5 0 0 0-.19-.57c-1.33-3.72-2.65-7.44-3.95-11.16 0-.05-.03-.09-.06-.12-.01 0-.03.02-.04.02-.01.02-.02.04-.02.06-.64 1.83-1.32 3.65-1.99 5.46-.5 1.34-1 2.69-1.46 4.05-.19.54-.37 1.09-.54 1.64-.07.21-.12.42-.15.64-.02.15-.03.3-.01.44.02.19.12.37.28.48.1.07.22.13.34.17.19.07.39.12.58.15.22.04.44.07.66.11h.05v.05l.01.64v.04h-.15l-5.66.02c-.01-.24-.02-.49 0-.73.08-.02.16-.04.25-.05.24-.04.49-.1.72-.17.07-.02.13-.04.19-.07.31-.12.59-.32.8-.58.15-.18.27-.38.38-.59a10 10 0 0 0 .41-.88c.24-.61.49-1.21.73-1.82l2.48-6.28c.78-1.99 1.55-3.99 2.31-5.99l.05-.12c.28-.08.55-.16.84-.24.02.04.03.08.04.11.32.89.64 1.79.96 2.68 1.09 3.05 2.18 6.09 3.3 9.13l.93 2.49c.12.34.27.67.43.99.07.14.15.27.24.4.26.4.66.7 1.13.82.25.07.51.12.76.15l.18.03c.02.08.02.16.01.24v.25z"
    />
  </svg>
)
export default IconAmplMono
