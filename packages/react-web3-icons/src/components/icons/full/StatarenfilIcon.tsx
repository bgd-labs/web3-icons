// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStatarenfil } from "../../../icons/full/build/icon-statarenfil.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatarenfilIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatarenfil.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatarenfilIcon.displayName = 'StatarenfilIcon';
}

export default StatarenfilIcon;