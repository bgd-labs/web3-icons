// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconTbtc } from "../../../icons/full/build/icon-tbtc.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const TbtcIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconTbtc.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  TbtcIcon.displayName = 'TbtcIcon';
}

export default TbtcIcon;