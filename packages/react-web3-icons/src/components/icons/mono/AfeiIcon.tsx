// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconAfei } from "../../../icons/mono/build/icon-afei.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AfeiIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAfei.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AfeiIcon.displayName = 'AfeiIcon';
}

export default AfeiIcon;