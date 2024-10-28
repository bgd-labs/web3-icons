// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatagho } from "../../../icons/full/build/icon-statagho.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StataghoIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatagho.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StataghoIcon.displayName = 'StataghoIcon';
}

export default StataghoIcon;