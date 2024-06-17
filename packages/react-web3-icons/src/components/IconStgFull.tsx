import type { SVGProps } from "react"
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const IconStgFull = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    fill="none"
    viewBox="0 0 32 32"
    aria-labelledby={titleId}
    aria-describedby={descId}
    {...props}
  >
    {desc ? <desc id={descId}>{desc}</desc> : null}
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath="url(#clip0_298_1022)">
      <path
        fill="#000"
        d="M0 16C0 7.16 7.16 0 16 0s16 7.16 16 16-7.16 16-16 16S0 24.84 0 16"
      />
      <path
        fill="#A5A5A5"
        d="m18.37 4.24.69 1.62c1.36 3.18 3.9 5.72 7.08 7.08l1.62.69c.42.18.77.44 1.03.75A13.15 13.15 0 0 0 17.61 3.2c.31.27.57.61.75 1.03zM4.23 13.63l1.62-.69c3.18-1.36 5.72-3.89 7.08-7.08l.69-1.62c.18-.42.44-.77.75-1.03C8.58 4.02 4 8.6 3.19 14.39c.27-.31.61-.57 1.03-.75zm23.53 4.75-1.62.69a13.43 13.43 0 0 0-7.08 7.08l-.69 1.62c-.17.4-.42.75-.75 1.04 5.79-.81 10.37-5.39 11.18-11.18-.27.31-.61.57-1.03.75zm-14.13 9.39-.69-1.62c-1.36-3.18-3.9-5.72-7.08-7.08l-1.62-.69a2.75 2.75 0 0 1-1.03-.75C4.02 23.42 8.6 28 14.39 28.81c-.31-.27-.57-.61-.75-1.04z"
      />
      <path
        fill="#fff"
        d="m10.28 14.77.77-.33a6.42 6.42 0 0 0 3.38-3.38l.33-.77c.46-1.08 2-1.08 2.46 0l.33.77a6.42 6.42 0 0 0 3.38 3.38l.77.33c1.08.46 1.08 2 0 2.46l-.77.33a6.42 6.42 0 0 0-3.38 3.38l-.33.77c-.46 1.08-2 1.08-2.46 0l-.33-.77a6.42 6.42 0 0 0-3.38-3.38l-.77-.33c-1.08-.46-1.08-2 0-2.46"
      />
    </g>
    <defs>
      <clipPath id="clip0_298_1022">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default IconStgFull
