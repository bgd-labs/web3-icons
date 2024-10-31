// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconXdefiwallet } from "../../../icons/mono/build/icon-xdefiwallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const XdefiwalletIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconXdefiwallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  XdefiwalletIcon.displayName = 'XdefiwalletIcon';
}

export default XdefiwalletIcon;