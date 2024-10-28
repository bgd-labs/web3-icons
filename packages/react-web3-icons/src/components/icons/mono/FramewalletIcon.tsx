// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconFramewallet } from "../../../icons/mono/build/icon-framewallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const FramewalletIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconFramewallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  FramewalletIcon.displayName = 'FramewalletIcon';
}

export default FramewalletIcon;