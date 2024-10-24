// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStatarep } from "../../../icons/full/build/icon-statarep.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatarepIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatarep.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatarepIcon.displayName = 'StatarepIcon';
}

export default StatarepIcon;