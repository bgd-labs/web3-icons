// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStatabpt } from "../../../icons/mono/build/icon-statabpt.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatabptIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatabpt.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatabptIcon.displayName = 'StatabptIcon';
}

export default StatabptIcon;