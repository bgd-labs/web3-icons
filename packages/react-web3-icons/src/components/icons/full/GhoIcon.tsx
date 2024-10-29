// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconGho } from "../../../icons/full/build/icon-gho.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const GhoIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconGho.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  GhoIcon.displayName = 'GhoIcon';
}

export default GhoIcon;