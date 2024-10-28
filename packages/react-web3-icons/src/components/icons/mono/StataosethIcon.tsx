// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStataoseth } from "../../../icons/mono/build/icon-stataoseth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StataosethIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStataoseth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StataosethIcon.displayName = 'StataosethIcon';
}

export default StataosethIcon;