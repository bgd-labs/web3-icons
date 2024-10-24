// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { icon1Inch } from "../../../icons/mono/build/icon-1inch.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const OneInchIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={icon1Inch.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  OneInchIcon.displayName = 'OneInchIcon';
}

export default OneInchIcon;