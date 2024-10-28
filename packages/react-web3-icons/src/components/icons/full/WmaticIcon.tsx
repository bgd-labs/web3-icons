// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconWmatic } from "../../../icons/full/build/icon-wmatic.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const WmaticIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconWmatic.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  WmaticIcon.displayName = 'WmaticIcon';
}

export default WmaticIcon;