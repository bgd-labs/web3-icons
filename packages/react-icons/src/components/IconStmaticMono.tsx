import type { SVGProps } from "react"
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const IconStmaticMono = ({
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
    <g clipPath="url(#clip0_298_710)">
      <path
        fill="currentColor"
        d="M16 0C7.16 0 0 7.16 0 16s7.16 16 16 16 16-7.16 16-16S24.84 0 16 0m10.51 21.41c0 .47-.26.9-.66 1.14l-4.49 2.61c-.41.24-.92.24-1.33 0l-4.49-2.61c-.42-.23-.67-.67-.66-1.14v-1.82l2.07-1.22v1.81c0 .47.26.9.66 1.15l2.38 1.38c.41.24.92.24 1.33 0l2.38-1.42c.42-.23.67-.67.66-1.14v-2.8c0-.47-.26-.9-.67-1.14l-2.38-1.38c-.41-.24-.92-.24-1.33 0l-3.05 1.78-2.07 1.22-3.05 1.78c-.41.24-.92.24-1.33 0l-4.49-2.6c-.42-.23-.67-.67-.66-1.14v-5.25c0-.47.25-.92.66-1.14l4.49-2.61c.41-.24.92-.24 1.33 0l4.42 2.61c.42.23.67.67.66 1.14v1.82l-2.07 1.22v-1.81c0-.47-.26-.9-.66-1.15l-2.38-1.38c-.41-.24-.92-.24-1.33 0L8.06 10.7c-.42.23-.67.67-.66 1.15v2.8c0 .47.26.9.66 1.14l2.42 1.42c.41.24.92.24 1.33 0l3.05-1.82 2.07-1.18 3.05-1.82c.41-.24.92-.24 1.33 0l4.53 2.64c.42.23.67.67.66 1.14v5.25z"
      />
    </g>
    <defs>
      <clipPath id="clip0_298_710">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default IconStmaticMono
