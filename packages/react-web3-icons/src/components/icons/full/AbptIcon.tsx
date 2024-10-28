// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAbpt } from "../../../icons/full/build/icon-abpt.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AbptIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAbpt.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AbptIcon.displayName = 'AbptIcon';
}

export default AbptIcon;