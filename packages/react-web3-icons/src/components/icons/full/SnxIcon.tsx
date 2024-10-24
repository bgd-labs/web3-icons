// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconSnx } from "../../../icons/full/build/icon-snx.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const SnxIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconSnx.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  SnxIcon.displayName = 'SnxIcon';
}

export default SnxIcon;