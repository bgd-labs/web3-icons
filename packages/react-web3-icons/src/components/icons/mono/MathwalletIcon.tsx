// GENERATED BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconMathwallet } from "../../../icons/mono/build/icon-mathwallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const MathwalletIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconMathwallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  MathwalletIcon.displayName = 'MathwalletIcon';
}

export default MathwalletIcon;