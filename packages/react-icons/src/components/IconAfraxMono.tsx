import type { SVGProps } from "react"
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const IconAfraxMono = ({
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
          d="M19.04 11.66a5.2 5.2 0 0 0-2.43-.93 5.16 5.16 0 0 0-5.22 2.82c-.24.49-.37.85-.47 1.34-.1.5-.1 1.44 0 1.95.32 1.59 1.32 2.92 2.74 3.64 1.96 1 4.29.66 5.91-.84a5.17 5.17 0 0 0 .67-6.78c-.26-.38-.83-.94-1.2-1.2"
        />
        <path
          fill="currentColor"
          d="M16 0C7.17 0 0 7.16 0 16s7.16 16 16 16 16-7.16 16-16S24.84 0 16 0m7.83 26.12s-2.27-2.15-2.87-2.73l-.28-.27-.26.16c-.99.6-2.21 1.01-3.43 1.15-.64.08-1.77.05-2.37-.06-1.19-.21-2.26-.62-3.18-1.2l-.18-.11-.19.19c-.49.52-.99 1.04-1.48 1.56l-1.3 1.35-.08-.07c-.22-.18-2.52-2.4-2.51-2.42.01-.01.68-.73 1.5-1.58.82-.86 1.5-1.58 1.51-1.6s-.04-.15-.15-.34c-.23-.39-.5-.98-.66-1.44a8.64 8.64 0 0 1 .77-7.3l.15-.25-.08-.08s-.7-.66-1.44-1.38c-.75-.71-1.35-1.3-1.35-1.32 0-.01.56-.61 1.24-1.32l1.22-1.3.25.24c.13.13.7.67 1.26 1.2s1.12 1.06 1.24 1.19l.23.22.2-.12c.11-.07.4-.22.65-.34.85-.43 1.69-.68 2.71-.83.43-.06 1.81-.05 2.27.02a8.6 8.6 0 0 1 3.41 1.26c.07.05.14.08.15.08.02 0 .65-.66 1.41-1.45.76-.8 1.39-1.44 1.42-1.44s2.56 2.39 2.59 2.45c0 .02-.64.71-1.43 1.53l-1.44 1.51.11.19c.22.37.6 1.18.72 1.54.85 2.46.58 5.12-.74 7.32l-.16.26.34.33c1.03.97 2.73 2.6 2.73 2.61 0 .03-2.46 2.61-2.48 2.6z"
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
export default IconAfraxMono
