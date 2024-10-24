// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStataavax } from "../../../icons/full/build/icon-stataavax.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StataavaxIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStataavax.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StataavaxIcon.displayName = 'StataavaxIcon';
}

export default StataavaxIcon;