import type { SVGProps } from "react"
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const IconDpiMono = ({
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
    <g fill="currentColor" clipPath="url(#clip0_294_3750)">
      <path d="M17.94 18.689c.503-.4.903-.924 1.19-1.57.288-.647.442-1.427.442-2.35 0-.462-.031-.863-.103-1.242a4 4 0 0 0-.78-.34 6.5 6.5 0 0 0-1.848-.256h-1.467v6.805c.267-.041.523-.093.78-.154a5.1 5.1 0 0 0 1.775-.893z" />
      <path d="M16.852 12.162c.749 0 1.437.092 2.073.287.103.03.185.082.287.123 0-.02-.01-.051-.02-.072q-.385-.982-1.078-1.58a4.5 4.5 0 0 0-1.632-.893 7.4 7.4 0 0 0-2.021-.287h-2.29v10.13H14c.215 0 .41-.021.626-.042v-7.666h2.237z" />
      <path d="M24.005 13.937c-.39-.944-.903-1.724-1.56-2.35a6.6 6.6 0 0 0-1.344-.985c.164.287.318.585.451.903.39.944.585 1.98.585 3.253s-.226 2.412-.667 3.346c-.451.944-1.026 1.724-1.734 2.34a7.3 7.3 0 0 1-2.35 1.385 7.5 7.5 0 0 1-2.535.462h-2.69v2.433h5.132c.831 0 1.673-.154 2.535-.462a7.3 7.3 0 0 0 2.35-1.386c.709-.616 1.283-1.396 1.735-2.34.451-.944.667-2.063.667-3.346s-.195-2.309-.585-3.253z" />
      <path d="M16 0C7.164 0 0 7.184 0 16.051c0 8.868 7.164 16.052 16 16.052s16-7.184 16-16.052S24.836 0 16 0m8.61 20.875c-.492 1.037-1.139 1.909-1.918 2.586a8.1 8.1 0 0 1-2.597 1.53c-.944.328-1.878.502-2.792.502h-5.131a.775.775 0 0 1-.77-.77v-2.432H9.72V7.307h5.419c.903 0 1.786.154 2.627.462.842.308 1.591.77 2.238 1.396.071.072.143.154.205.226.092.03.174.05.267.082a6.9 6.9 0 0 1 2.504 1.56c.718.698 1.303 1.57 1.734 2.607.442 1.057.637 2.185.637 3.55s-.247 2.638-.75 3.675z" />
    </g>
    <defs>
      <clipPath id="clip0_294_3750">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default IconDpiMono
