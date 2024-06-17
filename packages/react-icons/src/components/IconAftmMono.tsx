import type { SVGProps } from "react"
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const IconAftmMono = ({
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
          d="M9.96 15.86h-.02v.01l.01.01 5.49 2.91s.07.03.11.05V12.9s-.08.03-.11.05l-5.49 2.91zM9.87 9.72v5.18l4.94-2.59zM16.43 18.84s.08-.03.11-.05l5.49-2.91h.02v-.01l-.01-.01-5.49-2.91s-.07-.03-.11-.05v5.94zM9.96 8.79l5.5 2.91c.29.15.8.15 1.09 0l5.5-2.91h.02v-.01l-.01-.01-5.5-2.91c-.29-.15-.8-.15-1.09 0l-5.5 2.91h-.02v.01zM22.09 14.9V9.72l-4.94 2.59z"
        />
        <path
          fill="currentColor"
          d="m15.03 19.51-5.15-2.73v6.42l5.15 2.71c.3.16.62.32.93.33h.02c.31 0 .61-.16.91-.3l5.2-2.76v-6.4l-5.17 2.73c-.54.28-1.36.28-1.9 0z"
        />
        <path
          fill="currentColor"
          d="M16 0C7.16 0 0 7.16 0 16s7.16 16 16 16 16-7.16 16-16S24.84 0 16 0M9.09 25.84l-.35-.21-.06-.04c-.09-.05-.17-.11-.26-.17-.83-.56-1.14-1.18-1.14-2.45v-.04h.86c0 .56.06.93.19 1.18.11.21.26.38.55.58h.02c.06.05.13.1.22.15l.1.06.31.19-.44.74zm13.87-2.59c0 .29-.19.57-.54.76l-5.5 2.9c-.54.28-1.36.28-1.9 0l-5.5-2.9c-.35-.19-.52-.47-.53-.76V8.68c.02-.27.19-.51.53-.69l5.5-2.9c.54-.28 1.36-.28 1.9 0l5.5 2.9c.32.17.5.43.53.69v14.57zm.9-14.19c0-.56-.06-.93-.19-1.18-.11-.21-.26-.38-.55-.58h-.02c-.07-.06-.15-.11-.22-.15l-.1-.06-.31-.19.44-.74.35.21.06.04c.1.06.18.12.26.17.83.56 1.14 1.18 1.14 2.45v.04h-.86z"
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
export default IconAftmMono
