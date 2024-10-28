// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatastusd } from "../../../icons/full/build/icon-statastusd.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatastusdIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatastusd.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatastusdIcon.displayName = 'StatastusdIcon';
}

export default StatastusdIcon;