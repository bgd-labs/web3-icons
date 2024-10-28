// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconBravewallet } from "../../../icons/mono/build/icon-bravewallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const BravewalletIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconBravewallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  BravewalletIcon.displayName = 'BravewalletIcon';
}

export default BravewalletIcon;