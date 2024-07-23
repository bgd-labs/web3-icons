import * as React from "react";
import type { SVGProps } from "react";
const IconAsushiMono = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <circle cx={16} cy={16} r={15} stroke="currentColor" strokeWidth={2} />
    <g clipPath="url(#sushitoken__circleClip)">
      <g
        style={{
          transform: "scale(.8125)",
          transformOrigin: "50% 50%",
        }}
      >
        <path
          fill="currentColor"
          d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0m-2.206 7.02c-1.35-.11-2.393.23-2.933 1.005l-3.715 5.307c-.54.774-.522 1.899.018 3.17.747 1.751 2.474 3.824 4.849 5.557 2.366 1.741 4.84 2.755 6.702 2.92 1.34.111 2.393-.23 2.933-1.004l3.706-5.307c.54-.774.522-1.899-.018-3.17-.738-1.751-2.474-3.824-4.84-5.566-2.375-1.732-4.84-2.755-6.702-2.912m7.788 12.448c.705.125 1.331.148 1.845.064a.134.134 0 0 1 .043.264c-.547.09-1.202.065-1.934-.064a.134.134 0 0 1 .046-.264m-1.027-.239q.26.073.51.132a.134.134 0 0 1-.06.261q-.258-.06-.522-.135a.134.134 0 0 1 .072-.258m-9.18-10.826c.432-.618 1.287-.82 2.366-.728 1.772.147 4.12 1.133 6.378 2.792 2.267 1.658 3.932 3.621 4.642 5.289.423 1.013.513 1.916.081 2.525l-.027.046c-.44.58-1.277.774-2.339.69-1.772-.147-4.12-1.133-6.378-2.791-2.258-1.659-3.922-3.622-4.633-5.299-.423-.995-.513-1.87-.108-2.488zm-.744 2.448c.07-.021.145.02.165.09.447 1.532 1.614 3.015 3.457 4.698l.207.188q.159.143.322.285a.135.135 0 0 1-.028.222.13.13 0 0 1-.102.006.1.1 0 0 1-.045-.026 36 36 0 0 1-.426-.38l-.205-.186c-1.82-1.678-2.98-3.167-3.435-4.731a.134.134 0 0 1 .09-.166m5.251-.283c-.504-.037-.908.046-1.106.332-.198.285-.144.7.054 1.17.35.838 1.187 1.815 2.32 2.645 1.134.829 2.304 1.326 3.194 1.4.495.046.9-.037 1.098-.322.207-.286.153-.7-.054-1.17-.351-.84-1.188-1.825-2.321-2.654-1.125-.83-2.303-1.318-3.185-1.401m-5.397-.778a.133.133 0 0 1 .138.128q.011.255.055.515a.133.133 0 1 1-.262.045 4 4 0 0 1-.059-.549.134.134 0 0 1 .128-.14z"
        />
      </g>
    </g>
    <defs>
      <clipPath id="sushitoken__circleClip">
        <circle cx={16} cy={16} r={13} />
      </clipPath>
    </defs>
  </svg>
);
export default IconAsushiMono;
