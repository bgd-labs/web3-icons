// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStatausdt } from "../../../icons/mono/build/icon-statausdt.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatausdtIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatausdt.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatausdtIcon.displayName = 'StatausdtIcon';
}

export default StatausdtIcon;