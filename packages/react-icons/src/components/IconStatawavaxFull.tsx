import type { SVGProps } from "react"
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const IconStatawavaxFull = ({
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
export default IconStatawavaxFull
