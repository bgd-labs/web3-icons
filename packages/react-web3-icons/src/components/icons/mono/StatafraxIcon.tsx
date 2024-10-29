// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatafrax } from "../../../icons/mono/build/icon-statafrax.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatafraxIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatafrax.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatafraxIcon.displayName = 'StatafraxIcon';
}

export default StatafraxIcon;