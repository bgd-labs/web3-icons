import type { SVGProps } from "react"
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const IconAwavaxFull = ({
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
    <circle
      cx={16}
      cy={16}
      r={15}
      stroke="url(#paint0_linear_40_91)"
      strokeWidth={2}
    />
    <g clipPath="url(#circleClip)">
      <g
        style={{
          transform: "scale(0.8125)",
          transformOrigin: "50% 50%",
        }}
      >
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M16 32.5C7.32 32.5.25 25.43.25 16.75S7.32 1 16 1s15.75 7.07 15.75 15.75S24.68 32.5 16 32.5"
          clipRule="evenodd"
        />
        <path
          fill="#383D51"
          d="M16 1.25c8.55 0 15.5 6.95 15.5 15.5s-6.95 15.5-15.5 15.5S.5 25.3.5 16.75 7.45 1.25 16 1.25m0-.5c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16"
        />
        <path
          fill="#000"
          d="M19.31 23.11h4.45c.66 0 .99 0 1.18-.13.21-.14.35-.37.36-.62.01-.22-.15-.5-.46-1.03l-.03-.06-2.23-3.81-.03-.04c-.31-.53-.47-.8-.67-.9a.8.8 0 0 0-.71 0c-.2.11-.37.39-.7.95l-2.22 3.81c-.33.57-.49.85-.48 1.08.02.25.15.48.36.62.19.13.52.13 1.18.13M19.28 12.89c.09-.36.09-.73 0-1.09-.08-.33-.26-.64-.61-1.26l-1.58-2.77c-.33-.57-.49-.86-.7-.97a.83.83 0 0 0-.72 0c-.21.11-.37.39-.7.97L7.3 21.28c-.32.57-.48.85-.47 1.08.02.25.15.48.36.62.2.13.52.13 1.17.13h3.11c.73 0 1.1 0 1.42-.09.36-.11.68-.29.96-.55.25-.24.43-.55.78-1.17v-.02l4.04-7.12c.36-.62.53-.94.61-1.27"
        />
      </g>
    </g>
    <defs>
      <clipPath id="circleClip">
        <circle cx={16} cy={16} r={13} />
      </clipPath>
      <linearGradient
        id="paint0_linear_40_91"
        x1={26.976}
        y1={4.32}
        x2={6.59198}
        y2={28.352}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B6509E" />
        <stop offset={1} stopColor="#2EBAC6" />
      </linearGradient>
    </defs>
  </svg>
)
export default IconAwavaxFull