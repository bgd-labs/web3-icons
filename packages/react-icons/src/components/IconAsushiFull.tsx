import type { SVGProps } from "react"
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const IconAsushiFull = ({
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
        <g clipPath="url(#clip0_298_602)">
          <path
            fill="#fff"
            d="M16 32c8.84 0 16-7.16 16-16S24.84 0 16 0 0 7.16 0 16s7.16 16 16 16"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            d="m27.27 19.34-4.48 6.25c-.71.99-2.07 1.47-3.85 1.32-2.3-.19-5.34-1.4-8.25-3.49-2.92-2.09-5.04-4.59-5.97-6.7-.71-1.64-.7-3.08.02-4.07L9.21 6.4c.72-.99 2.08-1.47 3.85-1.32 2.3.19 5.35 1.4 8.26 3.5 2.92 2.09 5.04 4.59 5.96 6.7.72 1.64.69 3.08-.01 4.07zM10.41 7.26c.46-.64 1.39-.81 2.54-.71 2.1.17 4.85 1.31 7.52 3.22 2.66 1.91 4.63 4.16 5.47 6.09.45 1.06.6 1.99.14 2.63l-4.48 6.25c-.45.64-1.38.81-2.53.71-2.1-.17-4.86-1.31-7.53-3.22-2.66-1.91-4.63-4.16-5.46-6.09-.46-1.06-.6-1.99-.14-2.63z"
            clipRule="evenodd"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M9.82 6.98c1.46-2.04 6.42-.99 11.08 2.34 4.65 3.33 7.24 7.7 5.78 9.74l-4.47 6.25c-1.46 2.04-6.43.99-11.09-2.34-4.65-3.33-7.24-7.7-5.78-9.74z"
            clipRule="evenodd"
          />
          <path
            fill="#0E0F22"
            fillRule="evenodd"
            d="M9.49 6.61c.65-.91 1.91-1.31 3.54-1.18 2.25.18 5.22 1.39 8.08 3.43 2.85 2.05 4.95 4.49 5.84 6.55.65 1.5.67 2.82.02 3.73l-4.47 6.25c-.65.91-1.92 1.31-3.54 1.18-2.25-.2-5.23-1.39-8.08-3.44-2.86-2.04-4.95-4.48-5.85-6.54-.65-1.5-.67-2.82-.02-3.73zm16.86 12.08c.52-.73.41-1.79-.1-2.98-.86-1.96-2.86-4.27-5.6-6.23-2.72-1.95-5.56-3.11-7.69-3.29-1.3-.11-2.33.13-2.85.86l-.02.04c-.49.73-.38 1.76.13 2.93.86 1.97 2.86 4.29 5.59 6.24 2.72 1.95 5.56 3.11 7.69 3.29 1.28.1 2.29-.13 2.82-.81zm-6.96-7.44c1.37.98 2.38 2.14 2.8 3.12.25.55.31 1.04.07 1.38s-.73.43-1.32.38c-1.07-.09-2.48-.67-3.85-1.65s-2.38-2.13-2.8-3.11c-.24-.55-.3-1.04-.06-1.38s.73-.43 1.33-.39c1.06.1 2.48.67 3.84 1.65z"
            clipRule="evenodd"
          />
          <path
            fill="url(#paint0_linear_298_602)"
            d="M27.16 15.93c-.06-.18-.13-.35-.2-.52-.89-2.06-2.98-4.5-5.84-6.55-2.86-2.04-5.84-3.24-8.08-3.43-1.63-.13-2.89.27-3.54 1.18l-4.48 6.25c-.65.91-.63 2.23.02 3.73.59 1.36 1.71 2.89 3.22 4.36.13-.01.27-.03.4-.06.81-.18 1.58-.89 2.35-1.61.99-.92 1.98-1.83 3.02-1.58.73.16 1.31.94 1.91 1.73.25.34.51.68.78.97.87 1 1.82 1.44 2.79 1.24 1.1-.22 1.94-1.19 2.73-2.28-1.92-.44-4.21-1.5-6.42-3.09-2.72-1.95-4.73-4.26-5.59-6.24-.51-1.17-.62-2.2-.13-2.93l.02-.04c.52-.73 1.55-.97 2.85-.86 2.14.17 4.97 1.33 7.69 3.29 2.73 1.95 4.74 4.26 5.6 6.22h.13c.31.03.56.11.77.22"
          />
          <path
            fill="url(#paint1_linear_298_602)"
            d="M22.19 14.37c-.42-.99-1.43-2.15-2.8-3.12-1.36-.98-2.78-1.55-3.84-1.65-.61-.04-1.1.05-1.33.39-.24.34-.17.82.07 1.38.42.99 1.43 2.14 2.8 3.11 1.37.98 2.78 1.56 3.85 1.65.6.05 1.08-.04 1.32-.38.25-.34.18-.82-.07-1.38"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M22.42 20.41c.85.14 1.63.17 2.28.07.09-.01.15-.1.14-.18-.02-.09-.1-.15-.18-.14-.63.11-1.37.08-2.18-.07a.16.16 0 0 0-.18.14c-.01.09.04.17.13.18zm-1.28-.28c.22.05.42.11.64.15.09.02.17-.03.18-.12.02-.09-.03-.17-.12-.2-.21-.04-.41-.1-.62-.15a.165.165 0 0 0-.21.11c-.02.09.03.17.12.21zM9.02 9.85c.61 2.48 2.99 4.81 4.92 6.46.07.07.17.05.23-.01.05-.08.05-.17-.02-.23-1.87-1.62-4.21-3.87-4.8-6.29-.02-.09-.12-.14-.21-.12s-.14.11-.12.2zm-.14-1c0 .11.01.23.02.34.01.09.1.15.18.14.09-.01.15-.09.14-.17-.01-.11-.02-.22-.02-.31s-.08-.16-.17-.16c-.09.01-.15.09-.15.17z"
            clipRule="evenodd"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_298_602"
            x1={13.155}
            x2={21.145}
            y1={-0.189}
            y2={28.762}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#56ACE0" />
            <stop offset={0.52} stopColor="#B56FAE" />
            <stop offset={1} stopColor="#E65F9D" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_298_602"
            x1={9.774}
            x2={28.189}
            y1={-23.597}
            y2={49.169}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#56ACE0" />
            <stop offset={0.52} stopColor="#B56FAE" />
            <stop offset={1} stopColor="#E65F9D" />
          </linearGradient>
          <clipPath id="clip0_298_602">
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
export default IconAsushiFull
