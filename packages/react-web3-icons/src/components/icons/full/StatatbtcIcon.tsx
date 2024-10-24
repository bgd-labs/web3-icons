// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStatatbtc } from "../../../icons/full/build/icon-statatbtc.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatatbtcIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatatbtc.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatatbtcIcon.displayName = 'StatatbtcIcon';
}

export default StatatbtcIcon;