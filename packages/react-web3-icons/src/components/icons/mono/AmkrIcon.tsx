// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAmkr } from "../../../icons/mono/build/icon-amkr.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AmkrIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAmkr.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AmkrIcon.displayName = 'AmkrIcon';
}

export default AmkrIcon;