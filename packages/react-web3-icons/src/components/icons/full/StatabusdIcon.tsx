// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatabusd } from "../../../icons/full/build/icon-statabusd.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatabusdIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatabusd.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatabusdIcon.displayName = 'StatabusdIcon';
}

export default StatabusdIcon;