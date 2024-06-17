import type { SVGProps } from "react"
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const IconAraiMono = ({
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
        <g clipPath="url(#clip0_298_429)">
          <path
            fill="currentColor"
            d="M16 0C7.16 0 0 7.16 0 16s7.16 16 16 16 16-7.16 16-16S24.84 0 16 0m-3.83 19.95s-.03.01-.05.02c-.03.02-.06.03-.09.04-.04.02-.09.03-.13.04-.03 0-.05.01-.08.01-.05 0-.1.01-.15 0h-.08c-.05 0-.09-.01-.14-.03-.03 0-.06-.02-.09-.03-.02 0-.04 0-.06-.02a.94.94 0 0 1-.43-.43l-2.25-4.57a.92.92 0 0 1-.05-.69l.56-1.7c.04-.11.06-.18.1-.24.03-.05.06-.09.12-.12l8.76-5.42c.08-.05.17-.08.26-.1h.01c.07-.02.14-.02.21-.02h.07c.06 0 .12.02.18.04.03 0 .07.02.1.03.05.02.09.04.13.07.04.02.08.05.11.08.01.01.03.02.05.03.22.22.35.54.25.9l-.51 1.87c-.03.09-.07.18-.12.26l-6.39 9.68c-.07.11-.17.19-.27.26zm11.11-2.2-.56 1.7c-.04.11-.06.18-.1.24-.03.05-.06.09-.12.12l-8.76 5.42c-.08.05-.17.08-.26.1-.07.02-.14.02-.21.02h-.07c-.06 0-.12-.02-.18-.04-.03 0-.07-.02-.1-.03a.5.5 0 0 1-.13-.07.4.4 0 0 1-.11-.08.2.2 0 0 0-.05-.03.9.9 0 0 1-.25-.9l.51-1.87c.03-.09.07-.18.12-.26l6.39-9.68c.07-.11.17-.19.27-.26 0 0 .03-.03.05-.04.03-.02.06-.03.09-.04.04-.02.09-.03.13-.04.03 0 .05-.01.08-.01.05 0 .1-.01.15 0h.08c.05 0 .09.01.14.03.03 0 .06.02.09.03.02 0 .04 0 .06.02.18.09.33.23.43.43l2.25 4.57c.11.21.12.46.05.69z"
          />
        </g>
        <defs>
          <clipPath id="clip0_298_429">
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
export default IconAraiMono
