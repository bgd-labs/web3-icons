// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconMatic } from "../../../icons/full/build/icon-matic.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const MaticIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconMatic.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  MaticIcon.displayName = 'MaticIcon';
}

export default MaticIcon;