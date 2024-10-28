// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStataxsushi } from "../../../icons/full/build/icon-stataxsushi.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StataxsushiIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStataxsushi.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StataxsushiIcon.displayName = 'StataxsushiIcon';
}

export default StataxsushiIcon;