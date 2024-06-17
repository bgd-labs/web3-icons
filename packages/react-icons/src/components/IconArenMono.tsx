import type { SVGProps } from "react"
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const IconArenMono = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    aria-describedby={descId}
    {...props}
  >
    {desc ? <desc id={descId}>{desc}</desc> : null}
    {title ? <title id={titleId}>{title}</title> : null}
    <circle cx={16} cy={16} r={15} stroke="currentColor" strokeWidth={2} />
    <g clipPath="url(#circleClip)">
      <g
        style={{
          transform: "scale(0.8125)",
          transformOrigin: "50% 50%",
        }}
      >
        <g clipPath="url(#clip0_298_748)">
          <path
            fill="currentColor"
            d="M16 0C7.16 0 0 7.16 0 16s7.16 16 16 16 16-7.16 16-16S24.84 0 16 0M6.63 10.79l9.38-5.42.21.12.42.25.42.24L11.3 9.3l-.21-.36-1.56.9-.21-.36-2.69 1.56v-.25m0 1.7 10.85-6.27.21.13.42.24.42.24-5.75 3.32-.21-.37-3.04 1.75-.21-.36-2.69 1.55v-.24zm0 1.7 12.32-7.12.21.12.42.24.42.25L14.24 11l-.21-.37-4.51 2.61-.21-.37-2.69 1.56v-.24zm0 1.71 13.8-7.97.21.12.42.25.42.24-5.76 3.32-.21-.36-5.99 3.46-.21-.37-2.69 1.56v-.25zm0 1.7L21.9 8.78l.21.12.42.24.42.25-5.71 3.3-.21-.36-7.5 4.33-.21-.37-2.69 1.56v-.25m0 1.7 16.75-9.67.21.12.42.25.42.24-5.71 3.3-.21-.37-8.98 5.18-.21-.36-2.69 1.55zm0 1.71 18.22-10.53.21.12.32.18v.61l-6.66 3.84-.21-.36-8.98 5.18-.21-.36-2.69 1.55V21zm.94 1.15 17.8-10.28v1.22l-6.7 3.87-.21-.37-8.96 5.17-.21-.36-1.51.87zm1.48.85 16.33-9.43v1.22l-6.7 3.87-.21-.37-7.46 4.31-.21-.37-1.53.89-.21-.12zm1.47.85 14.86-8.58v1.22l-6.7 3.87-.21-.37-5.98 3.46-.21-.37-1.53.89-.21-.12zm2.95 1.71 11.9-6.87v1.22l-6.7 3.87-.21-.37-3.03 1.76-.21-.37-1.54.89-.21-.12zm11.91-3.95-6.7 3.87-.21-.37-1.56.91-.21-.37-1.53.89-.21-.12 10.43-6.02v1.22zm0-3.42-6.7 3.87-.21-.36-4.51 2.6-.21-.36-1.53.89-.21-.12 13.38-7.73v1.21z"
          />
        </g>
        <defs>
          <clipPath id="clip0_298_748">
            <path fill="#fff" d="M0 0h32v32H0z" />
          </clipPath>
        </defs>
      </g>
    </g>
    <defs>
      <clipPath id="circleClip">
        <circle cx={16} cy={16} r={13} />
      </clipPath>
    </defs>
  </svg>
)
export default IconArenMono
