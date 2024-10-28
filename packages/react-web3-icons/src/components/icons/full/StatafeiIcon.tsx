// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatafei } from "../../../icons/full/build/icon-statafei.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatafeiIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatafei.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatafeiIcon.displayName = 'StatafeiIcon';
}

export default StatafeiIcon;