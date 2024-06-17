import type { SVGProps } from "react"
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const IconAwethFull = ({
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
        <g clipPath="url(#clip0_298_454)">
          <path
            fill="#fff"
            d="M32 16c0 8.84-7.16 16-16 16S0 24.84 0 16 7.17 0 16 0s16 7.16 16 16"
          />
          <path
            fill="#000"
            d="M11.33 27.82c6.05 0 6.05-.09 7.07-.39 1.34-.4-3.78-3.94-7.07-3.94s-5.96.97-5.96 2.17 2.67 2.17 5.96 2.17z"
          />
          <path
            fill="#000"
            d="m25.07 9.37.28.3-.24.33c-7.89 10.66-12.43 15.49-14.36 14.85-1.17-.39-2.35-1.58-3.53-3.3-.41-.61-.8-1.23-1.16-1.88-.19-.34-.37-.68-.54-1.03-.11-.21-.19-.44-.23-.67v-.03c-.02-.06-.03-.12-.04-.18-1.52-5.74 1.89-11.63 7.63-13.15 2.69-.72 5.56-.36 8 1l.04.03c1.3.91 2.68 2.15 4.15 3.73m-4.7-2.91a9.774 9.774 0 0 0-13.28 3.81 9.8 9.8 0 0 0-.9 7.23c.02.08.03.13.05.24v.02c.03.15.09.3.16.44.09.2.28.56.51.97q.51.93 1.11 1.8c1.06 1.56 2.12 2.62 3.03 2.93 1.21.41 5.78-4.43 13.01-14.17-1.31-1.38-2.54-2.48-3.69-3.28z"
          />
          <path
            fill="#D83878"
            d="M20.37 6.46c-4.72-2.61-10.66-.9-13.28 3.82a9.8 9.8 0 0 0-.9 7.23c.02.08.03.13.05.24v.02c.03.15.09.3.16.44.09.2.28.56.51.97q.51.93 1.11 1.8c1.06 1.56 2.12 2.62 3.03 2.93 1.21.41 5.78-4.43 13.01-14.17-1.31-1.38-2.54-2.48-3.69-3.28"
          />
          <path
            fill="#000"
            d="M17.6 27.72c-5.94.05-10.79-4.73-10.84-10.66-.05-5.94 4.73-10.79 10.66-10.84h.17c5.94.05 10.71 4.9 10.66 10.84a10.747 10.747 0 0 1-10.66 10.66zm0-.99c5.39 0 9.76-4.37 9.76-9.76s-4.37-9.76-9.76-9.76-9.76 4.37-9.76 9.76 4.37 9.76 9.76 9.76"
          />
          <path
            fill="#fff"
            d="M17.6 26.73c5.39 0 9.76-4.37 9.76-9.76s-4.37-9.76-9.76-9.76-9.76 4.37-9.76 9.76 4.37 9.76 9.76 9.76"
          />
          <path
            fill="#000"
            fillRule="evenodd"
            d="m10.3 18.97-1.29-3.89h1.13l.67 2.24.75-2.25h.92l.75 2.25.67-2.24h1.11l-1.29 3.89h-.93l-.78-2.23-.77 2.23zm5.14-.03v-3.87h3.11v.91H16.5v.59h1.86v.84H16.5v.61h2.08v.91h-3.14zm4.62 0v-2.93H18.9v-.94h3.39v.94h-1.16v2.93zm2.71 0v-3.87h1.07v1.45h1.37v-1.45h1.07v3.87h-1.07v-1.47h-1.37v1.47z"
            clipRule="evenodd"
          />
          <path
            fill="#000"
            d="M5.52 13.91a.56.56 0 0 1-.25-.74c.14-.27.47-.38.74-.25l1.58.79c.28.12.41.45.28.73-.12.28-.45.41-.73.28-.02 0-.03-.02-.05-.02l-1.58-.79zm-.18 2.62a.547.547 0 0 1-.27-.73c.13-.28.46-.4.73-.27l1.58.73c.28.11.42.44.31.72s-.44.42-.72.31c-.02 0-.03-.01-.05-.02l-1.58-.73z"
          />
        </g>
        <defs>
          <clipPath id="clip0_298_454">
            <path fill="#fff" d="M0 0h32v32H0z" />
          </clipPath>
        </defs>
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
export default IconAwethFull
