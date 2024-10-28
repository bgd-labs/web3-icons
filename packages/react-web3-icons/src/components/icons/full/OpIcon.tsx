// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconOp } from "../../../icons/full/build/icon-op.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const OpIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconOp.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  OpIcon.displayName = 'OpIcon';
}

export default OpIcon;