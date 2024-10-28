// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatafxs } from "../../../icons/full/build/icon-statafxs.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatafxsIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatafxs.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatafxsIcon.displayName = 'StatafxsIcon';
}

export default StatafxsIcon;