// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStataop } from "../../../icons/mono/build/icon-stataop.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StataopIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStataop.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StataopIcon.displayName = 'StataopIcon';
}

export default StataopIcon;