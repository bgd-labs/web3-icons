// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconRainbowwallet } from "../../../icons/full/build/icon-rainbowwallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const RainbowwalletIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconRainbowwallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  RainbowwalletIcon.displayName = 'RainbowwalletIcon';
}

export default RainbowwalletIcon;