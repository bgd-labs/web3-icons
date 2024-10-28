// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconPyusd } from "../../../icons/full/build/icon-pyusd.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const PyusdIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconPyusd.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  PyusdIcon.displayName = 'PyusdIcon';
}

export default PyusdIcon;