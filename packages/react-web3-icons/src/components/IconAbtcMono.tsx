import type { SVGProps } from "react"
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const IconAbtcMono = ({
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
          d="m15.92 10.91-.87 3.5c.99.25 4.05 1.25 4.54-.73.52-2.07-2.68-2.53-3.67-2.78zM14.61 16.19l-.96 3.86c1.19.3 4.86 1.47 5.4-.71.57-2.27-3.25-2.86-4.44-3.16z"
        />
        <path
          fill="currentColor"
          d="M19.87.48C11.3-1.66 2.62 3.56.48 12.13s3.08 17.25 11.65 19.39 17.25-3.08 19.39-11.65S28.44 2.62 19.87.48m3.19 13.24c-.23 1.56-1.09 2.31-2.24 2.58 1.58.82 2.38 2.08 1.61 4.26-.95 2.71-3.2 2.94-6.19 2.37l-.73 2.91-1.76-.44.72-2.87c-.46-.11-.92-.23-1.4-.36l-.72 2.89-1.75-.44.73-2.92c-.41-.1-.83-.22-1.25-.32l-2.28-.57.87-2.01s1.29.34 1.28.32c.5.12.72-.2.8-.42l1.15-4.6c.06.02.13.03.19.05a1 1 0 0 0-.18-.06l.82-3.29c.02-.37-.11-.84-.82-1.02.03-.02-1.28-.32-1.28-.32l.47-1.87 2.42.6c.36.1.74.19 1.12.27l.72-2.88 1.75.44-.7 2.83 1.41.33.7-2.81 1.76.44-.72 2.88c2.22.76 3.84 1.91 3.52 4.04z"
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
export default IconAbtcMono
