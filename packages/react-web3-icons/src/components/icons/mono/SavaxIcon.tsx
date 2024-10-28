// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconSavax } from "../../../icons/mono/build/icon-savax.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const SavaxIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconSavax.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  SavaxIcon.displayName = 'SavaxIcon';
}

export default SavaxIcon;