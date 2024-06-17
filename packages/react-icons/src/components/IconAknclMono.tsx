import type { SVGProps } from "react"
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const IconAknclMono = ({
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
        <path
          fill="currentColor"
          d="M16 .64c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16m.67 3.27q.03-.105.09-.18c.18-.23.5-.27.73-.1l6.58 4.84c.06.05.12.11.15.18.12.24.03.53-.21.65l-9.75 5.39 2.4-10.78zm-2.13 24.42a.5.5 0 0 1-.69.13l-6.38-4.9c-.33-.26-.53-.66-.52-1.08V10c0-.41.19-.81.52-1.06l6.41-4.92c.11-.08.25-.1.38-.08.27.05.44.31.39.58l-2.5 11.71 2.47 11.71c.03.13 0 .27-.08.38zm9.53-3.94-6.59 4.84c-.06.05-.12.08-.19.1a.525.525 0 0 1-.63-.39l-2.4-10.78 9.76 5.39a.495.495 0 0 1 .06.84zm.98-2.88a.505.505 0 0 1-.77.44l-9.63-5.52 9.63-5.52a.53.53 0 0 1 .27-.08c.28 0 .5.23.5.51v10.17"
        />
      </g>
    </g>
    <defs>
      <clipPath id="circleClip">
        <circle cx={16} cy={16} r={13} />
      </clipPath>
    </defs>
  </svg>
)
export default IconAknclMono