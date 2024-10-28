// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconSusde } from "../../../icons/full/build/icon-susde.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const SusdeIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconSusde.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  SusdeIcon.displayName = 'SusdeIcon';
}

export default SusdeIcon;