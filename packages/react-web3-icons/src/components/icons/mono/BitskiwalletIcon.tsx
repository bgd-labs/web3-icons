// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconBitskiwallet } from "../../../icons/mono/build/icon-bitskiwallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const BitskiwalletIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconBitskiwallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  BitskiwalletIcon.displayName = 'BitskiwalletIcon';
}

export default BitskiwalletIcon;