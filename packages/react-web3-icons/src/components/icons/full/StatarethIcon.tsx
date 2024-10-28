// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatareth } from "../../../icons/full/build/icon-statareth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatarethIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatareth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatarethIcon.displayName = 'StatarethIcon';
}

export default StatarethIcon;