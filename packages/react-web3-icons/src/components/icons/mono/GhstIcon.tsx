// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconGhst } from "../../../icons/mono/build/icon-ghst.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const GhstIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconGhst.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  GhstIcon.displayName = 'GhstIcon';
}

export default GhstIcon;