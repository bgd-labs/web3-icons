// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatagno } from "../../../icons/mono/build/icon-statagno.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatagnoIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatagno.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatagnoIcon.displayName = 'StatagnoIcon';
}

export default StatagnoIcon;