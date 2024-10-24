// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconScrolltestnet } from "../../../icons/full/build/icon-scrolltestnet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const ScrolltestnetIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconScrolltestnet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  ScrolltestnetIcon.displayName = 'ScrolltestnetIcon';
}

export default ScrolltestnetIcon;