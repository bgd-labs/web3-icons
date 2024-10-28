// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconZerionwallet } from "../../../icons/mono/build/icon-zerionwallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const ZerionwalletIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconZerionwallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  ZerionwalletIcon.displayName = 'ZerionwalletIcon';
}

export default ZerionwalletIcon;