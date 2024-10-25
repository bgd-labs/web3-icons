// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStatacbbtc } from "../../../icons/full/build/icon-statacbbtc.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatacbbtcIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatacbbtc.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatacbbtcIcon.displayName = 'StatacbbtcIcon';
}

export default StatacbbtcIcon;