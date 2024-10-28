// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatatusd } from "../../../icons/mono/build/icon-statatusd.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatatusdIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatatusd.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatatusdIcon.displayName = 'StatatusdIcon';
}

export default StatatusdIcon;