import type { SVGProps } from "react"
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const IconStatawoneFull = ({
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
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M31.9514 17.2566L29.9574 17.1017C29.9856 16.7385 30 16.3711 30 16C30 15.6289 29.9856 15.2615 29.9574 14.8983L31.9514 14.7434C31.9836 15.158 32 15.5771 32 16C32 16.4229 31.9836 16.842 31.9514 17.2566ZM31.5613 12.2633L29.6162 12.7286C29.4442 12.0098 29.2167 11.3125 28.9385 10.6415L30.7859 9.87539C31.1042 10.643 31.3645 11.4408 31.5613 12.2633ZM29.6443 7.63905L27.94 8.68564C27.5553 8.05912 27.1224 7.46495 26.6466 6.90831L28.1668 5.60871C28.7102 6.24434 29.2046 6.92307 29.6443 7.63905ZM26.3913 3.83321L25.0917 5.35342C24.535 4.87756 23.9409 4.44473 23.3144 4.06L24.361 2.35569C25.0769 2.79537 25.7557 3.28982 26.3913 3.83321ZM22.1246 1.21409L21.3585 3.06154C20.6875 2.78328 19.9902 2.5558 19.2714 2.38381L19.7367 0.438703C20.5592 0.635478 21.357 0.895765 22.1246 1.21409ZM17.2566 0.0486182L17.1017 2.04261C16.7385 2.0144 16.3711 2 16 2C15.6289 2 15.2615 2.0144 14.8983 2.04261L14.7434 0.0486183C15.158 0.0164067 15.5771 0 16 0C16.4229 0 16.842 0.0164067 17.2566 0.0486182ZM12.2633 0.438703L12.7286 2.38381C12.0098 2.5558 11.3125 2.78329 10.6415 3.06154L9.87539 1.21409C10.643 0.895765 11.4408 0.635479 12.2633 0.438703ZM7.63905 2.3557L8.68564 4.06C8.05912 4.44473 7.46495 4.87756 6.90831 5.35342L5.60871 3.83321C6.24434 3.28982 6.92307 2.79537 7.63905 2.3557ZM3.83321 5.60872L5.35342 6.90832C4.87756 7.46495 4.44473 8.05913 4.06 8.68564L2.35569 7.63905C2.79537 6.92307 3.28982 6.24435 3.83321 5.60872ZM1.21409 9.8754L3.06154 10.6415C2.78328 11.3125 2.5558 12.0098 2.38381 12.7286L0.438703 12.2633C0.635478 11.4408 0.895764 10.643 1.21409 9.8754ZM0.0486182 14.7434C0.0164067 15.158 0 15.5771 0 16C0 16.4229 0.0164067 16.842 0.0486183 17.2566L2.04261 17.1017C2.0144 16.7385 2 16.3711 2 16C2 15.6289 2.0144 15.2615 2.04261 14.8983L0.0486182 14.7434ZM0.438703 19.7367L2.38381 19.2714C2.5558 19.9902 2.78329 20.6875 3.06154 21.3585L1.21409 22.1246C0.895765 21.357 0.635479 20.5592 0.438703 19.7367ZM2.3557 24.361L4.06 23.3144C4.44473 23.9409 4.87756 24.5351 5.35342 25.0917L3.83321 26.3913C3.28982 25.7557 2.79537 25.0769 2.3557 24.361ZM5.60872 28.1668L6.90832 26.6466C7.46495 27.1224 8.05913 27.5553 8.68564 27.94L7.63905 29.6443C6.92307 29.2046 6.24435 28.7102 5.60872 28.1668ZM9.8754 30.7859L10.6415 28.9385C11.3125 29.2167 12.0098 29.4442 12.7286 29.6162L12.2633 31.5613C11.4408 31.3645 10.643 31.1042 9.8754 30.7859ZM14.7434 31.9514L14.8983 29.9574C15.2615 29.9856 15.6289 30 16 30C16.3711 30 16.7385 29.9856 17.1017 29.9574L17.2566 31.9514C16.842 31.9836 16.4229 32 16 32C15.5771 32 15.158 31.9836 14.7434 31.9514ZM19.7367 31.5613L19.2714 29.6162C19.9902 29.4442 20.6875 29.2167 21.3585 28.9385L22.1246 30.7859C21.357 31.1042 20.5592 31.3645 19.7367 31.5613ZM24.361 29.6443L23.3144 27.94C23.9409 27.5553 24.5351 27.1224 25.0917 26.6466L26.3913 28.1668C25.7557 28.7102 25.0769 29.2046 24.361 29.6443ZM28.1668 26.3913L26.6466 25.0917C27.1224 24.535 27.5553 23.9409 27.94 23.3144L29.6443 24.361C29.2046 25.0769 28.7102 25.7557 28.1668 26.3913ZM30.7859 22.1246L28.9385 21.3585C29.2167 20.6875 29.4442 19.9902 29.6162 19.2714L31.5613 19.7367C31.3645 20.5592 31.1042 21.357 30.7859 22.1246Z"
      fill="url(#paint0_linear_42_5)"
    />
    <g clipPath="url(#circleClip)">
      <g
        style={{
          transform: "scale(0.8125)",
          transformOrigin: "50% 50%",
        }}
      >
        <g clipPath="url(#clip0_297_116)">
          <path
            fill="#fff"
            d="M16 32c8.84 0 16-7.16 16-16S24.84 0 16 0 0 7.16 0 16s7.16 16 16 16"
          />
          <path
            fill="#000"
            d="M11.38 27.69c5.98 0 5.98-.09 7-.39 1.33-.39-3.74-3.9-7-3.9s-5.89.96-5.89 2.15 2.64 2.15 5.89 2.15z"
          />
          <path
            fill="#D83878"
            d="M20.32 6.57c-4.67-2.59-10.55-.9-13.13 3.77a9.66 9.66 0 0 0-.89 7.16c.02.08.03.12.05.24v.02c.03.15.09.3.16.43.09.2.28.56.5.96.34.6.71 1.21 1.1 1.78 1.05 1.54 2.1 2.59 3 2.89 1.2.4 5.72-4.38 12.87-14.01-1.3-1.37-2.51-2.45-3.65-3.25z"
          />
          <path
            fill="#fff"
            d="M17.58 26.62c3.91 0 7.43-2.35 8.92-5.96a9.66 9.66 0 0 0-2.09-10.52c-3.77-3.77-9.89-3.77-13.66 0-.45.45-.85.94-1.2 1.46-2.96 4.43-1.77 10.43 2.66 13.39a9.7 9.7 0 0 0 5.37 1.63"
          />
          <path
            fill="#000"
            d="M24.18 8.64c-1.16-1.18-2.27-2.15-3.33-2.88l-.04-.03c-2.41-1.34-5.24-1.7-7.91-.99-5.68 1.51-9.06 7.33-7.55 13.01.01.05.02.08.04.18v.03c.05.23.13.45.23.66s.3.6.53 1.01c.35.63.73 1.26 1.14 1.86.86 1.26 1.73 2.24 2.59 2.81 1.94 2.03 4.66 3.3 7.69 3.3 5.07 0 9.44-3.58 10.43-8.56.8-4.04-.81-8-3.83-10.4zM5.99 15.57c-.03-.48-.01-.96.03-1.44l1.17.58c-.01.06-.03.11-.04.17-.08.38-.13.76-.16 1.15zm14.33-9c.09.06.18.14.27.2-.31-.09-.61-.17-.93-.24C14.33 5.47 9.14 8.6 7.49 13.64l-1.3-.65c.2-.92.53-1.82.99-2.66 2.59-4.67 8.47-6.36 13.13-3.77zM7.01 19.15c-.22-.4-.41-.76-.5-.96-.07-.14-.12-.28-.15-.43v-.02l-.06-.24c-.06-.21-.1-.43-.14-.64l.8.37c.02.82.14 1.62.33 2.39-.09-.16-.2-.31-.29-.46z"
          />
          <path
            fill="#fff"
            d="M17.55 26.55a9.62 9.62 0 0 0 9.62-9.62 9.62 9.62 0 0 0-9.62-9.62 9.62 9.62 0 0 0-9.62 9.62 9.62 9.62 0 0 0 9.62 9.62"
          />
          <path
            fill="url(#paint0_linear_297_116)"
            d="M20.85 11.16c-1.36 0-2.48 1.12-2.51 2.48v2.77c-.25 0-.5.04-.79.04s-.54 0-.79.04v-2.84c0-1.37-1.15-2.48-2.55-2.45-1.33 0-2.4 1.12-2.44 2.45v6.62c.04 1.37 1.15 2.48 2.55 2.45 1.36-.04 2.44-1.12 2.44-2.45V17.5c.25 0 .5-.04.79-.04s.54 0 .79-.04v2.81c.04 1.37 1.15 2.48 2.55 2.45 1.36-.04 2.44-1.12 2.44-2.45v-6.58a2.48 2.48 0 0 0-2.48-2.48zm-6.56 1c.82 0 1.47.65 1.47 1.48v2.91c-.72.11-1.43.32-2.12.61-.29.14-.57.29-.82.5v-4.03c0-.79.65-1.48 1.47-1.48zm1.47 8.1c0 .83-.65 1.48-1.47 1.48s-1.47-.65-1.47-1.48v-.65c0-.58.47-1.15 1.26-1.48.54-.25 1.11-.4 1.72-.5zm5.09 1.47c-.83 0-1.47-.65-1.47-1.48v-2.91c.72-.11 1.43-.32 2.12-.61.29-.14.57-.29.83-.5v4.03c0 .83-.68 1.48-1.47 1.48zm.21-5.93c-.54.25-1.11.4-1.72.5v-2.66c0-.83.65-1.48 1.47-1.48s1.47.65 1.47 1.48v.65c.04.61-.43 1.15-1.22 1.51"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_297_116"
            x1={20.44}
            x2={12.45}
            y1={14.05}
            y2={22.02}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6AE4A6" />
            <stop offset={1} stopColor="#4DA9E2" />
          </linearGradient>
          <clipPath id="clip0_297_116">
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
        id="paint0_linear_42_5"
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
export default IconStatawoneFull
