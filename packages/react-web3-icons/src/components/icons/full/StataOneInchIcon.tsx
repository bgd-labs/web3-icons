// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStata1Inch } from "../../../icons/full/build/icon-stata1inch.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StataOneInchIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStata1Inch.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StataOneInchIcon.displayName = 'StataOneInchIcon';
}

export default StataOneInchIcon;