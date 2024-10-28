// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatalusd } from "../../../icons/full/build/icon-statalusd.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatalusdIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatalusd.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatalusdIcon.displayName = 'StatalusdIcon';
}

export default StatalusdIcon;