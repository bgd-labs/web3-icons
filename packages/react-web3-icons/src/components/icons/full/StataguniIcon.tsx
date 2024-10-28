// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStataguni } from "../../../icons/full/build/icon-stataguni.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StataguniIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStataguni.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StataguniIcon.displayName = 'StataguniIcon';
}

export default StataguniIcon;