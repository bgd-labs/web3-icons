import type { SVGProps } from "react"
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const IconStataxsushiFull = ({
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
        <g clipPath="url(#clip0_298_486)">
          <path
            fill="#fff"
            d="M16 32c8.84 0 16-7.16 16-16S24.84 0 16 0 0 7.16 0 16s7.16 16 16 16"
          />
          <path
            fill="#0E0F22"
            fillRule="evenodd"
            d="M9.91 7.21c.61-.85 1.79-1.23 3.31-1.11 2.1.17 4.88 1.3 7.56 3.21 2.67 1.92 4.63 4.2 5.46 6.13.61 1.4.63 2.64.02 3.49l-4.18 5.85c-.61.85-1.8 1.23-3.31 1.11-2.1-.18-4.89-1.3-7.56-3.22-2.68-1.91-4.63-4.19-5.47-6.12-.61-1.4-.63-2.64-.02-3.49zm15.78 11.3c.49-.67.39-1.67-.09-2.78-.8-1.84-2.68-4-5.24-5.83-2.55-1.83-5.2-2.91-7.2-3.08-1.22-.1-2.18.12-2.67.8l-.02.04c-.46.68-.35 1.64.12 2.74.8 1.85 2.68 4.01 5.23 5.84s5.2 2.91 7.2 3.08c1.2.09 2.14-.12 2.64-.76zm-6.52-6.95c1.28.91 2.22 2 2.62 2.92.23.52.29.97.06 1.29-.22.31-.68.41-1.24.36-1-.08-2.33-.63-3.6-1.54-1.28-.91-2.22-1.99-2.62-2.91-.22-.52-.28-.98-.06-1.29s.68-.41 1.25-.37c.99.09 2.32.63 3.59 1.54"
            clipRule="evenodd"
          />
          <path
            fill="#F3B46E"
            fillRule="evenodd"
            d="M8.76 20.64c-1.42-1.38-2.47-2.81-3.02-4.09-.61-1.4-.63-2.64-.02-3.49l4.19-5.85c.61-.85 1.79-1.23 3.31-1.1 2.1.17 4.89 1.29 7.56 3.21s4.63 4.19 5.47 6.13c.07.16.13.33.19.5a2.4 2.4 0 0 0-.73-.21h-.12c-.8-1.84-2.68-4-5.23-5.82-2.55-1.83-5.2-2.91-7.2-3.08-1.21-.1-2.18.13-2.67.8l-.03.04c-.45.68-.35 1.65.12 2.74.8 1.84 2.68 4 5.23 5.83 2.07 1.49 4.21 2.48 6.02 2.89-.73 1.03-1.52 1.94-2.56 2.14-.9.18-1.8-.23-2.61-1.15-.85-.96-1.54-2.33-2.51-2.55-1.74-.4-3.3 2.61-5.03 3-.12.03-.24.05-.37.06zm10.42-9.08c1.28.91 2.22 1.99 2.62 2.92.23.52.29.98.06 1.29-.23.32-.68.4-1.25.36-1-.08-2.33-.63-3.6-1.54-1.28-.91-2.22-1.99-2.62-2.92-.23-.52-.29-.98-.06-1.29.23-.32.68-.4 1.25-.36 1 .08 2.33.63 3.6 1.54"
            clipRule="evenodd"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M22.01 20.13c.7.13 1.42.15 2.13.06.08-.01.14-.09.13-.17-.02-.08-.09-.14-.17-.13-.68.09-1.37.07-2.04-.06-.08 0-.16.05-.17.13 0 .04 0 .08.03.11.02.03.06.05.1.06zm-1.2-.27c.2.05.4.1.6.14.04.01.08 0 .11-.02s.06-.06.06-.09c.01-.06 0-.12-.06-.16-.02-.01-.03-.02-.05-.02-.19-.04-.39-.09-.58-.14h-.06c-.04 0-.08.02-.11.06-.01.02-.02.03-.03.05 0 .04 0 .08.02.12s.05.06.09.07zM9.47 10.25c.57 2.32 2.8 4.5 4.6 6.04.03.03.07.04.11.04s.08-.02.1-.05c.04-.05.05-.11.02-.17 0-.02-.02-.03-.04-.05-1.75-1.51-3.94-3.62-4.49-5.89a.16.16 0 0 0-.19-.11c-.04 0-.07.03-.09.07-.02.03-.03.08-.02.11zm-.13-.94c0 .1.01.21.02.31.01.08.09.14.17.13.04 0 .07-.02.1-.05.02-.03.04-.07.03-.11-.01-.1-.02-.2-.02-.29a.15.15 0 0 0-.1-.14c-.02 0-.04-.01-.06 0-.08.01-.14.08-.14.16z"
            clipRule="evenodd"
          />
        </g>
        <defs>
          <clipPath id="clip0_298_486">
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
export default IconStataxsushiFull
