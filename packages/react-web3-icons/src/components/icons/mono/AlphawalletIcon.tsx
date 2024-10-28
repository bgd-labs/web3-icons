// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAlphawallet } from "../../../icons/mono/build/icon-alphawallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AlphawalletIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAlphawallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AlphawalletIcon.displayName = 'AlphawalletIcon';
}

export default AlphawalletIcon;