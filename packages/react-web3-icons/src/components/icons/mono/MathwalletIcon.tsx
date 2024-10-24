// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconMathwallet } from "../../../icons/mono/build/icon-mathwallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const MathwalletIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconMathwallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  MathwalletIcon.displayName = 'MathwalletIcon';
}

export default MathwalletIcon;