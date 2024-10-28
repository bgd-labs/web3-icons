// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconWftm } from "../../../icons/mono/build/icon-wftm.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const WftmIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconWftm.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  WftmIcon.displayName = 'WftmIcon';
}

export default WftmIcon;