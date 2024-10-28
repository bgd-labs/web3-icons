// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconArb } from "../../../icons/full/build/icon-arb.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const ArbIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconArb.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  ArbIcon.displayName = 'ArbIcon';
}

export default ArbIcon;