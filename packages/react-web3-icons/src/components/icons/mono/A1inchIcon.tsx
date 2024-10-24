// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconA1Inch } from "../../../icons/mono/build/icon-a1inch.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const A1inchIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconA1Inch.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  A1inchIcon.displayName = 'A1inchIcon';
}

export default A1inchIcon;