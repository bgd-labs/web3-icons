// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStataaave } from "../../../icons/full/build/icon-stataaave.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StataaaveIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStataaave.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StataaaveIcon.displayName = 'StataaaveIcon';
}

export default StataaaveIcon;