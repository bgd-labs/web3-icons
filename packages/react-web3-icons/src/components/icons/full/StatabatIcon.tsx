// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStatabat } from "../../../icons/full/build/icon-statabat.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatabatIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatabat.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatabatIcon.displayName = 'StatabatIcon';
}

export default StatabatIcon;