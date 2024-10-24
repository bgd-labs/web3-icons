// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStatazk } from "../../../icons/full/build/icon-statazk.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatazkIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatazk.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatazkIcon.displayName = 'StatazkIcon';
}

export default StatazkIcon;