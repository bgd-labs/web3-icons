// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStataone } from "../../../icons/full/build/icon-stataone.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StataoneIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStataone.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StataoneIcon.displayName = 'StataoneIcon';
}

export default StataoneIcon;