// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatabal } from "../../../icons/full/build/icon-statabal.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatabalIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatabal.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatabalIcon.displayName = 'StatabalIcon';
}

export default StatabalIcon;