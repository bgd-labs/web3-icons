// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconBlockwallet } from "../../../icons/full/build/icon-blockwallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const BlockwalletIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconBlockwallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  BlockwalletIcon.displayName = 'BlockwalletIcon';
}

export default BlockwalletIcon;