// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconGno } from "../../../icons/full/build/icon-gno.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const GnoIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconGno.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  GnoIcon.displayName = 'GnoIcon';
}

export default GnoIcon;