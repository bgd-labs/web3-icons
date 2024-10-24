// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconWsteth } from "../../../icons/full/build/icon-wsteth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const WstethIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconWsteth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  WstethIcon.displayName = 'WstethIcon';
}

export default WstethIcon;