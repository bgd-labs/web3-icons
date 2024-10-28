// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconHyperpaywallet } from "../../../icons/full/build/icon-hyperpaywallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const HyperpaywalletIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconHyperpaywallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  HyperpaywalletIcon.displayName = 'HyperpaywalletIcon';
}

export default HyperpaywalletIcon;