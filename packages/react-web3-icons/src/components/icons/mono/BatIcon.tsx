// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconBat } from "../../../icons/mono/build/icon-bat.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const BatIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconBat.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  BatIcon.displayName = 'BatIcon';
}

export default BatIcon;