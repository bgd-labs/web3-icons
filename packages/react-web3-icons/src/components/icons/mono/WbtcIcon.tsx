// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconWbtc } from "../../../icons/mono/build/icon-wbtc.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const WbtcIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconWbtc.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  WbtcIcon.displayName = 'WbtcIcon';
}

export default WbtcIcon;