// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconBusd } from "../../../icons/full/build/icon-busd.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const BusdIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconBusd.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  BusdIcon.displayName = 'BusdIcon';
}

export default BusdIcon;