// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconWeth } from "../../../icons/mono/build/icon-weth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const WethIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconWeth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  WethIcon.displayName = 'WethIcon';
}

export default WethIcon;