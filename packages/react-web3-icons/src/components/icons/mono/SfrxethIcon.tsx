// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconSfrxeth } from "../../../icons/mono/build/icon-sfrxeth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const SfrxethIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconSfrxeth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  SfrxethIcon.displayName = 'SfrxethIcon';
}

export default SfrxethIcon;