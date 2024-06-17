import type { SVGProps } from "react"
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const IconStatametisMono = ({
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
      fill="currentColor"
    />
    <g clipPath="url(#circleClip)">
      <g
        style={{
          transform: "scale(0.8125)",
          transformOrigin: "50% 50%",
        }}
      >
        <g clipPath="url(#clip0_297_49)">
          <path
            fill="currentColor"
            d="M16 0C7.16 0 0 7.16 0 16s7.16 16 16 16 16-7.16 16-16S24.84 0 16 0m10.55 15.74c-.31.27-.88.69-.88.69s.03.19.11.35c.08.15.28.38.22.59s-.49.38-.36.61c.12.23.42.3.34.51-.09.21-.51.57-.47.72s.38 1.59-.4 1.84c-.59.19-2.22.29-2.99.34-.33.02-.63.2-.79.49-.12.22-.24.52-.29.92-.15 1.02-1.15 3.35-1.15 3.35l-.1.22c-.06.15-.19.26-.35.31-2.33.64-4.79.55-7.07-.26-.01 0-.02 0-.03-.01a.53.53 0 0 1-.28-.7c.21-.47.38-.94.5-1.32.06-.16.12-.33.19-.48.2-.46.6-1.4.87-1.97 2.88.64 4.63-.97 5.09-1.46.01-.01.02-.03.03-.04a.116.116 0 0 0-.08-.15c-1.46-.49-3.35-.12-4.64.86.41-.83.87-1.69 1.38-2.54 2.99.41 4.58-1.37 4.98-1.9 0-.01.02-.03.02-.04a.135.135 0 0 0-.09-.15c-1.39-.34-3.06.1-4.25 1.03.35-.53.71-1.05 1.08-1.55a6.2 6.2 0 0 0 3.64-5.03v-.05c-.02-.06-.09-.09-.15-.07-.71.25-3.4 1.42-3.93 4.98-.2.27-.5.69-.88 1.26.52-2.15-.32-3.65-.63-4.11 0-.01-.02-.03-.04-.04-.06-.03-.13-.02-.17.04-.35.59-1.48 2.83.03 5.38-.41.69-.86 1.5-1.32 2.42.16-2.5-1.18-3.89-1.61-4.27a.1.1 0 0 0-.04-.02c-.06-.02-.13.02-.15.08-.2.64-.75 3.04 1.34 5.18q-.39.84-.78 1.77c-.02 0-.04-.01-.05-.02a5 5 0 0 1-1.05-.46c-.27-.16-.56-.29-.85-.39-1.16-.38-.99-.94-1.6-2.06-.04-.07-.52-.57-.62-.66-.02-.02-.33-.2-.49-.53-.14-.3-.22-.58-.25-.85-.04-.36-.19-.6-.55-.73-1.71-.59-.94-2.81-.88-3.1.05-.25-.17-.8-.25-1.1 0-.04-.02-.08-.03-.14-.12-.59.15-1.1.36-1.3.21-.21.91-.54 1.06-.73s.26-.41.41-.59c.2-.25.81-.73 1.63-1.17.5-.27.58-.96.77-1.17.32-.37.81-.37 1.18-.69.18-.17.45-.25.62-.42.85-.87 1.98-1.22 3.1-1.43.76-.14 1.6.08 2.39.21.11.02.22.05.33.08 1.77.06 3.91.43 4.68 1.18.38.37.67.83.83 1.33.13.39.3.77.52 1.12l.47.77c.3.49.4 1.07.27 1.63-.07.32-.11.65-.02.84.15.29.6.76.87 1.03.13.13.28.25.44.34.36.23 1.06.67 1.06.71 0 .05.06.27-.25.54z"
          />
        </g>
        <defs>
          <clipPath id="clip0_297_49">
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
export default IconStatametisMono
