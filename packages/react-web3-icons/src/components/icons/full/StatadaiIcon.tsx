// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatadai } from "../../../icons/full/build/icon-statadai.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatadaiIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatadai.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatadaiIcon.displayName = 'StatadaiIcon';
}

export default StatadaiIcon;