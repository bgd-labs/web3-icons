// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconBpt } from "../../../icons/full/build/icon-bpt.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const BptIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconBpt.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  BptIcon.displayName = 'BptIcon';
}

export default BptIcon;