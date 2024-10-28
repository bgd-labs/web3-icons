// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStkaave } from "../../../icons/mono/build/icon-stkaave.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StkaaveIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStkaave.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StkaaveIcon.displayName = 'StkaaveIcon';
}

export default StkaaveIcon;