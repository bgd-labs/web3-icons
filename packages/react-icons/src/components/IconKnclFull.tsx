import type { SVGProps } from "react"
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const IconKnclFull = ({
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
      fill="#fff"
      d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16"
    />
    <path
      fill="#65C7A0"
      d="m14.65 15.79 9.63 5.52c.24.14.55.07.7-.17.05-.08.07-.17.07-.27V10.71c0-.28-.22-.51-.5-.51-.1 0-.19.03-.27.08l-9.63 5.52zM24.07 7.83l-6.58-4.84a.514.514 0 0 0-.73.1c-.04.05-.07.12-.09.18l-2.4 10.78 9.75-5.39c.24-.12.33-.42.21-.65a.5.5 0 0 0-.15-.17M17.48 28.59l6.59-4.84a.495.495 0 0 0-.06-.84l-9.76-5.39 2.4 10.78c.07.28.35.45.63.39.07-.02.13-.05.19-.09"
    />
    <path
      fill="#65C7A0"
      d="m12.14 15.6 2.5-11.71a.49.49 0 0 0-.39-.58.47.47 0 0 0-.38.08L7.46 8.31c-.33.25-.52.64-.52 1.06v12.48c0 .42.19.82.52 1.08l6.38 4.9c.23.16.54.1.69-.13.08-.11.1-.25.08-.38l-2.47-11.71z"
    />
  </svg>
)
export default IconKnclFull
