// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconDefiwallet } from "../../../icons/full/build/icon-defiwallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const DefiwalletIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconDefiwallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  DefiwalletIcon.displayName = 'DefiwalletIcon';
}

export default DefiwalletIcon;