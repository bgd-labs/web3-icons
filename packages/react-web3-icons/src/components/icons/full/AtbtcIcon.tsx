// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconAtbtc } from "../../../icons/full/build/icon-atbtc.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AtbtcIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAtbtc.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AtbtcIcon.displayName = 'AtbtcIcon';
}

export default AtbtcIcon;