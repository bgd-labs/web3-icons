// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconWbnb } from "../../../icons/full/build/icon-wbnb.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const WbnbIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconWbnb.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  WbnbIcon.displayName = 'WbnbIcon';
}

export default WbnbIcon;