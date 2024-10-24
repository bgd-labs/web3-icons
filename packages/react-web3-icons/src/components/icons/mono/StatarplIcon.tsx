// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStatarpl } from "../../../icons/mono/build/icon-statarpl.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatarplIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatarpl.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatarplIcon.displayName = 'StatarplIcon';
}

export default StatarplIcon;