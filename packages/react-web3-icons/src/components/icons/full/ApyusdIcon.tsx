// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconApyusd } from "../../../icons/full/build/icon-apyusd.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const ApyusdIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconApyusd.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  ApyusdIcon.displayName = 'ApyusdIcon';
}

export default ApyusdIcon;