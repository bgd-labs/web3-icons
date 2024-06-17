import type { SVGProps } from "react"
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const IconUnknownMono = ({
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
      d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16m-1.815-13.13v.258h2.813v-.258q.008-.747.186-1.256.186-.51.557-.899a5 5 0 0 1 .965-.745 6.2 6.2 0 0 0 1.21-.952q.512-.532.794-1.218.29-.693.29-1.583 0-1.332-.646-2.276-.645-.945-1.782-1.439Q17.436 8 15.96 8q-1.344 0-2.457.495a4.1 4.1 0 0 0-1.79 1.484q-.675.99-.712 2.512h3.029q.023-.624.297-1.043.274-.426.705-.64.431-.22.913-.22.498 0 .906.213.416.213.66.61.246.395.246.92 0 .495-.215.898a2.7 2.7 0 0 1-.58.723 7 7 0 0 1-.824.632 5.2 5.2 0 0 0-1.054.883q-.438.487-.668 1.279-.222.792-.23 2.124m.2 4.597q.528.533 1.27.533.475 0 .876-.244.4-.25.646-.662.252-.419.26-.92a1.77 1.77 0 0 0-.542-1.28q-.535-.532-1.24-.532-.742 0-1.27.532a1.74 1.74 0 0 0-.512 1.28q-.007.753.512 1.293"
      clipRule="evenodd"
    />
  </svg>
)
export default IconUnknownMono
