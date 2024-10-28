// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatamatic } from "../../../icons/full/build/icon-statamatic.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatamaticIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatamatic.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatamaticIcon.displayName = 'StatamaticIcon';
}

export default StatamaticIcon;