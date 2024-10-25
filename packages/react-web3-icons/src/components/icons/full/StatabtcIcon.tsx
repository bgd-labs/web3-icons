// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStatabtc } from "../../../icons/full/build/icon-statabtc.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatabtcIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatabtc.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatabtcIcon.displayName = 'StatabtcIcon';
}

export default StatabtcIcon;