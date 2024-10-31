// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconRainbowwallet } from "../../../icons/mono/build/icon-rainbowwallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const RainbowwalletIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconRainbowwallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  RainbowwalletIcon.displayName = 'RainbowwalletIcon';
}

export default RainbowwalletIcon;