// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStataop } from "../../../icons/full/build/icon-stataop.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StataopIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStataop.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StataopIcon.displayName = 'StataopIcon';
}

export default StataopIcon;