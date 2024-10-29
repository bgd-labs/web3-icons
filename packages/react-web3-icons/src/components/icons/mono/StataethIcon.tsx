// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStataeth } from "../../../icons/mono/build/icon-stataeth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StataethIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStataeth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StataethIcon.displayName = 'StataethIcon';
}

export default StataethIcon;