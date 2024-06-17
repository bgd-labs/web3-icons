import type { SVGProps } from "react"
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const IconAustFull = ({
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
        <g clipPath="url(#clip0_298_940)">
          <path
            fill="#fff"
            d="M16 31.97c8.826 0 15.98-7.154 15.98-15.98S24.826.01 16 .01.02 7.164.02 15.99 7.174 31.97 16 31.97"
          />
          <path
            fill="url(#paint0_linear_298_940)"
            d="M16 31.98c-1.09 0-2.16-.11-3.22-.32-2.05-.42-3.98-1.24-5.72-2.41a16.1 16.1 0 0 1-5.79-7.03c-.41-.96-.72-1.97-.94-3-.44-2.12-.44-4.32 0-6.44.44-2.05 1.25-3.98 2.42-5.72a16.1 16.1 0 0 1 7.03-5.79c.96-.41 1.97-.72 3-.94a15.977 15.977 0 0 1 12.16 2.41 16.1 16.1 0 0 1 5.79 7.03c.41.96.72 1.97.94 3a15.977 15.977 0 0 1-2.41 12.16 16.1 16.1 0 0 1-7.03 5.79c-.96.41-1.97.72-3 .94-1.07.21-2.15.32-3.23.32m0-30.26c-.96 0-1.94.1-2.87.29-1.82.37-3.56 1.1-5.11 2.15-2.3 1.55-4.09 3.73-5.17 6.28-.36.86-.65 1.76-.84 2.68-.39 1.9-.39 3.86 0 5.76.37 1.82 1.1 3.56 2.15 5.11 1.55 2.3 3.73 4.09 6.28 5.17.86.36 1.76.65 2.68.84 1.9.39 3.86.39 5.76 0 1.82-.37 3.56-1.1 5.11-2.15A14.35 14.35 0 0 0 30 18.89c.39-1.9.39-3.86 0-5.76-.37-1.82-1.1-3.56-2.15-5.11-1.55-2.3-3.73-4.09-6.28-5.17-.86-.36-1.76-.65-2.68-.84-.95-.19-1.92-.29-2.88-.29z"
          />
          <path
            fill="#1C3B9E"
            d="M14.23 20.4c.47 1.75 2.16 3.06 3.01 3.01.02 0 3.23-.59 4.97-3.51 1.35-2.27.9-4.47-.96-4.5-.7.02-7.92 1.71-7.02 5m6.83-11.13c-2.39-2.02-5.71-2.5-8.54-1.24-.16.09-.34.16-.5.25-.11.06-.22.11-.34.2h.02c-.31.22-.62.5-.85.81-2.32 3.07 5.46 5.29 9.64 5.32 1.91 1.37 2.45-3.88.56-5.34z"
          />
          <path
            fill="#6390EF"
            d="M12.97 9.34c-1.07 1.6-4.63 2.76-5.23 2.56l.09-.14c.2-.4.42-.76.7-1.12.25-.36.54-.67.85-.99s.65-.59.99-.85c.22-.17.45-.31.67-.45.36-.2.76-.31 1.17-.31 1.61.04.79 1.3.76 1.3m-.88 11.37c.09.5 0 2.5-.11 2.67-.09 0-.27.02-.81-.27q-.405-.24-.81-.54c-.7-.51-1.32-1.15-1.85-1.86-.25-.36-.5-.72-.7-1.12-.2-.39-.39-.81-.54-1.21-.14-.42-.25-.87-.34-1.32-.14-.92-.14-1.85 0-2.75.09-.45.16-.9.34-1.32.02-.09.05-.16.09-.25.62.81 1.32 1.57 1.94 2.39s1.37 2.09 1.52 2.36c1.05 1.69 1.19 2.76 1.27 3.23m11.87-5.04c0 1.06-.2 2.14-.59 3.15-1.01 1.07-7.78-1.57-7.87-1.6-.92-.4-3.73-1.64-4-3.6-.36-2.81 5.31-4.75 7.8-4.83.31 0 1.21 0 1.75.45a8.46 8.46 0 0 1 2.9 6.43m-4.58 7.59c-.72.34-1.55.09-1.35-.62.42-1.37 3.96-2.81 4.75-2.86.09 0 .14.05.09.14-.81 1.41-2.02 2.56-3.48 3.35"
          />
          <path
            fill="url(#paint1_linear_298_940)"
            d="M10.66 24.62c-.02.34.2.61.54.65 7.19.05 14.14-.27 14.14-1.35 0-3.3-14.67.7-14.67.7z"
          />
          <path
            fill="url(#paint2_linear_298_940)"
            d="M10.66 24.62c-.02.34.2.61.54.65 7.19.05 14.1-.16 14.14-1.35 0-3.3-14.67.7-14.67.7zm.47.59a.55.55 0 0 1-.47-.42c.06.25.29.42.54.42 7.17-.05 13.99-2.25 13.99-1.29s-6.79 1.34-13.99 1.29z"
          />
          <path
            fill="url(#paint3_linear_298_940)"
            d="M11.19 15.37a.56.56 0 0 0-.56.56v8.68c0 .31.25.56.54.56 7.19-.05 14.14-2.45 14.14-1.3v-9.78c.02-1.14-6.92 1.22-14.11 1.27z"
          />
          <path
            fill="url(#paint4_linear_298_940)"
            d="M12.27 21.39c.25 0 .5-.02.76-.02l.72-.05c.22-.02.47-.02.7-.06l.67-.05.65-.05c.22-.02.42-.06.65-.09l.65-.09 1.22-.18.65-.09 1.95-.33.67-.11.7-.11.74-.11c.25-.02.47-.06.79-.11.34-.05.67-.05 1.01-.05.31.02.56.11.56.31v-.76c0-.22-.22-.27-.54-.31-.31-.02-.61 0-.92.02q-.405.03-.72.09c-.22.02-.42.06-.65.11l-1.22.22-.67.09-.65.11-.67.11-.72.11-.79.11v-.76l.79-.11.72-.11.67-.11.65-.11 1.22-.22.62-.11.65-.11c.22-.02.42-.05.74-.09.31-.06.61-.06.92-.02.27.02.54.11.54.31v-.76c0-.22-.22-.27-.54-.31-.31-.02-.61 0-.92.02-.27.02-.51.06-.74.09l-.65.11-.62.11-1.22.22-.65.11-.67.11-.74.11-.79.11v-.76l.79-.11.74-.11.67-.11.65-.11.61-.11.62-.11.61-.11.65-.11c.22-.02.42-.06.74-.09s.61-.05.92-.02c.27.02.54.11.54.31v-.76c0-.22-.22-.27-.54-.31-.31-.02-.61 0-.92.02-.27.02-.51.05-.74.09-.22.02-.42.06-.65.11l-.62.11-1.22.22-.65.11-.67.11-.72.11-.79.11v-.72l.79-.11.72-.11c.22-.02.45-.09.67-.11l.65-.11 1.22-.22.62-.11c.22-.02.42-.06.65-.11.22-.06.42-.06.74-.09.31-.05.61-.05.92-.02.27.02.54.11.54.31v-.76c0-.22-.22-.27-.54-.31s-.61 0-.92.02c-.27.02-.51.06-.74.09-.22.02-.42.06-.65.11l-.62.11-1.22.22-.65.11-.67.11-.72.11-.79.11v-.76c-2.16.34-4.36.54-6.57.56a.56.56 0 0 0-.56.56v5.48h.81c.22 0 .52-.02.79-.02z"
          />
          <path
            fill="url(#paint5_linear_298_940)"
            d="m12.27 22.87.76-.02.72-.05.7-.05.67-.05.65-.05.65-.09.65-.05 1.22-.18.65-.09 1.95-.33.67-.11.7-.11.74-.11c.25-.02.47-.06.79-.11.31-.11.65-.11.99-.11.31.02.56.11.56.34v-.76c0-.22-.25-.31-.56-.34-.34 0-.67 0-1.01.05-.31.02-.54.09-.79.11l-.72.11-.7.11-.67.11-1.3.22c-.22.02-.42.05-.65.11l-.61.11-1.22.18-.65.09c-.22.02-.42.06-.65.09l-.65.05-.67.06c-.22.02-.45.05-.7.05l-.72.05c-.25 0-.51.02-.76.02s-.5.02-.79.02-.54.02-.81.02v.76h.81l.76-.06z"
          />
          <path
            fill="url(#paint6_linear_298_940)"
            d="M24.77 22.09c-.34 0-.67 0-1.01.06-.31.02-.54.09-.79.11l-.72.11-.7.11-.67.11-1.95.33-1.83.27-.65.11-.65.09-.65.05-.67.05-.72.09-.74.05-1.55.04h-.81v.74h.81c.25 0 .54 0 .79-.02s.5-.02.76-.02.47-.02.74-.05l.7-.05.67-.05.65-.05 1.3-.18.65-.11.61-.09.62-.09.65-.09 1.3-.22.67-.11.7-.11.74-.11c.25-.02.47-.09.79-.11.34-.05.67-.05 1.01-.05.31.02.56.11.56.31v-.76c-.04-.27-.29-.36-.6-.36z"
          />
          <path
            fill="url(#paint7_linear_298_940)"
            d="m12.21 20.62.7-.02.67-.02 1.3-.1.65-.06c.22-.02.45-.05.7-.09l.72-.09c.25-.02.54-.09.81-.11v-5.31c-2.16.34-4.36.54-6.58.56a.56.56 0 0 0-.56.56v4.72h.81l.77-.04z"
          />
          <path
            fill="url(#paint8_linear_298_940)"
            d="M12.36 15.59c-.02.09-.02.14-.06.22h-.22l.16.11c-.02.09-.02.14-.05.22l.16-.14.16.11c-.02-.09-.02-.11-.05-.2l.16-.14h-.22l-.04-.2z"
          />
          <path
            fill="url(#paint9_linear_298_940)"
            d="M12.97 18.21c-.02.09-.02.14-.06.22h-.22l.16.11c-.02.09-.02.14-.06.22l.17-.14.16.11c-.02-.09-.02-.11-.06-.2l.17-.14h-.22c.02-.09-.01-.12-.04-.2z"
          />
          <path
            fill="url(#paint10_linear_298_940)"
            d="M13.03 19.45c-.02-.09-.02-.11-.06-.2-.02.09-.02.14-.06.22h-.22l.16.11c-.02.09-.02.14-.05.22l.16-.14.16.11c-.02-.09-.02-.11-.05-.2l.16-.14h-.2z"
          />
          <path
            fill="url(#paint11_linear_298_940)"
            d="M12.36 17.7c-.02.09-.02.14-.06.22h-.22l.16.11c-.02.09-.02.14-.05.22l.16-.14.16.11c-.02-.09-.02-.11-.05-.2.05-.06.11-.09.16-.14h-.22c-.01-.09-.01-.11-.04-.2z"
          />
          <path
            fill="url(#paint12_linear_298_940)"
            d="M12.36 18.75c-.02.09-.02.14-.06.22h-.22l.16.11c-.02.09-.02.14-.05.22l.16-.14.16.11c-.02-.09-.02-.11-.05-.2l.16-.14h-.22l-.04-.2z"
          />
          <path
            fill="url(#paint13_linear_298_940)"
            d="M12.36 16.67c-.02.09-.02.14-.06.22h-.22l.16.11c-.02.09-.02.14-.05.22l.16-.14.16.11c-.02-.09-.02-.11-.05-.2.05-.05.11-.09.16-.14h-.22l-.04-.2z"
          />
          <path
            fill="url(#paint14_linear_298_940)"
            d="M14.23 19.16c-.02.09-.06.14-.06.22l-.22.02.16.11c-.02.09-.02.14-.05.22l.16-.14.16.11c-.02-.09-.02-.11-.05-.2l.16-.14-.22-.02-.04-.2z"
          />
          <path
            fill="url(#paint15_linear_298_940)"
            d="M12.97 17.14c-.02.09-.02.14-.06.22h-.22l.16.11c-.02.09-.02.14-.06.22l.17-.14.16.11c-.02-.09-.02-.11-.06-.2l.17-.14h-.22c.02-.06-.01-.11-.04-.2z"
          />
          <path
            fill="url(#paint16_linear_298_940)"
            d="M13.59 18.69c-.02.09-.02.14-.06.22h-.22l.16.11c-.02.09-.02.14-.06.22l.17-.14.16.11c-.02-.09-.02-.11-.06-.2l.16-.14-.22.02c.02-.11 0-.14-.02-.22z"
          />
          <path
            fill="url(#paint17_linear_298_940)"
            d="M13.67 19.92c-.02-.09-.02-.11-.06-.2-.02.09-.02.14-.06.22l-.22.02.16.11c-.02.09-.02.14-.05.22l.16-.14.16.11c-.02-.09-.02-.11-.06-.2l.16-.14-.19-.02z"
          />
          <path
            fill="url(#paint18_linear_298_940)"
            d="M12.97 16.1c-.02.09-.02.14-.06.22h-.22l.16.11c-.02.09-.02.14-.06.22l.17-.14.16.11c-.02-.09-.02-.11-.06-.2l.17-.14h-.22c.02-.09-.01-.11-.04-.2z"
          />
          <path
            fill="url(#paint19_linear_298_940)"
            d="M13.59 17.63c-.02.09-.02.14-.06.22h-.22l.16.11c-.02.09-.02.14-.06.22l.17-.14.16.11c-.02-.09-.02-.11-.06-.2l.16-.14-.22.02c.02-.09 0-.15-.02-.22z"
          />
          <path
            fill="url(#paint20_linear_298_940)"
            d="m12.41 20.01-.06-.2c-.02.09-.02.14-.06.22h-.22l.16.11c-.02.09-.02.14-.05.22l.16-.16.16.11-.05-.2.16-.14-.2.02z"
          />
          <path
            fill="url(#paint21_linear_298_940)"
            d="M11.08 17.73c-.02.09-.02.11-.06.2h-.22l.16.14c-.02.09-.02.11-.05.2l.16-.14.16.14c-.02-.09-.02-.11-.05-.2l.16-.14h-.22s-.01-.11-.04-.2"
          />
          <path
            fill="url(#paint22_linear_298_940)"
            d="m11.08 16.69-.06.2h-.22l.16.14c-.02.09-.02.11-.05.2l.16-.14.16.14c-.02-.09-.02-.11-.05-.2l.16-.14h-.22c.02-.09-.01-.11-.04-.2"
          />
          <path
            fill="url(#paint23_linear_298_940)"
            d="m11.17 20.04-.05-.2c-.02.09-.02.14-.06.2h-.22l.16.14-.06.22.17-.14.16.14c-.02-.09-.02-.11-.06-.2l.17-.14z"
          />
          <path
            fill="url(#paint24_linear_298_940)"
            d="m13.42 17.14.17-.14.16.11c-.02-.09-.02-.11-.06-.2l.16-.14-.22.02c-.02-.09-.02-.11-.06-.2-.02.09-.02.14-.05.22h-.22l.16.11c.02.06-.01.12-.04.2z"
          />
          <path
            fill="url(#paint25_linear_298_940)"
            d="m13.42 16.1.17-.14.16.11c-.02-.09-.02-.11-.06-.2l.16-.14-.22.02-.06-.2c-.02.09-.02.14-.05.22h-.22l.16.11c.02.06-.01.11-.04.2z"
          />
          <path
            fill="url(#paint26_linear_298_940)"
            d="M11.08 18.8c-.02.09-.02.14-.06.22h-.22l.16.14s-.02.09-.05.2l.16-.14.16.11-.05-.2.16-.14h-.22a.25.25 0 0 0-.04-.2z"
          />
          <path
            fill="url(#paint27_linear_298_940)"
            d="M11.73 16.15c-.02.09-.02.14-.05.22h-.22l.17.11-.06.22.16-.14.17.11c-.02-.09-.02-.14-.06-.2l.16-.14h-.22l-.05-.2z"
          />
          <path
            fill="url(#paint28_linear_298_940)"
            d="M11.73 17.2c-.02.09-.02.14-.05.22h-.22l.17.11-.06.22.16-.14.17.11c-.02-.09-.02-.11-.06-.2l.16-.14h-.22l-.05-.2z"
          />
          <path
            fill="url(#paint29_linear_298_940)"
            d="M11.78 19.5c-.02-.09-.02-.11-.06-.2-.02.09-.02.14-.05.2h-.22l.17.14c-.02.09-.02.11-.06.2l.16-.14.17.11c-.02-.09-.02-.11-.06-.2l.16-.14-.21.02z"
          />
          <path
            fill="url(#paint30_linear_298_940)"
            d="M11.73 18.24c-.02.09-.02.14-.05.22h-.22l.17.14-.09.2.17-.14.16.11-.06-.2.17-.14h-.2c-.04-.06-.04-.11-.06-.2z"
          />
          <path
            fill="url(#paint31_linear_298_940)"
            d="M11.08 15.63c-.02.09-.02.14-.06.2h-.22l.16.14-.05.22.16-.14.16.14c-.02-.09-.02-.11-.05-.2l.16-.14h-.22z"
          />
          <path
            fill="url(#paint32_linear_298_940)"
            d="M14.23 18.1c-.02.09-.06.14-.06.22l-.22.02.16.11c-.02.09-.02.14-.05.22l.16-.14.16.11c-.02-.09-.02-.11-.05-.2l.16-.14-.22.02-.04-.25z"
          />
          <path
            fill="url(#paint33_linear_298_940)"
            d="M16.73 17.84c-.02.09-.02.14-.05.22l-.22.02.17.11c-.02.09-.06.14-.06.22l.17-.14.16.11c-.02-.09-.05-.11-.05-.2l.16-.14-.22.02c-.02-.12-.02-.16-.06-.25z"
          />
          <path
            fill="url(#paint34_linear_298_940)"
            d="M16.73 16.78c-.02.09-.02.14-.05.22l-.22.02.17.11c-.02.09-.06.14-.06.22l.17-.14.16.11c-.02-.09-.05-.11-.05-.2l.16-.14-.22.02c-.02-.11-.02-.16-.06-.25z"
          />
          <path
            fill="url(#paint35_linear_298_940)"
            d="M16.79 19.09c-.02-.09-.02-.11-.06-.2-.02.09-.02.14-.05.22l-.22.02.17.11c-.02.09-.06.14-.06.22l.17-.14.16.11c-.02-.09-.05-.11-.05-.2l.16-.14-.22-.02z"
          />
          <path
            fill="url(#paint36_linear_298_940)"
            d="m16.09 16.35-.06.2-.22.02.16.11c-.02.09-.02.14-.05.22l.16-.14.17.11c-.02-.09-.06-.11-.06-.2l.17-.14-.22.02a.4.4 0 0 0-.05-.22z"
          />
          <path
            fill="url(#paint37_linear_298_940)"
            d="M16.73 15.74c-.02.09-.02.14-.05.22l-.25.02.16.11c-.02.09-.05.14-.05.22l.16-.14.17.11c-.02-.09-.05-.11-.05-.2l.16-.14c-.09 0-.14.02-.22.02 0-.14 0-.16-.04-.25z"
          />
          <path
            fill="url(#paint38_linear_298_940)"
            d="m16.09 15.29-.06.22-.22.02.16.11c-.02.09-.02.14-.05.22l.16-.14.17.11c-.02-.09-.06-.11-.06-.2l.17-.14-.22.02c0-.11-.02-.17-.05-.25z"
          />
          <path
            fill="url(#paint39_linear_298_940)"
            d="M17.35 17.23c-.02.09-.02.14-.06.22l-.22.02.16.11c-.02.09-.05.14-.05.22l.16-.14.17.11-.06-.2.17-.16h-.22c-.02-.09-.02-.11-.05-.2z"
          />
          <path
            fill="url(#paint40_linear_298_940)"
            d="M17.35 16.19c-.02.09-.02.14-.06.22l-.22.02.16.11c-.02.09-.05.14-.05.22l.16-.14.17.11c-.02-.09-.06-.11-.06-.2l.17-.14-.22-.02c-.02-.09-.02-.12-.05-.2z"
          />
          <path
            fill="url(#paint41_linear_298_940)"
            d="M17.4 19.53c-.02-.09-.02-.11-.05-.2-.02.09-.02.14-.06.22l-.22.02.16.11-.05.22.16-.14.17.11c-.02-.09-.02-.11-.06-.2l.17-.14-.22-.02z"
          />
          <path
            fill="url(#paint42_linear_298_940)"
            d="m17.35 15.14-.06.22-.22.02.16.11c-.02.09-.05.14-.05.22.05-.06.11-.09.16-.14l.17.11c-.02-.09-.06-.11-.06-.2l.17-.14-.22-.02c-.02-.07-.02-.14-.05-.2z"
          />
          <path
            fill="url(#paint43_linear_298_940)"
            d="M17.35 18.29c-.02.09-.02.14-.06.22h-.22l.16.11-.05.22.16-.14.17.11c-.02-.09-.02-.11-.06-.2l.17-.14h-.22c-.02-.09-.02-.11-.05-.2z"
          />
          <path
            fill="url(#paint44_linear_298_940)"
            d="m16.09 17.39-.06.22-.22.02.16.11c-.02.09-.02.14-.05.22l.16-.14.17.11c-.02-.09-.06-.11-.06-.2l.17-.14-.22.02c0-.12-.02-.16-.05-.25z"
          />
          <path
            fill="url(#paint45_linear_298_940)"
            d="M14.23 16.02c-.02.09-.06.14-.06.22l-.22.02.16.11c-.02.09-.02.14-.05.22l.16-.14.16.11c-.02-.09-.02-.11-.05-.2l.16-.14-.22.02-.04-.25z"
          />
          <path
            fill="url(#paint46_linear_298_940)"
            d="m14.85 18.58-.05.22h-.22l.16.11c-.02.09-.06.14-.06.22l.16-.14.16.11c-.02-.09-.02-.11-.06-.2l.16-.14-.22.02c0-.11 0-.14-.02-.22z"
          />
          <path
            fill="url(#paint47_linear_298_940)"
            d="m16.09 18.44-.06.22-.22.02.2.11c-.02.09-.02.14-.06.22l.16-.14.16.11c-.02-.09-.05-.11-.05-.2l.17-.14-.22.02c-.02-.11-.05-.17-.07-.25z"
          />
          <path
            fill="url(#paint48_linear_298_940)"
            d="m14.85 16.47-.05.22-.22.02.16.11c-.02.09-.06.14-.06.22l.16-.14.16.11c-.02-.09-.02-.11-.06-.2l.16-.14-.22.02c0-.11 0-.16-.02-.25z"
          />
          <path
            fill="url(#paint49_linear_298_940)"
            d="m14.85 19.64-.05.22-.22.02.16.11c-.02.09-.06.14-.06.22l.16-.14.16.11c-.02-.09-.02-.11-.06-.2l.16-.14-.22.02c0-.12 0-.19-.02-.25z"
          />
          <path
            fill="url(#paint50_linear_298_940)"
            d="M14.23 17.07c-.02.09-.06.14-.06.22l-.22.02.16.11c-.02.09-.02.14-.05.22l.16-.14.16.11c-.02-.09-.02-.11-.05-.2l.16-.14-.22.02-.04-.25z"
          />
          <path
            fill="url(#paint51_linear_298_940)"
            d="M14.85 15.43c-.02.09-.02.14-.05.22l-.22.02.16.11c-.02.09-.06.14-.06.22l.16-.14.16.11c-.02-.09-.02-.11-.06-.2l.16-.14-.22.02c0-.14 0-.16-.02-.25z"
          />
          <path
            fill="url(#paint52_linear_298_940)"
            d="M14.85 17.54c-.02.09-.02.14-.05.22l-.22.02.16.11c-.02.09-.02.14-.06.22l.16-.14.16.11c-.02-.09-.02-.11-.06-.2l.16-.14-.22.02c0-.14 0-.16-.02-.25z"
          />
          <path
            fill="url(#paint53_linear_298_940)"
            d="M16.16 19.7c-.02-.09-.02-.11-.05-.2l-.05.22-.22.02.16.11c-.02.09-.02.14-.06.22l.17-.14.16.11c-.02-.09-.05-.11-.05-.2l.16-.14-.22-.02z"
          />
          <path
            fill="url(#paint54_linear_298_940)"
            d="M15.53 19.25c-.02-.09-.02-.11-.05-.2-.02.09-.02.14-.06.22l-.22.02.16.11c-.02.09-.06.14-.06.22l.16-.14.16.11c-.02-.09-.05-.11-.05-.2l.16-.14-.2-.02z"
          />
          <path
            fill="url(#paint55_linear_298_940)"
            d="M15.47 15.88c-.02.11-.02.14-.05.22l-.22.02.16.11c-.02.09-.06.14-.06.22l.16-.14.16.11c-.02-.09-.06-.11-.06-.2l.16-.14-.22.02c.04-.11.01-.16-.02-.25z"
          />
          <path
            fill="url(#paint56_linear_298_940)"
            d="M15.47 17.99c-.02.09-.02.14-.06.22l-.22.02.16.11c-.02.09-.06.14-.06.22l.16-.14.16.11c-.02-.09-.05-.11-.05-.2l.16-.14-.22.02c.04-.14.01-.16-.02-.25z"
          />
          <path
            fill="url(#paint57_linear_298_940)"
            d="M15.47 16.95c-.02.09-.02.14-.06.22l-.22.02.16.11c-.02.09-.06.14-.06.22l.16-.14.16.11c-.02-.09-.05-.11-.05-.2l.16-.14-.22.02c.04-.14.01-.17-.02-.25z"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_298_940"
            x1={27.28}
            x2={6.8}
            y1={4.75}
            y2={27.79}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A85699" />
            <stop offset={1} stopColor="#5DB6C3" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_298_940"
            x1={-0.019}
            x2={31.978}
            y1={16.049}
            y2={16.049}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#570D07" />
            <stop offset={0.33} stopColor="#5A0D07" />
            <stop offset={0.59} stopColor="#631009" />
            <stop offset={0.83} stopColor="#73140C" />
            <stop offset={1} stopColor="#82180F" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_298_940"
            x1={15.98}
            x2={15.98}
            y1={-0.062}
            y2={31.78}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.35} stopColor="#AE291F" />
            <stop offset={0.65} stopColor="#AC291F" />
            <stop offset={0.75} stopColor="#A6271E" />
            <stop offset={0.83} stopColor="#9C241B" />
            <stop offset={0.89} stopColor="#8C1F17" />
            <stop offset={0.94} stopColor="#791811" />
            <stop offset={0.99} stopColor="#60100A" />
            <stop offset={1} stopColor="#570D07" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_298_940"
            x1={0}
            x2={31.978}
            y1={16.005}
            y2={16.005}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#AE291F" />
            <stop offset={0.02} stopColor="#B02A21" />
            <stop offset={0.24} stopColor="#C0372E" />
            <stop offset={0.49} stopColor="#C93F37" />
            <stop offset={0.79} stopColor="#CC413A" />
            <stop offset={0.84} stopColor="#C93F38" />
            <stop offset={0.88} stopColor="#C03830" />
            <stop offset={0.92} stopColor="#B02E25" />
            <stop offset={0.95} stopColor="#9A2118" />
            <stop offset={0.97} stopColor="#901C12" />
            <stop offset={1} stopColor="#CC413A" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_298_940"
            x1={-0.109}
            x2={31.869}
            y1={15.913}
            y2={15.913}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DEDEDE" />
            <stop offset={0.02} stopColor="#E0E0E0" />
            <stop offset={0.24} stopColor="#F1F1F1" />
            <stop offset={0.49} stopColor="#FBFBFB" />
            <stop offset={0.79} stopColor="#fff" />
            <stop offset={0.84} stopColor="#FBFBFB" />
            <stop offset={0.88} stopColor="#F1F1F1" />
            <stop offset={0.92} stopColor="#E0E0E0" />
            <stop offset={0.95} stopColor="#C8C8C8" />
            <stop offset={0.97} stopColor="#BEBEBE" />
            <stop offset={1} stopColor="#fff" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_298_940"
            x1={-0.109}
            x2={31.978}
            y1={15.99}
            y2={15.99}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DEDEDE" />
            <stop offset={0.02} stopColor="#E0E0E0" />
            <stop offset={0.24} stopColor="#F1F1F1" />
            <stop offset={0.49} stopColor="#FBFBFB" />
            <stop offset={0.79} stopColor="#fff" />
            <stop offset={0.84} stopColor="#FBFBFB" />
            <stop offset={0.88} stopColor="#F1F1F1" />
            <stop offset={0.92} stopColor="#E0E0E0" />
            <stop offset={0.95} stopColor="#C8C8C8" />
            <stop offset={0.97} stopColor="#BEBEBE" />
            <stop offset={1} stopColor="#fff" />
          </linearGradient>
          <linearGradient
            id="paint6_linear_298_940"
            x1={-0.043}
            x2={31.848}
            y1={16.128}
            y2={16.128}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DEDEDE" />
            <stop offset={0.02} stopColor="#E0E0E0" />
            <stop offset={0.24} stopColor="#F1F1F1" />
            <stop offset={0.49} stopColor="#FBFBFB" />
            <stop offset={0.79} stopColor="#fff" />
            <stop offset={0.84} stopColor="#FBFBFB" />
            <stop offset={0.88} stopColor="#F1F1F1" />
            <stop offset={0.92} stopColor="#E0E0E0" />
            <stop offset={0.95} stopColor="#C8C8C8" />
            <stop offset={0.97} stopColor="#BEBEBE" />
            <stop offset={1} stopColor="#fff" />
          </linearGradient>
          <linearGradient
            id="paint7_linear_298_940"
            x1={0.134}
            x2={65.882}
            y1={15.99}
            y2={15.99}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#081F98" />
            <stop offset={0.02} stopColor="#0B219A" />
            <stop offset={0.24} stopColor="#1B32AA" />
            <stop offset={0.49} stopColor="#253CB4" />
            <stop offset={0.79} stopColor="#283FB7" />
            <stop offset={0.84} stopColor="#263CB4" />
            <stop offset={0.88} stopColor="#1F32AA" />
            <stop offset={0.92} stopColor="#15229A" />
            <stop offset={0.95} stopColor="#060A82" />
            <stop offset={0.97} stopColor="#00007A" />
            <stop offset={1} stopColor="#283FB7" />
          </linearGradient>
          <linearGradient
            id="paint8_linear_298_940"
            x1={-84.741}
            x2={784.592}
            y1={17.393}
            y2={17.393}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DEDEDE" />
            <stop offset={0.02} stopColor="#E0E0E0" />
            <stop offset={0.24} stopColor="#F1F1F1" />
            <stop offset={0.49} stopColor="#FBFBFB" />
            <stop offset={0.79} stopColor="#fff" />
            <stop offset={0.84} stopColor="#FBFBFB" />
            <stop offset={0.88} stopColor="#F1F1F1" />
            <stop offset={0.92} stopColor="#E0E0E0" />
            <stop offset={0.95} stopColor="#C8C8C8" />
            <stop offset={0.97} stopColor="#BEBEBE" />
            <stop offset={1} stopColor="#fff" />
          </linearGradient>
          <linearGradient
            id="paint9_linear_298_940"
            x1={-120.889}
            x2={748.444}
            y1={17.393}
            y2={17.393}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DEDEDE" />
            <stop offset={0.02} stopColor="#E0E0E0" />
            <stop offset={0.24} stopColor="#F1F1F1" />
            <stop offset={0.49} stopColor="#FBFBFB" />
            <stop offset={0.79} stopColor="#fff" />
            <stop offset={0.84} stopColor="#FBFBFB" />
            <stop offset={0.88} stopColor="#F1F1F1" />
            <stop offset={0.92} stopColor="#E0E0E0" />
            <stop offset={0.95} stopColor="#C8C8C8" />
            <stop offset={0.97} stopColor="#BEBEBE" />
            <stop offset={1} stopColor="#fff" />
          </linearGradient>
          <linearGradient
            id="paint10_linear_298_940"
            x1={-120.889}
            x2={748.444}
            y1={16.862}
            y2={16.862}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DEDEDE" />
            <stop offset={0.02} stopColor="#E0E0E0" />
            <stop offset={0.24} stopColor="#F1F1F1" />
            <stop offset={0.49} stopColor="#FBFBFB" />
            <stop offset={0.79} stopColor="#fff" />
            <stop offset={0.84} stopColor="#FBFBFB" />
            <stop offset={0.88} stopColor="#F1F1F1" />
            <stop offset={0.92} stopColor="#E0E0E0" />
            <stop offset={0.95} stopColor="#C8C8C8" />
            <stop offset={0.97} stopColor="#BEBEBE" />
            <stop offset={1} stopColor="#fff" />
          </linearGradient>
          <linearGradient
            id="paint11_linear_298_940"
            x1={-84.741}
            x2={784.592}
            y1={17.393}
            y2={17.393}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DEDEDE" />
            <stop offset={0.02} stopColor="#E0E0E0" />
            <stop offset={0.24} stopColor="#F1F1F1" />
            <stop offset={0.49} stopColor="#FBFBFB" />
            <stop offset={0.79} stopColor="#fff" />
            <stop offset={0.84} stopColor="#FBFBFB" />
            <stop offset={0.88} stopColor="#F1F1F1" />
            <stop offset={0.92} stopColor="#E0E0E0" />
            <stop offset={0.95} stopColor="#C8C8C8" />
            <stop offset={0.97} stopColor="#BEBEBE" />
            <stop offset={1} stopColor="#fff" />
          </linearGradient>
          <linearGradient
            id="paint12_linear_298_940"
            x1={-84.741}
            x2={784.592}
            y1={17.393}
            y2={17.393}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DEDEDE" />
            <stop offset={0.02} stopColor="#E0E0E0" />
            <stop offset={0.24} stopColor="#F1F1F1" />
            <stop offset={0.49} stopColor="#FBFBFB" />
            <stop offset={0.79} stopColor="#fff" />
            <stop offset={0.84} stopColor="#FBFBFB" />
            <stop offset={0.88} stopColor="#F1F1F1" />
            <stop offset={0.92} stopColor="#E0E0E0" />
            <stop offset={0.95} stopColor="#C8C8C8" />
            <stop offset={0.97} stopColor="#BEBEBE" />
            <stop offset={1} stopColor="#fff" />
          </linearGradient>
          <linearGradient
            id="paint13_linear_298_940"
            x1={-84.741}
            x2={784.592}
            y1={16.832}
            y2={16.832}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DEDEDE" />
            <stop offset={0.02} stopColor="#E0E0E0" />
            <stop offset={0.24} stopColor="#F1F1F1" />
            <stop offset={0.49} stopColor="#FBFBFB" />
            <stop offset={0.79} stopColor="#fff" />
            <stop offset={0.84} stopColor="#FBFBFB" />
            <stop offset={0.88} stopColor="#F1F1F1" />
            <stop offset={0.92} stopColor="#E0E0E0" />
            <stop offset={0.95} stopColor="#C8C8C8" />
            <stop offset={0.97} stopColor="#BEBEBE" />
            <stop offset={1} stopColor="#fff" />
          </linearGradient>
          <linearGradient
            id="paint14_linear_298_940"
            x1={-195.556}
            x2={673.778}
            y1={17.345}
            y2={17.345}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DEDEDE" />
            <stop offset={0.02} stopColor="#E0E0E0" />
            <stop offset={0.24} stopColor="#F1F1F1" />
            <stop offset={0.49} stopColor="#FBFBFB" />
            <stop offset={0.79} stopColor="#fff" />
            <stop offset={0.84} stopColor="#FBFBFB" />
            <stop offset={0.88} stopColor="#F1F1F1" />
            <stop offset={0.92} stopColor="#E0E0E0" />
            <stop offset={0.95} stopColor="#C8C8C8" />
            <stop offset={0.97} stopColor="#BEBEBE" />
            <stop offset={1} stopColor="#fff" />
          </linearGradient>
          <linearGradient
            id="paint15_linear_298_940"
            x1={-120.889}
            x2={748.444}
            y1={17.393}
            y2={17.393}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DEDEDE" />
            <stop offset={0.02} stopColor="#E0E0E0" />
            <stop offset={0.24} stopColor="#F1F1F1" />
            <stop offset={0.49} stopColor="#FBFBFB" />
            <stop offset={0.79} stopColor="#fff" />
            <stop offset={0.84} stopColor="#FBFBFB" />
            <stop offset={0.88} stopColor="#F1F1F1" />
            <stop offset={0.92} stopColor="#E0E0E0" />
            <stop offset={0.95} stopColor="#C8C8C8" />
            <stop offset={0.97} stopColor="#BEBEBE" />
            <stop offset={1} stopColor="#fff" />
          </linearGradient>
          <linearGradient
            id="paint16_linear_298_940"
            x1={-160.604}
            x2={725.132}
            y1={16.832}
            y2={16.832}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DEDEDE" />
            <stop offset={0.02} stopColor="#E0E0E0" />
            <stop offset={0.24} stopColor="#F1F1F1" />
            <stop offset={0.49} stopColor="#FBFBFB" />
            <stop offset={0.79} stopColor="#fff" />
            <stop offset={0.84} stopColor="#FBFBFB" />
            <stop offset={0.88} stopColor="#F1F1F1" />
            <stop offset={0.92} stopColor="#E0E0E0" />
            <stop offset={0.95} stopColor="#C8C8C8" />
            <stop offset={0.97} stopColor="#BEBEBE" />
            <stop offset={1} stopColor="#fff" />
          </linearGradient>
          <linearGradient
            id="paint17_linear_298_940"
            x1={-161.811}
            x2={723.924}
            y1={16.832}
            y2={16.832}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DEDEDE" />
            <stop offset={0.02} stopColor="#E0E0E0" />
            <stop offset={0.24} stopColor="#F1F1F1" />
            <stop offset={0.49} stopColor="#FBFBFB" />
            <stop offset={0.79} stopColor="#fff" />
            <stop offset={0.84} stopColor="#FBFBFB" />
            <stop offset={0.88} stopColor="#F1F1F1" />
            <stop offset={0.92} stopColor="#E0E0E0" />
            <stop offset={0.95} stopColor="#C8C8C8" />
            <stop offset={0.97} stopColor="#BEBEBE" />
            <stop offset={1} stopColor="#fff" />
          </linearGradient>
          <linearGradient
            id="paint18_linear_298_940"
            x1={-120.889}
            x2={748.444}
            y1={17.393}
            y2={17.393}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DEDEDE" />
            <stop offset={0.02} stopColor="#E0E0E0" />
            <stop offset={0.24} stopColor="#F1F1F1" />
            <stop offset={0.49} stopColor="#FBFBFB" />
            <stop offset={0.79} stopColor="#fff" />
            <stop offset={0.84} stopColor="#FBFBFB" />
            <stop offset={0.88} stopColor="#F1F1F1" />
            <stop offset={0.92} stopColor="#E0E0E0" />
            <stop offset={0.95} stopColor="#C8C8C8" />
            <stop offset={0.97} stopColor="#BEBEBE" />
            <stop offset={1} stopColor="#fff" />
          </linearGradient>
          <linearGradient
            id="paint19_linear_298_940"
            x1={-160.604}
            x2={725.132}
            y1={16.832}
            y2={16.832}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DEDEDE" />
            <stop offset={0.02} stopColor="#E0E0E0" />
            <stop offset={0.24} stopColor="#F1F1F1" />
            <stop offset={0.49} stopColor="#FBFBFB" />
            <stop offset={0.79} stopColor="#fff" />
            <stop offset={0.84} stopColor="#FBFBFB" />
            <stop offset={0.88} stopColor="#F1F1F1" />
            <stop offset={0.92} stopColor="#E0E0E0" />
            <stop offset={0.95} stopColor="#C8C8C8" />
            <stop offset={0.97} stopColor="#BEBEBE" />
            <stop offset={1} stopColor="#fff" />
          </linearGradient>
          <linearGradient
            id="paint20_linear_298_940"
            x1={-84.148}
            x2={785.185}
            y1={16.862}
            y2={16.862}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DEDEDE" />
            <stop offset={0.02} stopColor="#E0E0E0" />
            <stop offset={0.24} stopColor="#F1F1F1" />
            <stop offset={0.49} stopColor="#FBFBFB" />
            <stop offset={0.79} stopColor="#fff" />
            <stop offset={0.84} stopColor="#FBFBFB" />
            <stop offset={0.88} stopColor="#F1F1F1" />
            <stop offset={0.92} stopColor="#E0E0E0" />
            <stop offset={0.95} stopColor="#C8C8C8" />
            <stop offset={0.97} stopColor="#BEBEBE" />
            <stop offset={1} stopColor="#fff" />
          </linearGradient>
          <linearGradient
            id="paint21_linear_298_940"
            x1={-8.889}
            x2={860.444}
            y1={15.99}
            y2={15.99}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DEDEDE" />
            <stop offset={0.02} stopColor="#E0E0E0" />
            <stop offset={0.24} stopColor="#F1F1F1" />
            <stop offset={0.49} stopColor="#FBFBFB" />
            <stop offset={0.79} stopColor="#fff" />
            <stop offset={0.84} stopColor="#FBFBFB" />
            <stop offset={0.88} stopColor="#F1F1F1" />
            <stop offset={0.92} stopColor="#E0E0E0" />
            <stop offset={0.95} stopColor="#C8C8C8" />
            <stop offset={0.97} stopColor="#BEBEBE" />
            <stop offset={1} stopColor="#fff" />
          </linearGradient>
          <linearGradient
            id="paint22_linear_298_940"
            x1={-8.889}
            x2={860.444}
            y1={15.99}
            y2={15.99}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DEDEDE" />
            <stop offset={0.02} stopColor="#E0E0E0" />
            <stop offset={0.24} stopColor="#F1F1F1" />
            <stop offset={0.49} stopColor="#FBFBFB" />
            <stop offset={0.79} stopColor="#fff" />
            <stop offset={0.84} stopColor="#FBFBFB" />
            <stop offset={0.88} stopColor="#F1F1F1" />
            <stop offset={0.92} stopColor="#E0E0E0" />
            <stop offset={0.95} stopColor="#C8C8C8" />
            <stop offset={0.97} stopColor="#BEBEBE" />
            <stop offset={1} stopColor="#fff" />
          </linearGradient>
          <linearGradient
            id="paint23_linear_298_940"
            x1={-11.259}
            x2={858.074}
            y1={15.99}
            y2={15.99}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DEDEDE" />
            <stop offset={0.02} stopColor="#E0E0E0" />
            <stop offset={0.24} stopColor="#F1F1F1" />
            <stop offset={0.49} stopColor="#FBFBFB" />
            <stop offset={0.79} stopColor="#fff" />
            <stop offset={0.84} stopColor="#FBFBFB" />
            <stop offset={0.88} stopColor="#F1F1F1" />
            <stop offset={0.92} stopColor="#E0E0E0" />
            <stop offset={0.95} stopColor="#C8C8C8" />
            <stop offset={0.97} stopColor="#BEBEBE" />
            <stop offset={1} stopColor="#fff" />
          </linearGradient>
          <linearGradient
            id="paint24_linear_298_940"
            x1={-154.182}
            x2={699.345}
            y1={16.862}
            y2={16.862}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DEDEDE" />
            <stop offset={0.02} stopColor="#E0E0E0" />
            <stop offset={0.24} stopColor="#F1F1F1" />
            <stop offset={0.49} stopColor="#FBFBFB" />
            <stop offset={0.79} stopColor="#fff" />
            <stop offset={0.84} stopColor="#FBFBFB" />
            <stop offset={0.88} stopColor="#F1F1F1" />
            <stop offset={0.92} stopColor="#E0E0E0" />
            <stop offset={0.95} stopColor="#C8C8C8" />
            <stop offset={0.97} stopColor="#BEBEBE" />
            <stop offset={1} stopColor="#fff" />
          </linearGradient>
          <linearGradient
            id="paint25_linear_298_940"
            x1={-154.182}
            x2={699.345}
            y1={16.862}
            y2={16.862}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DEDEDE" />
            <stop offset={0.02} stopColor="#E0E0E0" />
            <stop offset={0.24} stopColor="#F1F1F1" />
            <stop offset={0.49} stopColor="#FBFBFB" />
            <stop offset={0.79} stopColor="#fff" />
            <stop offset={0.84} stopColor="#FBFBFB" />
            <stop offset={0.88} stopColor="#F1F1F1" />
            <stop offset={0.92} stopColor="#E0E0E0" />
            <stop offset={0.95} stopColor="#C8C8C8" />
            <stop offset={0.97} stopColor="#BEBEBE" />
            <stop offset={1} stopColor="#fff" />
          </linearGradient>
          <linearGradient
            id="paint26_linear_298_940"
            x1={-8.889}
            x2={860.444}
            y1={16.832}
            y2={16.832}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DEDEDE" />
            <stop offset={0.02} stopColor="#E0E0E0" />
            <stop offset={0.24} stopColor="#F1F1F1" />
            <stop offset={0.49} stopColor="#FBFBFB" />
            <stop offset={0.79} stopColor="#fff" />
            <stop offset={0.84} stopColor="#FBFBFB" />
            <stop offset={0.88} stopColor="#F1F1F1" />
            <stop offset={0.92} stopColor="#E0E0E0" />
            <stop offset={0.95} stopColor="#C8C8C8" />
            <stop offset={0.97} stopColor="#BEBEBE" />
            <stop offset={1} stopColor="#fff" />
          </linearGradient>
          <linearGradient
            id="paint27_linear_298_940"
            x1={-48}
            x2={821.333}
            y1={17.393}
            y2={17.393}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DEDEDE" />
            <stop offset={0.02} stopColor="#E0E0E0" />
            <stop offset={0.24} stopColor="#F1F1F1" />
            <stop offset={0.49} stopColor="#FBFBFB" />
            <stop offset={0.79} stopColor="#fff" />
            <stop offset={0.84} stopColor="#FBFBFB" />
            <stop offset={0.88} stopColor="#F1F1F1" />
            <stop offset={0.92} stopColor="#E0E0E0" />
            <stop offset={0.95} stopColor="#C8C8C8" />
            <stop offset={0.97} stopColor="#BEBEBE" />
            <stop offset={1} stopColor="#fff" />
          </linearGradient>
          <linearGradient
            id="paint28_linear_298_940"
            x1={-48}
            x2={821.333}
            y1={17.393}
            y2={17.393}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DEDEDE" />
            <stop offset={0.02} stopColor="#E0E0E0" />
            <stop offset={0.24} stopColor="#F1F1F1" />
            <stop offset={0.49} stopColor="#FBFBFB" />
            <stop offset={0.79} stopColor="#fff" />
            <stop offset={0.84} stopColor="#FBFBFB" />
            <stop offset={0.88} stopColor="#F1F1F1" />
            <stop offset={0.92} stopColor="#E0E0E0" />
            <stop offset={0.95} stopColor="#C8C8C8" />
            <stop offset={0.97} stopColor="#BEBEBE" />
            <stop offset={1} stopColor="#fff" />
          </linearGradient>
          <linearGradient
            id="paint29_linear_298_940"
            x1={-47.407}
            x2={821.926}
            y1={15.99}
            y2={15.99}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DEDEDE" />
            <stop offset={0.02} stopColor="#E0E0E0" />
            <stop offset={0.24} stopColor="#F1F1F1" />
            <stop offset={0.49} stopColor="#FBFBFB" />
            <stop offset={0.79} stopColor="#fff" />
            <stop offset={0.84} stopColor="#FBFBFB" />
            <stop offset={0.88} stopColor="#F1F1F1" />
            <stop offset={0.92} stopColor="#E0E0E0" />
            <stop offset={0.95} stopColor="#C8C8C8" />
            <stop offset={0.97} stopColor="#BEBEBE" />
            <stop offset={1} stopColor="#fff" />
          </linearGradient>
          <linearGradient
            id="paint30_linear_298_940"
            x1={-49.846}
            x2={852.923}
            y1={16.27}
            y2={16.27}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DEDEDE" />
            <stop offset={0.02} stopColor="#E0E0E0" />
            <stop offset={0.24} stopColor="#F1F1F1" />
            <stop offset={0.49} stopColor="#FBFBFB" />
            <stop offset={0.79} stopColor="#fff" />
            <stop offset={0.84} stopColor="#FBFBFB" />
            <stop offset={0.88} stopColor="#F1F1F1" />
            <stop offset={0.92} stopColor="#E0E0E0" />
            <stop offset={0.95} stopColor="#C8C8C8" />
            <stop offset={0.97} stopColor="#BEBEBE" />
            <stop offset={1} stopColor="#fff" />
          </linearGradient>
          <linearGradient
            id="paint31_linear_298_940"
            x1={-8.889}
            x2={860.444}
            y1={15.99}
            y2={15.99}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DEDEDE" />
            <stop offset={0.02} stopColor="#E0E0E0" />
            <stop offset={0.24} stopColor="#F1F1F1" />
            <stop offset={0.49} stopColor="#FBFBFB" />
            <stop offset={0.79} stopColor="#fff" />
            <stop offset={0.84} stopColor="#FBFBFB" />
            <stop offset={0.88} stopColor="#F1F1F1" />
            <stop offset={0.92} stopColor="#E0E0E0" />
            <stop offset={0.95} stopColor="#C8C8C8" />
            <stop offset={0.97} stopColor="#BEBEBE" />
            <stop offset={1} stopColor="#fff" />
          </linearGradient>
          <linearGradient
            id="paint32_linear_298_940"
            x1={-195.556}
            x2={673.778}
            y1={17.589}
            y2={17.589}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DEDEDE" />
            <stop offset={0.02} stopColor="#E0E0E0" />
            <stop offset={0.24} stopColor="#F1F1F1" />
            <stop offset={0.49} stopColor="#FBFBFB" />
            <stop offset={0.79} stopColor="#fff" />
            <stop offset={0.84} stopColor="#FBFBFB" />
            <stop offset={0.88} stopColor="#F1F1F1" />
            <stop offset={0.92} stopColor="#E0E0E0" />
            <stop offset={0.95} stopColor="#C8C8C8" />
            <stop offset={0.97} stopColor="#BEBEBE" />
            <stop offset={1} stopColor="#fff" />
          </linearGradient>
          <linearGradient
            id="paint33_linear_298_940"
            x1={-338.036}
            x2={515.491}
            y1={17.589}
            y2={17.589}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DEDEDE" />
            <stop offset={0.02} stopColor="#E0E0E0" />
            <stop offset={0.24} stopColor="#F1F1F1" />
            <stop offset={0.49} stopColor="#FBFBFB" />
            <stop offset={0.79} stopColor="#fff" />
            <stop offset={0.84} stopColor="#FBFBFB" />
            <stop offset={0.88} stopColor="#F1F1F1" />
            <stop offset={0.92} stopColor="#E0E0E0" />
            <stop offset={0.95} stopColor="#C8C8C8" />
            <stop offset={0.97} stopColor="#BEBEBE" />
            <stop offset={1} stopColor="#fff" />
          </linearGradient>
          <linearGradient
            id="paint34_linear_298_940"
            x1={-338.036}
            x2={515.491}
            y1={17.589}
            y2={17.589}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DEDEDE" />
            <stop offset={0.02} stopColor="#E0E0E0" />
            <stop offset={0.24} stopColor="#F1F1F1" />
            <stop offset={0.49} stopColor="#FBFBFB" />
            <stop offset={0.79} stopColor="#fff" />
            <stop offset={0.84} stopColor="#FBFBFB" />
            <stop offset={0.88} stopColor="#F1F1F1" />
            <stop offset={0.92} stopColor="#E0E0E0" />
            <stop offset={0.95} stopColor="#C8C8C8" />
            <stop offset={0.97} stopColor="#BEBEBE" />
            <stop offset={1} stopColor="#fff" />
          </linearGradient>
          <linearGradient
            id="paint35_linear_298_940"
            x1={-338.036}
            x2={515.491}
            y1={16.832}
            y2={16.832}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DEDEDE" />
            <stop offset={0.02} stopColor="#E0E0E0" />
            <stop offset={0.24} stopColor="#F1F1F1" />
            <stop offset={0.49} stopColor="#FBFBFB" />
            <stop offset={0.79} stopColor="#fff" />
            <stop offset={0.84} stopColor="#FBFBFB" />
            <stop offset={0.88} stopColor="#F1F1F1" />
            <stop offset={0.92} stopColor="#E0E0E0" />
            <stop offset={0.95} stopColor="#C8C8C8" />
            <stop offset={0.97} stopColor="#BEBEBE" />
            <stop offset={1} stopColor="#fff" />
          </linearGradient>
          <linearGradient
            id="paint36_linear_298_940"
            x1={-300.218}
            x2={553.309}
            y1={17.393}
            y2={17.393}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DEDEDE" />
            <stop offset={0.02} stopColor="#E0E0E0" />
            <stop offset={0.24} stopColor="#F1F1F1" />
            <stop offset={0.49} stopColor="#FBFBFB" />
            <stop offset={0.79} stopColor="#fff" />
            <stop offset={0.84} stopColor="#FBFBFB" />
            <stop offset={0.88} stopColor="#F1F1F1" />
            <stop offset={0.92} stopColor="#E0E0E0" />
            <stop offset={0.95} stopColor="#C8C8C8" />
            <stop offset={0.97} stopColor="#BEBEBE" />
            <stop offset={1} stopColor="#fff" />
          </linearGradient>
          <linearGradient
            id="paint37_linear_298_940"
            x1={-336.291}
            x2={517.236}
            y1={17.589}
            y2={17.589}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DEDEDE" />
            <stop offset={0.02} stopColor="#E0E0E0" />
            <stop offset={0.24} stopColor="#F1F1F1" />
            <stop offset={0.49} stopColor="#FBFBFB" />
            <stop offset={0.79} stopColor="#fff" />
            <stop offset={0.84} stopColor="#FBFBFB" />
            <stop offset={0.88} stopColor="#F1F1F1" />
            <stop offset={0.92} stopColor="#E0E0E0" />
            <stop offset={0.95} stopColor="#C8C8C8" />
            <stop offset={0.97} stopColor="#BEBEBE" />
            <stop offset={1} stopColor="#fff" />
          </linearGradient>
          <linearGradient
            id="paint38_linear_298_940"
            x1={-300.218}
            x2={553.309}
            y1={17.589}
            y2={17.589}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DEDEDE" />
            <stop offset={0.02} stopColor="#E0E0E0" />
            <stop offset={0.24} stopColor="#F1F1F1" />
            <stop offset={0.49} stopColor="#FBFBFB" />
            <stop offset={0.79} stopColor="#fff" />
            <stop offset={0.84} stopColor="#FBFBFB" />
            <stop offset={0.88} stopColor="#F1F1F1" />
            <stop offset={0.92} stopColor="#E0E0E0" />
            <stop offset={0.95} stopColor="#C8C8C8" />
            <stop offset={0.97} stopColor="#BEBEBE" />
            <stop offset={1} stopColor="#fff" />
          </linearGradient>
          <linearGradient
            id="paint39_linear_298_940"
            x1={-373.527}
            x2={480}
            y1={17.345}
            y2={17.345}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DEDEDE" />
            <stop offset={0.02} stopColor="#E0E0E0" />
            <stop offset={0.24} stopColor="#F1F1F1" />
            <stop offset={0.49} stopColor="#FBFBFB" />
            <stop offset={0.79} stopColor="#fff" />
            <stop offset={0.84} stopColor="#FBFBFB" />
            <stop offset={0.88} stopColor="#F1F1F1" />
            <stop offset={0.92} stopColor="#E0E0E0" />
            <stop offset={0.95} stopColor="#C8C8C8" />
            <stop offset={0.97} stopColor="#BEBEBE" />
            <stop offset={1} stopColor="#fff" />
          </linearGradient>
          <linearGradient
            id="paint40_linear_298_940"
            x1={-373.527}
            x2={480}
            y1={17.345}
            y2={17.345}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DEDEDE" />
            <stop offset={0.02} stopColor="#E0E0E0" />
            <stop offset={0.24} stopColor="#F1F1F1" />
            <stop offset={0.49} stopColor="#FBFBFB" />
            <stop offset={0.79} stopColor="#fff" />
            <stop offset={0.84} stopColor="#FBFBFB" />
            <stop offset={0.88} stopColor="#F1F1F1" />
            <stop offset={0.92} stopColor="#E0E0E0" />
            <stop offset={0.95} stopColor="#C8C8C8" />
            <stop offset={0.97} stopColor="#BEBEBE" />
            <stop offset={1} stopColor="#fff" />
          </linearGradient>
          <linearGradient
            id="paint41_linear_298_940"
            x1={-373.527}
            x2={480}
            y1={16.27}
            y2={16.27}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DEDEDE" />
            <stop offset={0.02} stopColor="#E0E0E0" />
            <stop offset={0.24} stopColor="#F1F1F1" />
            <stop offset={0.49} stopColor="#FBFBFB" />
            <stop offset={0.79} stopColor="#fff" />
            <stop offset={0.84} stopColor="#FBFBFB" />
            <stop offset={0.88} stopColor="#F1F1F1" />
            <stop offset={0.92} stopColor="#E0E0E0" />
            <stop offset={0.95} stopColor="#C8C8C8" />
            <stop offset={0.97} stopColor="#BEBEBE" />
            <stop offset={1} stopColor="#fff" />
          </linearGradient>
          <linearGradient
            id="paint42_linear_298_940"
            x1={-373.527}
            x2={480}
            y1={17.345}
            y2={17.345}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DEDEDE" />
            <stop offset={0.02} stopColor="#E0E0E0" />
            <stop offset={0.24} stopColor="#F1F1F1" />
            <stop offset={0.49} stopColor="#FBFBFB" />
            <stop offset={0.79} stopColor="#fff" />
            <stop offset={0.84} stopColor="#FBFBFB" />
            <stop offset={0.88} stopColor="#F1F1F1" />
            <stop offset={0.92} stopColor="#E0E0E0" />
            <stop offset={0.95} stopColor="#C8C8C8" />
            <stop offset={0.97} stopColor="#BEBEBE" />
            <stop offset={1} stopColor="#fff" />
          </linearGradient>
          <linearGradient
            id="paint43_linear_298_940"
            x1={-373.527}
            x2={480}
            y1={16.832}
            y2={16.832}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DEDEDE" />
            <stop offset={0.02} stopColor="#E0E0E0" />
            <stop offset={0.24} stopColor="#F1F1F1" />
            <stop offset={0.49} stopColor="#FBFBFB" />
            <stop offset={0.79} stopColor="#fff" />
            <stop offset={0.84} stopColor="#FBFBFB" />
            <stop offset={0.88} stopColor="#F1F1F1" />
            <stop offset={0.92} stopColor="#E0E0E0" />
            <stop offset={0.95} stopColor="#C8C8C8" />
            <stop offset={0.97} stopColor="#BEBEBE" />
            <stop offset={1} stopColor="#fff" />
          </linearGradient>
          <linearGradient
            id="paint44_linear_298_940"
            x1={-300.218}
            x2={553.309}
            y1={17.589}
            y2={17.589}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DEDEDE" />
            <stop offset={0.02} stopColor="#E0E0E0" />
            <stop offset={0.24} stopColor="#F1F1F1" />
            <stop offset={0.49} stopColor="#FBFBFB" />
            <stop offset={0.79} stopColor="#fff" />
            <stop offset={0.84} stopColor="#FBFBFB" />
            <stop offset={0.88} stopColor="#F1F1F1" />
            <stop offset={0.92} stopColor="#E0E0E0" />
            <stop offset={0.95} stopColor="#C8C8C8" />
            <stop offset={0.97} stopColor="#BEBEBE" />
            <stop offset={1} stopColor="#fff" />
          </linearGradient>
          <linearGradient
            id="paint45_linear_298_940"
            x1={-195.556}
            x2={673.778}
            y1={17.056}
            y2={17.056}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DEDEDE" />
            <stop offset={0.02} stopColor="#E0E0E0" />
            <stop offset={0.24} stopColor="#F1F1F1" />
            <stop offset={0.49} stopColor="#FBFBFB" />
            <stop offset={0.79} stopColor="#fff" />
            <stop offset={0.84} stopColor="#FBFBFB" />
            <stop offset={0.88} stopColor="#F1F1F1" />
            <stop offset={0.92} stopColor="#E0E0E0" />
            <stop offset={0.95} stopColor="#C8C8C8" />
            <stop offset={0.97} stopColor="#BEBEBE" />
            <stop offset={1} stopColor="#fff" />
          </linearGradient>
          <linearGradient
            id="paint46_linear_298_940"
            x1={-241.846}
            x2={660.923}
            y1={16.832}
            y2={16.832}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DEDEDE" />
            <stop offset={0.02} stopColor="#E0E0E0" />
            <stop offset={0.24} stopColor="#F1F1F1" />
            <stop offset={0.49} stopColor="#FBFBFB" />
            <stop offset={0.79} stopColor="#fff" />
            <stop offset={0.84} stopColor="#FBFBFB" />
            <stop offset={0.88} stopColor="#F1F1F1" />
            <stop offset={0.92} stopColor="#E0E0E0" />
            <stop offset={0.95} stopColor="#C8C8C8" />
            <stop offset={0.97} stopColor="#BEBEBE" />
            <stop offset={1} stopColor="#fff" />
          </linearGradient>
          <linearGradient
            id="paint47_linear_298_940"
            x1={-284.69}
            x2={524.69}
            y1={17.589}
            y2={17.589}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DEDEDE" />
            <stop offset={0.02} stopColor="#E0E0E0" />
            <stop offset={0.24} stopColor="#F1F1F1" />
            <stop offset={0.49} stopColor="#FBFBFB" />
            <stop offset={0.79} stopColor="#fff" />
            <stop offset={0.84} stopColor="#FBFBFB" />
            <stop offset={0.88} stopColor="#F1F1F1" />
            <stop offset={0.92} stopColor="#E0E0E0" />
            <stop offset={0.95} stopColor="#C8C8C8" />
            <stop offset={0.97} stopColor="#BEBEBE" />
            <stop offset={1} stopColor="#fff" />
          </linearGradient>
          <linearGradient
            id="paint48_linear_298_940"
            x1={-241.846}
            x2={660.923}
            y1={17.056}
            y2={17.056}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DEDEDE" />
            <stop offset={0.02} stopColor="#E0E0E0" />
            <stop offset={0.24} stopColor="#F1F1F1" />
            <stop offset={0.49} stopColor="#FBFBFB" />
            <stop offset={0.79} stopColor="#fff" />
            <stop offset={0.84} stopColor="#FBFBFB" />
            <stop offset={0.88} stopColor="#F1F1F1" />
            <stop offset={0.92} stopColor="#E0E0E0" />
            <stop offset={0.95} stopColor="#C8C8C8" />
            <stop offset={0.97} stopColor="#BEBEBE" />
            <stop offset={1} stopColor="#fff" />
          </linearGradient>
          <linearGradient
            id="paint49_linear_298_940"
            x1={-241.846}
            x2={660.923}
            y1={17.589}
            y2={17.589}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DEDEDE" />
            <stop offset={0.02} stopColor="#E0E0E0" />
            <stop offset={0.24} stopColor="#F1F1F1" />
            <stop offset={0.49} stopColor="#FBFBFB" />
            <stop offset={0.79} stopColor="#fff" />
            <stop offset={0.84} stopColor="#FBFBFB" />
            <stop offset={0.88} stopColor="#F1F1F1" />
            <stop offset={0.92} stopColor="#E0E0E0" />
            <stop offset={0.95} stopColor="#C8C8C8" />
            <stop offset={0.97} stopColor="#BEBEBE" />
            <stop offset={1} stopColor="#fff" />
          </linearGradient>
          <linearGradient
            id="paint50_linear_298_940"
            x1={-195.556}
            x2={673.778}
            y1={17.056}
            y2={17.056}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DEDEDE" />
            <stop offset={0.02} stopColor="#E0E0E0" />
            <stop offset={0.24} stopColor="#F1F1F1" />
            <stop offset={0.49} stopColor="#FBFBFB" />
            <stop offset={0.79} stopColor="#fff" />
            <stop offset={0.84} stopColor="#FBFBFB" />
            <stop offset={0.88} stopColor="#F1F1F1" />
            <stop offset={0.92} stopColor="#E0E0E0" />
            <stop offset={0.95} stopColor="#C8C8C8" />
            <stop offset={0.97} stopColor="#BEBEBE" />
            <stop offset={1} stopColor="#fff" />
          </linearGradient>
          <linearGradient
            id="paint51_linear_298_940"
            x1={-241.846}
            x2={660.923}
            y1={17.589}
            y2={17.589}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DEDEDE" />
            <stop offset={0.02} stopColor="#E0E0E0" />
            <stop offset={0.24} stopColor="#F1F1F1" />
            <stop offset={0.49} stopColor="#FBFBFB" />
            <stop offset={0.79} stopColor="#fff" />
            <stop offset={0.84} stopColor="#FBFBFB" />
            <stop offset={0.88} stopColor="#F1F1F1" />
            <stop offset={0.92} stopColor="#E0E0E0" />
            <stop offset={0.95} stopColor="#C8C8C8" />
            <stop offset={0.97} stopColor="#BEBEBE" />
            <stop offset={1} stopColor="#fff" />
          </linearGradient>
          <linearGradient
            id="paint52_linear_298_940"
            x1={-241.846}
            x2={660.923}
            y1={17.589}
            y2={17.589}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DEDEDE" />
            <stop offset={0.02} stopColor="#E0E0E0" />
            <stop offset={0.24} stopColor="#F1F1F1" />
            <stop offset={0.49} stopColor="#FBFBFB" />
            <stop offset={0.79} stopColor="#fff" />
            <stop offset={0.84} stopColor="#FBFBFB" />
            <stop offset={0.88} stopColor="#F1F1F1" />
            <stop offset={0.92} stopColor="#E0E0E0" />
            <stop offset={0.95} stopColor="#C8C8C8" />
            <stop offset={0.97} stopColor="#BEBEBE" />
            <stop offset={1} stopColor="#fff" />
          </linearGradient>
          <linearGradient
            id="paint53_linear_298_940"
            x1={-307.556}
            x2={561.778}
            y1={16.832}
            y2={16.832}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DEDEDE" />
            <stop offset={0.02} stopColor="#E0E0E0" />
            <stop offset={0.24} stopColor="#F1F1F1" />
            <stop offset={0.49} stopColor="#FBFBFB" />
            <stop offset={0.79} stopColor="#fff" />
            <stop offset={0.84} stopColor="#FBFBFB" />
            <stop offset={0.88} stopColor="#F1F1F1" />
            <stop offset={0.92} stopColor="#E0E0E0" />
            <stop offset={0.95} stopColor="#C8C8C8" />
            <stop offset={0.97} stopColor="#BEBEBE" />
            <stop offset={1} stopColor="#fff" />
          </linearGradient>
          <linearGradient
            id="paint54_linear_298_940"
            x1={-274.717}
            x2={611.019}
            y1={16.832}
            y2={16.832}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DEDEDE" />
            <stop offset={0.02} stopColor="#E0E0E0" />
            <stop offset={0.24} stopColor="#F1F1F1" />
            <stop offset={0.49} stopColor="#FBFBFB" />
            <stop offset={0.79} stopColor="#fff" />
            <stop offset={0.84} stopColor="#FBFBFB" />
            <stop offset={0.88} stopColor="#F1F1F1" />
            <stop offset={0.92} stopColor="#E0E0E0" />
            <stop offset={0.95} stopColor="#C8C8C8" />
            <stop offset={0.97} stopColor="#BEBEBE" />
            <stop offset={1} stopColor="#fff" />
          </linearGradient>
          <linearGradient
            id="paint55_linear_298_940"
            x1={-280}
            x2={622.769}
            y1={17.589}
            y2={17.589}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DEDEDE" />
            <stop offset={0.02} stopColor="#E0E0E0" />
            <stop offset={0.24} stopColor="#F1F1F1" />
            <stop offset={0.49} stopColor="#FBFBFB" />
            <stop offset={0.79} stopColor="#fff" />
            <stop offset={0.84} stopColor="#FBFBFB" />
            <stop offset={0.88} stopColor="#F1F1F1" />
            <stop offset={0.92} stopColor="#E0E0E0" />
            <stop offset={0.95} stopColor="#C8C8C8" />
            <stop offset={0.97} stopColor="#BEBEBE" />
            <stop offset={1} stopColor="#fff" />
          </linearGradient>
          <linearGradient
            id="paint56_linear_298_940"
            x1={10.65}
            x2={25.32}
            y1={17.25}
            y2={17.25}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DEDEDE" />
            <stop offset={0.02} stopColor="#E0E0E0" />
            <stop offset={0.24} stopColor="#F1F1F1" />
            <stop offset={0.49} stopColor="#FBFBFB" />
            <stop offset={0.79} stopColor="#fff" />
            <stop offset={0.84} stopColor="#FBFBFB" />
            <stop offset={0.88} stopColor="#F1F1F1" />
            <stop offset={0.92} stopColor="#E0E0E0" />
            <stop offset={0.95} stopColor="#C8C8C8" />
            <stop offset={0.97} stopColor="#BEBEBE" />
            <stop offset={1} stopColor="#fff" />
          </linearGradient>
          <linearGradient
            id="paint57_linear_298_940"
            x1={10.65}
            x2={25.32}
            y1={17.25}
            y2={17.25}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DEDEDE" />
            <stop offset={0.02} stopColor="#E0E0E0" />
            <stop offset={0.24} stopColor="#F1F1F1" />
            <stop offset={0.49} stopColor="#FBFBFB" />
            <stop offset={0.79} stopColor="#fff" />
            <stop offset={0.84} stopColor="#FBFBFB" />
            <stop offset={0.88} stopColor="#F1F1F1" />
            <stop offset={0.92} stopColor="#E0E0E0" />
            <stop offset={0.95} stopColor="#C8C8C8" />
            <stop offset={0.97} stopColor="#BEBEBE" />
            <stop offset={1} stopColor="#fff" />
          </linearGradient>
          <clipPath id="clip0_298_940">
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
export default IconAustFull
