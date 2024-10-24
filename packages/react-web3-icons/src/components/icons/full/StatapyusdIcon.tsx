// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStatapyusd } from "../../../icons/full/build/icon-statapyusd.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatapyusdIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatapyusd.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatapyusdIcon.displayName = 'StatapyusdIcon';
}

export default StatapyusdIcon;