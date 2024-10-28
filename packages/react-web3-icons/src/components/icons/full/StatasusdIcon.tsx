// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatasusd } from "../../../icons/full/build/icon-statasusd.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatasusdIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatasusd.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatasusdIcon.displayName = 'StatasusdIcon';
}

export default StatasusdIcon;