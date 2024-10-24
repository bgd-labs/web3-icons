// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconXdefiwallet } from "../../../icons/full/build/icon-xdefiwallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const XdefiwalletIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconXdefiwallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  XdefiwalletIcon.displayName = 'XdefiwalletIcon';
}

export default XdefiwalletIcon;