// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStatayfi } from "../../../icons/full/build/icon-statayfi.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatayfiIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatayfi.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatayfiIcon.displayName = 'StatayfiIcon';
}

export default StatayfiIcon;