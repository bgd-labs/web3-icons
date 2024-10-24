// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStatausdc } from "../../../icons/full/build/icon-statausdc.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatausdcIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatausdc.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatausdcIcon.displayName = 'StatausdcIcon';
}

export default StatausdcIcon;