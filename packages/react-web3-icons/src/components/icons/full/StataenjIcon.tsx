// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStataenj } from "../../../icons/full/build/icon-stataenj.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StataenjIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStataenj.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StataenjIcon.displayName = 'StataenjIcon';
}

export default StataenjIcon;