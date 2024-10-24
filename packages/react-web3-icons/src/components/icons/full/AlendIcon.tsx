// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconAlend } from "../../../icons/full/build/icon-alend.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AlendIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAlend.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AlendIcon.displayName = 'AlendIcon';
}

export default AlendIcon;