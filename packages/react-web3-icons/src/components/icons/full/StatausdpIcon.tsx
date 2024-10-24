// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStatausdp } from "../../../icons/full/build/icon-statausdp.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatausdpIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatausdp.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatausdpIcon.displayName = 'StatausdpIcon';
}

export default StatausdpIcon;