import type { SVGProps } from "react"
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const IconAdpiFull = ({
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
        <g clipPath="url(#clip0_294_3752)">
          <path
            fill="#8150E6"
            d="M32 16.051c0 8.868-7.164 16.052-16 16.052S0 24.919 0 16.05 7.164 0 16 0s16 7.184 16 16.051"
          />
          <path
            fill="#3C176B"
            d="M31.395 20.413 20.003 9.165l-6.487-1.221L9.72 22.29l9.586 9.473c5.83-1.232 10.489-5.645 12.09-11.35"
          />
          <path
            fill="#6B42BD"
            d="M14.615 21.04v-8.878h2.237c.749 0 1.437.092 2.073.287a4.5 4.5 0 0 1 1.632.893c.061.051.123.113.184.174 0-1.2-.43-2.401-1.036-3.49A7.3 7.3 0 0 0 17.6 9.74h-5.419v11.289c.821 0 1.632.072 2.453.01z"
          />
          <path
            fill="#9B74EC"
            d="M24.005 13.937c-.39-.944-.903-1.724-1.56-2.35a6.3 6.3 0 0 0-2.237-1.396 10 10 0 0 0-.513-.164c.615 1.088 1.046 2.278 1.036 3.49.37.38.616 1.847.831 2.4l-6.958 6.374V21.03c-.82.061-1.621 0-2.453-.01v3.694h5.132c.831 0 1.673-.154 2.535-.462a7.3 7.3 0 0 0 2.35-1.385c.708-.616 1.283-1.396 1.735-2.34.451-.944.667-2.063.667-3.346s-.195-2.309-.585-3.253z"
          />
          <path
            fill="#fff"
            d="M13.999 19.87c.76 0 1.488-.093 2.165-.288a5.1 5.1 0 0 0 1.776-.893c.503-.4.903-.924 1.19-1.57.288-.647.442-1.427.442-2.35 0-.924-.134-1.612-.39-2.269q-.385-.982-1.078-1.58a4.5 4.5 0 0 0-1.632-.893c-.626-.195-1.314-.287-2.073-.287h-2.237v10.13zM9.719 7.306h5.419c.903 0 1.786.154 2.627.462.842.308 1.591.77 2.238 1.396.646.626 1.17 1.406 1.56 2.35s.585 1.98.585 3.253-.226 2.412-.668 3.346c-.451.944-1.026 1.724-1.734 2.34a7.3 7.3 0 0 1-2.35 1.386 7.5 7.5 0 0 1-2.535.462H9.729V7.318z"
          />
        </g>
        <defs>
          <clipPath id="clip0_294_3752">
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
export default IconAdpiFull
