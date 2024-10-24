// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStataarb } from "../../../icons/mono/build/icon-stataarb.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StataarbIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStataarb.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StataarbIcon.displayName = 'StataarbIcon';
}

export default StataarbIcon;