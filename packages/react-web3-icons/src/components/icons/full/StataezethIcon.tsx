// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStataezeth } from "../../../icons/full/build/icon-stataezeth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StataezethIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStataezeth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StataezethIcon.displayName = 'StataezethIcon';
}

export default StataezethIcon;