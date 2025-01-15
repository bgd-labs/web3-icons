// GENERATED BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconFramewallet } from "../../../icons/full/build/icon-framewallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const FramewalletIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconFramewallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  FramewalletIcon.displayName = 'FramewalletIcon';
}

export default FramewalletIcon;