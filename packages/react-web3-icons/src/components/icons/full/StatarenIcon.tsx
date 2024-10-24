// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStataren } from "../../../icons/full/build/icon-stataren.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatarenIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStataren.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatarenIcon.displayName = 'StatarenIcon';
}

export default StatarenIcon;