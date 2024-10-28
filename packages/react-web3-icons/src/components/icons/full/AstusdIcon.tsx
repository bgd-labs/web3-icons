// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAstusd } from "../../../icons/full/build/icon-astusd.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AstusdIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAstusd.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AstusdIcon.displayName = 'AstusdIcon';
}

export default AstusdIcon;