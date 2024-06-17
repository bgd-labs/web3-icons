import type { SVGProps } from "react"
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const IconZrxFull = ({
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
    <g clipPath="url(#clip0_298_476)">
      <path
        fill="#2F2C2C"
        d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M15.49 27c-.27-.03-.54-.05-.81-.08-1.45-.17-2.85-.64-4.12-1.36a.2.2 0 0 1-.07-.05c2.21-1.65 4.4-3.29 6.61-4.94l.67.65c.37.36.74.72 1.1 1.09.09.09.16.09.26.03 1.1-.55 2.04-1.37 2.73-2.39l.11-.16s.06.07.08.1c.77 1.02 1.53 2.04 2.3 3.06.07.09.06.14-.01.22-1.78 2.03-4 3.27-6.67 3.7-.34.05-.68.07-1.02.11-.05 0-.09.02-.13.03H15.5zm.97-22 .56.06c1.58.15 3.05.62 4.42 1.4.02.01.04.03.07.05l-6.72 4.82c-.09-.08-.18-.16-.26-.25-.47-.46-.95-.92-1.41-1.38-.07-.07-.13-.08-.23-.03a7.2 7.2 0 0 0-2.77 2.42l-.1.15-2.47-3.29c.25-.26.48-.53.73-.77 1.62-1.58 3.55-2.59 5.78-2.99.43-.08.87-.1 1.3-.16.05 0 .1-.02.15-.03zM6.45 10.53l4.99 6.55-1.01 1.03c-.25.26-.5.52-.76.77-.07.07-.07.13-.03.22a7.2 7.2 0 0 0 2.42 2.77l.1.07s0 .01.03.05l-3.26 2.45c-1.95-1.68-3.21-3.75-3.72-6.26-.54-2.69-.1-5.22 1.23-7.64zm14.18 4.37.92-.95c.26-.27.51-.53.77-.79.08-.08.08-.14.03-.24a7.2 7.2 0 0 0-2.45-2.8c-.04-.02-.07-.05-.14-.1l3.28-2.46c1.86 1.59 3.09 3.55 3.66 5.91.71 2.95.08 5.87-1.15 7.93z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="clip0_298_476">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default IconZrxFull
