// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconWone } from "../../../icons/mono/build/icon-wone.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const WoneIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconWone.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  WoneIcon.displayName = 'WoneIcon';
}

export default WoneIcon;