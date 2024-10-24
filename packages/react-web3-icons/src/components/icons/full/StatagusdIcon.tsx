// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStatagusd } from "../../../icons/full/build/icon-statagusd.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatagusdIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatagusd.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatagusdIcon.displayName = 'StatagusdIcon';
}

export default StatagusdIcon;