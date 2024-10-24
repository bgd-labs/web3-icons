// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStatausds } from "../../../icons/full/build/icon-statausds.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatausdsIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatausds.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatausdsIcon.displayName = 'StatausdsIcon';
}

export default StatausdsIcon;