import type { SVGProps } from "react"
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const IconAopMono = ({
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
        <g fill="currentColor" clipPath="url(#clip0_298_720)">
          <path d="M21.36 13.4h-1.44l-.46 2.15h1.38c.34 0 .63-.09.88-.28.26-.18.42-.45.5-.79.02-.14.04-.26.04-.36 0-.23-.07-.41-.2-.53-.14-.13-.37-.19-.7-.19M12.66 13.34c-.45 0-.83.13-1.15.4-.31.26-.54.67-.67 1.21-.14.54-.29 1.19-.43 1.97-.03.16-.05.33-.05.5 0 .74.38 1.1 1.15 1.1.45 0 .83-.13 1.14-.4.32-.26.55-.67.68-1.21.18-.75.32-1.41.42-1.97.03-.17.05-.34.05-.52 0-.73-.38-1.09-1.14-1.09z" />
          <path d="M16 0C7.16 0 0 7.16 0 16s7.16 16 16 16 16-7.16 16-16S24.84 0 16 0m-.02 14.91c-.12.71-.26 1.41-.43 2.08-.28 1.1-.76 1.92-1.45 2.46s-1.61.8-2.76.8c-.95 0-1.73-.22-2.34-.67-.6-.46-.9-1.1-.9-1.95 0-.18.02-.39.06-.65.1-.58.25-1.27.44-2.08.54-2.2 1.95-3.3 4.22-3.3.62 0 1.17.1 1.66.31.49.2.87.5 1.15.91q.42.6.42 1.44c0 .17-.02.38-.06.64zm8.47-.41c-.2.92-.6 1.6-1.21 2.04-.6.44-1.43.66-2.47.66h-1.62l-.55 2.63c-.02.09-.06.16-.13.22a.34.34 0 0 1-.23.08h-1.63c-.09 0-.16-.03-.2-.08a.33.33 0 0 1-.04-.22l1.66-7.81c.02-.09.06-.16.13-.22a.34.34 0 0 1 .23-.08h3.19c.89 0 1.6.18 2.14.55s.82.9.82 1.6c0 .2-.02.41-.07.62z" />
        </g>
        <defs>
          <clipPath id="clip0_298_720">
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
export default IconAopMono
